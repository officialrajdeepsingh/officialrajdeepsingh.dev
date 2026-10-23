import { createGetUrl } from 'fumadocs-core/source';

export const appName = 'Rajdeep Singh.';
export const siteDescription =
  'JavaScript || Reactjs || Nextjs || Python || Rust || Biotechnology || Bioinformatic || Front-end Developer || Author';
export const siteUrl = 'https://officialrajdeepsingh.netlify.app';

export const gitConfig = {
  user: 'officialrajdeepsingh',
  repo: 'officialrajdeepsingh.dev',
  branch: 'main',
};

export const socialLinks = [
  {
    name: 'X (Twitter)',
    url: 'https://twitter.com/Official_R_deep',
    icon: 'twitter',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/officialrajdeepsingh',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/officalrajdeepsingh',
    icon: 'linkedin',
  },
  {
    name: 'Medium',
    url: 'https://officialrajdeepsingh.medium.com',
    icon: 'medium',
  },
  {
    name: 'Linktree',
    url: 'https://linktr.ee/officialrajdeepsingh',
    icon: 'linktree',
  },
];
export const docsContentRoute = '/llms.mdx/posts';

const getContentUrl = createGetUrl(docsContentRoute);

export function getPageMarkdownUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'content.md'];

  return { segments, url: getContentUrl(segments, page.locale) };
}

export const docsImageRoute = '/og/posts';

const getImageUrl = createGetUrl(docsImageRoute);

export function getPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'image.webp'];

  return { segments, url: getImageUrl(segments, page.locale) };
}
