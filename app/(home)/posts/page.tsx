import Link from 'next/link';
import { getAllPosts, formatMonthYear } from '@/lib/posts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blogs | Rajdeep Singh',
  description:
    'Technical articles, guides, and tutorials by Rajdeep Singh on Next.js, Linux, Python, React, and web development.',
};

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <div className="container max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      <div className="flex items-baseline justify-between mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-fd-foreground tracking-tight">
          Blogs
        </h1>
        <span className="text-xs font-mono text-fd-muted-foreground">
          {posts.length} articles
        </span>
      </div>
      {/* <p className="text-base hidden text-fd-muted-foreground leading-relaxed max-w-2xl mb-6">
        Exploring modern web architectures, Linux administration, Next.js, and developer tooling.
      </p> */}

      <div className="border-t border-fd-border/40">
        {posts.map((post) => (
          <Link
            key={post.url}
            href={post.url}
            className="group flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6 -mx-3 px-3 py-3.5 rounded-lg border-b border-fd-border/40 hover:bg-fd-accent/40 transition-all duration-150"
          >
            <span className="text-base sm:text-lg font-serif text-fd-foreground/80 group-hover:text-fd-foreground group-hover:translate-x-0.5 transition-all duration-150">
              {post.data.title}
            </span>
            <time className="shrink-0 text-xs sm:text-sm text-fd-muted-foreground/75 group-hover:text-fd-muted-foreground transition-colors font-sans sm:text-right">
              {formatMonthYear(post.data.date)}
            </time>
          </Link>
        ))}
      </div>
    </div>
  );
}
