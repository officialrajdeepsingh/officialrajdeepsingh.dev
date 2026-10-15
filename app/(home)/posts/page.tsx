import { getAllPosts } from '@/lib/posts';
import { PostCard } from '@/components/PostCard';
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
          <PostCard key={post.url} post={post} />
        ))}
      </div>
    </div>
  );
}
