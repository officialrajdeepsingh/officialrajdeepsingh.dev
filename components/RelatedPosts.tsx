import Link from 'next/link';
import type { getAllPosts } from '@/lib/posts';
import { PostCard } from '@/components/PostCard';

type Post = ReturnType<typeof getAllPosts>[number];

interface RelatedPostsProps {
  posts: Post[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-fd-border">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold font-serif tracking-tight text-fd-foreground">
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

      <div className="border-t border-fd-border/40">
        {posts.map((post) => (
          <PostCard key={post.url} post={post} />
        ))}
      </div>
    </section>
  );
}
