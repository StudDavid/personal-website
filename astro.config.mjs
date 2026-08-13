// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// BASE_PATH lets the same build serve from two places:
//   unset                       -> https://theidel.com/                            (final)
//   BASE_PATH=/personal-website -> https://studdavid.github.io/personal-website/    (testing)
const base = process.env.BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  site: 'https://theidel.com',
  base,
  trailingSlash: 'always',
  integrations: [sitemap()],
});
