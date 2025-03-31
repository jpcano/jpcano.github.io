import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkToc from 'remark-toc';
import icon from "astro-icon";
import rehipeFigure from "rehype-figure"

export default defineConfig({
  site: 'https://jesus.engineer',
  integrations: [mdx(), sitemap(), icon()],
  markdown: {
    remarkPlugins: [ [remarkToc, { heading: 'contents',} ] ],
    rehypePlugins: [rehipeFigure],
  },
});