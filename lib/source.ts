import { loader, llms } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';
import { defineDocs } from 'fumadocs-mdx/macro';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import { z } from 'zod';

export const blogPostSchema = pageSchema.extend({
  date: z.union([z.string(), z.date()]).optional(),
  tags: z.array(z.string()).optional(),
  author: z.string().optional(),
  image: z.string().optional(),
  lastmod: z.union([z.string(), z.date()]).optional(),
  type: z.string().optional(),
  featured: z.boolean().optional(),
});

export const pageDocSchema = pageSchema.extend({
  date: z.union([z.string(), z.date()]).optional(),
  type: z.string().optional(),
  image: z.string().optional(),
  author: z.string().optional(),
});

const posts = defineDocs({
  dir: 'content/posts',
  docs: {
    schema: blogPostSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

const pages = defineDocs({
  dir: 'content/pages',
  docs: {
    schema: pageDocSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

export const blogSource = loader({
  baseUrl: '/posts',
  source: posts.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
});

export const pageSource = loader({
  baseUrl: '/pages',
  source: pages.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
});

// Alias for search API
export const source = blogSource;

export const docsLlms = llms(source, {
  renderPage: async (page) => `# ${page.data.title} (${page.url})

${await page.data.getText('processed')}`,
});
