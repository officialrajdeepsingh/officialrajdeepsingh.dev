import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getAllTags, formatDate } from '@/lib/posts';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

interface TagPageProps {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((t) => ({
    tag: encodeURIComponent(t.name.toLowerCase().trim().replace(/[\s\+/]+/g, '-')),
  }));
}

export async function generateMetadata(props: TagPageProps): Promise<Metadata> {
  const { tag } = await props.params;
  const decoded = decodeURIComponent(tag);
  return {
    title: `Articles tagged "${decoded}" | Rajdeep Singh`,
    description: `Browse all articles and tutorials tagged with ${decoded} by Rajdeep Singh.`,
  };
}

export default async function TagFilterPage(props: TagPageProps) {
  const { tag } = await props.params;
  const decodedParam = decodeURIComponent(tag).toLowerCase().trim();

  const allPosts = getAllPosts();
  const matchingPosts = allPosts.filter((post) => {
    if (!Array.isArray(post.data.tags)) return false;
    return post.data.tags.some((t) => {
      const slugified = t.toLowerCase().trim().replace(/[\s\+/]+/g, '-');
      const normalized = t.toLowerCase().trim();
      return slugified === decodedParam || normalized === decodedParam;
    });
  });

  if (matchingPosts.length === 0) {
    notFound();
  }

  // Find original tag display name
  let originalTagName = decodedParam;
  for (const post of matchingPosts) {
    if (Array.isArray(post.data.tags)) {
      const match = post.data.tags.find(
        (t) =>
          t.toLowerCase().trim().replace(/[\s\+/]+/g, '-') === decodedParam ||
          t.toLowerCase().trim() === decodedParam
      );
      if (match) {
        originalTagName = match;
        break;
      }
    }
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <div className="mb-8">
        <Link
          href="/posts"
          className="inline-flex items-center gap-1.5 text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Blog</span>
        </Link>
      </div>

      <header className="mb-10 pb-8 border-b border-fd-border">

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-fd-foreground mb-3 capitalize">
          {originalTagName}
        </h1>
        <p className="text-base text-fd-muted-foreground leading-relaxed">
          Found {matchingPosts.length} {matchingPosts.length === 1 ? 'article' : 'articles'} filed under this topic.
        </p>
      </header>

      {/* Post List */}
      <div className="divide-y divide-fd-border">
        {matchingPosts.map((post) => {
          const formatted = formatDate(post.data.date);
          return (
            <article key={post.url} className="py-6 group">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <Link
                  href={post.url}
                  className="text-lg font-medium text-fd-foreground group-hover:text-fd-primary transition-colors"
                >
                  {post.data.title}
                </Link>
                {formatted && (
                  <time className="text-xs text-fd-muted-foreground shrink-0 font-mono">
                    {formatted}
                  </time>
                )}
              </div>

              {post.data.description && (
                <p className="text-sm text-fd-muted-foreground line-clamp-2 leading-relaxed mb-3">
                  {post.data.description}
                </p>
              )}

              {Array.isArray(post.data.tags) && post.data.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {post.data.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-0.5 rounded bg-fd-muted/50 text-fd-muted-foreground border border-fd-border/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
