import Link from 'next/link';
import { getAllTags, getAllPosts } from '@/lib/posts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Topics & Tags | Rajdeep Singh',
  description:
    'Browse all article topics, tags, and categories written by Rajdeep Singh.',
};

export default function TagsPage() {
  const tags = getAllTags();
  const allPosts = getAllPosts();

  return (
    <div className="container max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <header className="mb-10 pb-8 border-b border-fd-border">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-fd-foreground">
            Topics &amp; Tags
          </h1>
          <span className="text-xs sm:text-sm font-mono text-fd-muted-foreground">
            {tags.length} tags • {allPosts.length} posts
          </span>
        </div>
        <p className="text-base text-fd-muted-foreground leading-relaxed max-w-2xl">
          Browse {allPosts.length} articles categorized across {tags.length} topics, technologies, and programming languages.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {tags.map((t) => {
          const slug = encodeURIComponent(
            t.name.toLowerCase().trim().replace(/[\s\+/]+/g, '-')
          );
          return (
            <Link
              key={t.name}
              href={`/tags/${slug}`}
              className="p-4 rounded-lg border border-fd-border bg-fd-card hover:border-fd-primary/40 hover:bg-fd-muted/30 transition-all group flex items-center justify-between"
            >
              <span className="text-sm font-medium text-fd-foreground group-hover:text-fd-primary transition-colors">
                {t.name}
              </span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-fd-muted text-fd-muted-foreground">
                {t.count}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
