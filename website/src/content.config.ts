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

const conversations = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/conversations' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    linkedinUrl: z.string().url(),
    image: z.object({ src: z.string(), alt: z.string() }).optional(),
    relatedArticleUrl: z.string().optional(),
    relatedArticleTitle: z.string().optional(),
    relatedResearchNoteUrl: z.string().optional(),
    relatedResearchNoteTitle: z.string().optional(),
    status: z.enum(['published', 'draft', 'template']).default('draft'),
    featured: z.boolean().default(false),
  }).refine((entry) => !entry.relatedArticleUrl || Boolean(entry.relatedArticleTitle), {
    message: 'relatedArticleTitle is required when relatedArticleUrl is set',
  }).refine((entry) => !entry.relatedResearchNoteUrl || Boolean(entry.relatedResearchNoteTitle), {
    message: 'relatedResearchNoteTitle is required when relatedResearchNoteUrl is set',
  }),
});
export const collections = { connectaloud, conversations };
