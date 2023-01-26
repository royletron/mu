import { z, defineCollection } from "astro:content";

const player = defineCollection({
  schema: z.object({
    name: z.string(),
    nickname: z.string(),
    from: z.string(),
    order: z.number().default(0),
    position: z.object({
      area: z.enum(["MAN", "GK", "DEF", "MID", "ATK"]),
      name: z.string(),
      short: z.string(),
    }),
    image: z.string(),
    best: z.string(),
    worst: z.string(),
  }),
});

export const collections = {
  player: player,
};
