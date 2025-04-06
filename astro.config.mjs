import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkToc from 'remark-toc';
import icon from "astro-icon";
import rehipeFigure from "rehype-figure"

export default defineConfig({
  site: 'https://jesus.engineer',
  integrations: [mdx(), icon(), sitemap({
    i18n: {
      defaultLocale: 'en',
      locales: {
        en: 'en-US',
      },
    },
    filter: (page) => page !== 'https://jesus.engineer/portfolio/',
  })],
  markdown: {
    remarkPlugins: [ [remarkToc, { heading: 'contents',} ] ],
    rehypePlugins: [rehipeFigure],
    shikiConfig: {
      theme: 'plastic',
    }
  },
});