// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://dino43v3r-hub.github.io',
  base: '/m-brand',
  integrations: [sitemap()],
});
