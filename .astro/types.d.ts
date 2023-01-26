declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (data: CollectionEntry<C>) => boolean
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"player": {
"anthony.md": {
  id: "anthony.md",
  slug: "anthony",
  body: string,
  collection: "player",
  data: InferEntrySchema<"player">
},
"bisakka.md": {
  id: "bisakka.md",
  slug: "bisakka",
  body: string,
  collection: "player",
  data: InferEntrySchema<"player">
},
"casemiro.md": {
  id: "casemiro.md",
  slug: "casemiro",
  body: string,
  collection: "player",
  data: InferEntrySchema<"player">
},
"degea.md": {
  id: "degea.md",
  slug: "degea",
  body: string,
  collection: "player",
  data: InferEntrySchema<"player">
},
"fernandes.md": {
  id: "fernandes.md",
  slug: "fernandes",
  body: string,
  collection: "player",
  data: InferEntrySchema<"player">
},
"garnacho.md": {
  id: "garnacho.md",
  slug: "garnacho",
  body: string,
  collection: "player",
  data: InferEntrySchema<"player">
},
"maguire.md": {
  id: "maguire.md",
  slug: "maguire",
  body: string,
  collection: "player",
  data: InferEntrySchema<"player">
},
"malacia.md": {
  id: "malacia.md",
  slug: "malacia",
  body: string,
  collection: "player",
  data: InferEntrySchema<"player">
},
"martinez.md": {
  id: "martinez.md",
  slug: "martinez",
  body: string,
  collection: "player",
  data: InferEntrySchema<"player">
},
"mctom.md": {
  id: "mctom.md",
  slug: "mctom",
  body: string,
  collection: "player",
  data: InferEntrySchema<"player">
},
"rashford.md": {
  id: "rashford.md",
  slug: "rashford",
  body: string,
  collection: "player",
  data: InferEntrySchema<"player">
},
"shaw.md": {
  id: "shaw.md",
  slug: "shaw",
  body: string,
  collection: "player",
  data: InferEntrySchema<"player">
},
"tenhaag.md": {
  id: "tenhaag.md",
  slug: "tenhaag",
  body: string,
  collection: "player",
  data: InferEntrySchema<"player">
},
"varane.md": {
  id: "varane.md",
  slug: "varane",
  body: string,
  collection: "player",
  data: InferEntrySchema<"player">
},
"weghorst.md": {
  id: "weghorst.md",
  slug: "weghorst",
  body: string,
  collection: "player",
  data: InferEntrySchema<"player">
},
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
