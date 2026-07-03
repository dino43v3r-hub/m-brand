import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const connectaloud = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/connectaloud' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean(),
  }),
});

export const collections = { connectaloud };
