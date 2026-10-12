import Link from 'next/link';
import { formatDate } from '@/lib/posts';
import type { getAllPosts } from '@/lib/posts';

type Post = ReturnType<typeof getAllPosts>[number];

interface RelatedPostsProps {
  posts: Post[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-fd-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-fd-foreground">
            Related Articles
          </h2>
          <p className="text-xs text-fd-muted-foreground mt-0.5">
            Recommended based on topic, title, and author
          </p>
        </div>
        <Link
          href="/posts"
          className="text-xs text-fd-muted-foreground hover:text-fd-foreground transition-colors group inline-flex items-center gap-1 font-mono"
        >
          <span>All articles</span>
          <span className="group-hover:translate-x-0.5 transition-transform">→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {posts.map((post) => {
          const formatted = formatDate(post.data.date);
          const author = post.data.author || 'Rajdeep Singh';

          return (
            <Link
              key={post.url}
              href={post.url}
              className="p-5 rounded-xl border border-fd-border bg-fd-card/50 hover:bg-fd-muted/25 hover:border-fd-primary/40 transition-all group flex flex-col justify-between"
            >
              <div>
                {Array.isArray(post.data.tags) && post.data.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-2.5">
                    {post.data.tags.slice(0, 2).map((tag: string) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded bg-fd-muted/70 text-fd-muted-foreground font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <h3 className="text-sm sm:text-base font-semibold text-fd-foreground group-hover:text-fd-primary transition-colors line-clamp-2 mb-2 leading-snug">
                  {post.data.title}
                </h3>
                {post.data.description && (
                  <p className="text-xs text-fd-muted-foreground line-clamp-2 leading-relaxed">
                    {post.data.description}
                  </p>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-fd-border/50 flex items-center justify-between text-[11px] font-mono text-fd-muted-foreground">
                <span>{author}</span>
                {formatted && <span>{formatted}</span>}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
