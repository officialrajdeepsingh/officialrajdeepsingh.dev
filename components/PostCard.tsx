import Link from 'next/link';
import { formatMonthYear, type getAllPosts } from '@/lib/posts';

export type Post = ReturnType<typeof getAllPosts>[number];

export type AccentColor =
  | 'purple'
  | 'violet'
  | 'emerald'
  | 'amber'
  | 'sky'
  | 'rose'
  | 'neutral';

const ACCENT_STYLES: Record<
  AccentColor,
  {
    featuredTitle: string;
    badge: string;
  }
> = {
  purple: {
    featuredTitle: 'text-purple-400 group-hover:text-purple-300',
    badge: 'border-purple-500/40 text-purple-400 bg-purple-500/10',
  },
  violet: {
    featuredTitle: 'text-violet-400 group-hover:text-violet-300',
    badge: 'border-violet-500/40 text-violet-400 bg-violet-500/10',
  },
  emerald: {
    featuredTitle: 'text-emerald-400 group-hover:text-emerald-300',
    badge: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10',
  },
  amber: {
    featuredTitle: 'text-amber-400 group-hover:text-amber-300',
    badge: 'border-amber-500/40 text-amber-400 bg-amber-500/10',
  },
  sky: {
    featuredTitle: 'text-sky-400 group-hover:text-sky-300',
    badge: 'border-sky-500/40 text-sky-400 bg-sky-500/10',
  },
  rose: {
    featuredTitle: 'text-rose-400 group-hover:text-rose-300',
    badge: 'border-rose-500/40 text-rose-400 bg-rose-500/10',
  },
  neutral: {
    featuredTitle: 'text-fd-foreground font-semibold',
    badge: 'border-fd-border text-fd-foreground bg-fd-accent/40',
  },
};

export interface PostCardProps {
  post?: Post;
  title?: string;
  url?: string;
  date?: string | Date;
  featured?: boolean;
  accentColor?: AccentColor;
  readingTime?: number | string;
  className?: string;
}

export function PostCard({
  post,
  title,
  url,
  date,
  featured,
  accentColor = 'purple',
  readingTime,
  className = '',
}: PostCardProps) {
  const postTitle = title ?? post?.data?.title ?? '';
  const postUrl = url ?? post?.url ?? '#';
  const postDate = date ?? post?.data?.date;
  const isFeatured =
    featured ?? Boolean((post?.data as { featured?: boolean } | undefined)?.featured);
  const accent = ACCENT_STYLES[accentColor] ?? ACCENT_STYLES.purple;

  return (
    <Link
      href={postUrl}
      className={`group flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1.5 sm:gap-6 -mx-3 px-3 py-3.5 rounded-xs border-b border-fd-border/40 hover:bg-fd-accent/30 transition-all duration-150 ${className}`}
    >
      <div className="flex items-start sm:items-center gap-2.5 min-w-0 transition-transform duration-150 group-hover:translate-x-0.5">
        {isFeatured && (
          <span
            className={`inline-flex items-center text-[9px] sm:text-[10px] font-mono font-medium px-2 py-0.5 rounded-full border tracking-wider uppercase shrink-0 mt-0.5 sm:mt-0 ${accent.badge}`}
          >
            FEATURED
          </span>
        )}
        <span
          className={`text-base sm:text-md font-serif transition-colors duration-150 ${isFeatured
            ? accent.featuredTitle
            : 'text-fd-foreground/85 group-hover:text-fd-foreground'
            }`}
        >
          {postTitle}
        </span>
      </div>

      {(postDate || readingTime) && (
        <div className="shrink-0 flex items-center gap-3 text-xs sm:text-sm text-fd-muted-foreground/75 group-hover:text-fd-muted-foreground transition-colors font-sans sm:text-right">
          {readingTime && (
            <span className="font-mono text-xs">{readingTime} min</span>
          )}
          {postDate && <time>{formatMonthYear(postDate)}</time>}
        </div>
      )}
    </Link>
  );
}
