// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://dino43v3r-hub.github.io',
  base: '/m-brand',
  integrations: [sitemap()],
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "base-uri 'none'",
        "object-src 'none'",
        "form-action 'none'",
        "connect-src 'none'",
        "img-src 'self' data:",
      ],
    },
  },
});
