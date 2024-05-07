import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import icon from "astro-icon";

export default defineConfig({
  site: 'https://jesus.engineer',
  integrations: [mdx(), sitemap(), icon()]
});