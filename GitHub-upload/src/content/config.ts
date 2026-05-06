import { defineCollection, z } from 'astro:content';

/**
 * 1用語1ファイル。URL はファイル名 = entry.id（例: api.md → /terms/api/）。
 * related は別用語の id（拡張子なしファイル名）を列挙。
 */
const terms = defineCollection({
  type: 'content',
  schema: z.object({
    titleJa: z.string(),
    titleEn: z.string(),
    tags: z.array(z.string()).default([]),
    related: z.array(z.string()).default([]),
  }),
});

export const collections = { terms };
