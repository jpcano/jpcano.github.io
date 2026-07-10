import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkToc from 'remark-toc';
import icon from "astro-icon";
import rehipeFigure from "rehype-figure"
import { unified } from '@astrojs/markdown-remark';

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
    //TODO: Use Sätteri instead because remark/rehype are deprecated
    processor: unified({
      remarkPlugins: [[remarkToc, { heading: 'contents', }]],
      rehypePlugins: [rehipeFigure]
    }),
    shikiConfig: {
      theme: 'plastic',
    }
  },
});