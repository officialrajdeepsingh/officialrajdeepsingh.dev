import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogSource } from '@/lib/source';
import { getAllPosts, formatDate, getPostReadingTime, getRelatedPosts } from '@/lib/posts';
import { getMDXComponents } from '@/components/mdx';
import { DocsBody } from 'fumadocs-ui/layouts/docs/page';

import { PostDock } from '@/components/PostDock';
import { RelatedPosts } from '@/components/RelatedPosts';
import { Collaboration } from '@/components/Collaboration';
import { ArrowLeft, Calendar, Tag, User } from 'lucide-react';
import type { Metadata } from 'next';

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = blogSource.getPages();
  return posts.map((post) => ({
    slug: post.slugs[0],
  }));
}

export async function generateMetadata(props: PostPageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const page = blogSource.getPage([slug]);
  if (!page) return {};

  return {
    title: `${page.data.title} | Rajdeep Singh`,
    description: page.data.description,
    openGraph: {
      title: page.data.title,
      description: page.data.description,
      type: 'article',
      publishedTime: page.data.date ? new Date(page.data.date).toISOString() : undefined,
    },
  };
}

export default async function PostPage(props: PostPageProps) {
  const { slug } = await props.params;
  const page = blogSource.getPage([slug]);
  if (!page) notFound();

  const MDX = page.data.body;
  const formattedDate = formatDate(page.data.date);
  const author = page.data.author || 'Rajdeep Singh';
  const readingTime = getPostReadingTime(slug);
  const relatedPosts = getRelatedPosts(slug, 2);

  // Previous and next articles
  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slugs[0] === slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  return (
    <article className="container max-w-3xl mx-auto px-4 sm:px-6 py-10 md:py-14">
      {/* Back button */}
      <div className="mb-8">
        <Link
          href="/posts"
          className="inline-flex items-center gap-1.5 text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to all articles</span>
        </Link>
      </div>

      {/* Header */}
      <header className="mb-8 pb-8 border-b border-fd-border">
        {/* Metadata info */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-fd-muted-foreground mb-4">
          {formattedDate && (
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{formattedDate}</span>
            </span>
          )}
          <span className="inline-flex items-center gap-1.5">
            <User className="w-3.5 h-3.5" />
            <span>{author}</span>
          </span>

          {/* Tag */}
          {Array.isArray(page.data.tags) && page.data.tags.length > 0 && (
            <Link
              href={`/tags/${encodeURIComponent(page.data.tags[0].toLowerCase().trim().replace(/[\s\+/]+/g, '-'))}`}
              className="px-2 py-0.5 inline-flex items-center gap-1.5 text-fd-muted-foreground hover:underline hover:underline-offset-4"
            >
              <Tag className="w-3.5 h-3.5" />
              {page.data.tags[0]}
            </Link>
          )}
        </div>

        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-fd-foreground mb-4 leading-tight">
          {page.data.title}
        </h1>

        {page.data.description && (
          <p className="text-base sm:text-lg text-fd-muted-foreground leading-relaxed">
            {page.data.description}
          </p>
        )}
      </header>

      {/* Article Body */}
      <DocsBody className="prose dark:prose-invert max-w-none prose-headings:scroll-mt-24 prose-a:underline-offset-4 leading-relaxed">
        <MDX components={getMDXComponents()} />
      </DocsBody>

      {/* Floating Bottom Dock (Reading Time, Table of Contents, Social Share) */}
      <PostDock
        items={page.data.toc || []}
        readingTimeMinutes={readingTime}
        title={page.data.title}
        url={`https://officialrajdeepsingh.dev/posts/${slug}`}
      />

      {/* Related Articles */}
      <RelatedPosts posts={relatedPosts} />

      {/* Article Navigation (Next / Prev) */}
      <nav className="mt-8 pt-8 border-t border-fd-border grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prevPost ? (
          <Link
            href={prevPost.url}
            className="p-4 rounded-lg border border-fd-border bg-fd-card hover:border-fd-primary/40 hover:bg-fd-muted/20 transition-all group"
          >
            <span className="text-xs font-mono text-fd-muted-foreground block mb-1">
              ← Older Post
            </span>
            <span className="text-sm font-medium text-fd-foreground group-hover:text-fd-primary transition-colors line-clamp-2">
              {prevPost.data.title}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {nextPost ? (
          <Link
            href={nextPost.url}
            className="p-4 rounded-lg border border-fd-border bg-fd-card hover:border-fd-primary/40 hover:bg-fd-muted/20 transition-all group sm:text-right"
          >
            <span className="text-xs font-mono text-fd-muted-foreground block mb-1">
              Newer Post →
            </span>
            <span className="text-sm font-medium text-fd-foreground group-hover:text-fd-primary transition-colors line-clamp-2">
              {nextPost.data.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </nav>

      {/* Call to action */}
      <Collaboration />
    </article>
  );
}
