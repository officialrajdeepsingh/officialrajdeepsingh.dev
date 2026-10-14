import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/posts';
import { pageSource } from '@/lib/source';
import { siteUrl } from '@/lib/shared';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const pages = pageSource.getPages();

  const postUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}${post.url}`,
    lastModified: post.data.lastmod
      ? new Date(post.data.lastmod)
      : post.data.date
      ? new Date(post.data.date)
      : new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const pageUrls: MetadataRoute.Sitemap = pages.map((page) => ({
    url: `${siteUrl}/pages/${page.slugs[0]}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/posts`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/tags`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...postUrls,
    ...pageUrls,
  ];
}
