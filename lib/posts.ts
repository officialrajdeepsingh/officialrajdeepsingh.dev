import fs from 'fs';
import path from 'path';
import { blogSource } from '@/lib/source';

export interface PostItem {
  title: string;
  description?: string;
  url: string;
  slug: string;
  date?: string;
  tags?: string[];
  image?: string;
}

export function getAllPosts() {
  const pages = blogSource.getPages();
  return pages.sort((a, b) => {
    const dateA = a.data.date ? new Date(a.data.date).getTime() : 0;
    const dateB = b.data.date ? new Date(b.data.date).getTime() : 0;
    return dateB - dateA;
  });
}

export function formatDate(dateVal?: string | Date) {
  if (!dateVal) return '';
  const d = new Date(dateVal);
  if (isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function formatMonthYear(dateVal?: string | Date) {
  if (!dateVal) return '';
  const d = new Date(dateVal);
  if (isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
}

export function getAllTags() {
  const posts = getAllPosts();
  const tagCounts = new Map<string, number>();

  for (const post of posts) {
    if (Array.isArray(post.data.tags)) {
      for (const t of post.data.tags) {
        const cleaned = t.trim();
        if (cleaned) {
          tagCounts.set(cleaned, (tagCounts.get(cleaned) || 0) + 1);
        }
      }
    }
  }

  return Array.from(tagCounts.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

export function slugifyTag(tag: string) {
  return encodeURIComponent(
    tag
      .toLowerCase()
      .trim()
      .replace(/[\s\+/]+/g, '-')
  );
}

export function getPostReadingTime(slug: string): number {
  try {
    const filePath = path.join(process.cwd(), 'content/posts', `${slug}.mdx`);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      const text = content.replace(/---[\s\S]*?---/, '').trim();
      const words = text.split(/\s+/).filter(Boolean).length;
      return Math.max(1, Math.ceil(words / 200));
    }
  } catch {}
  return 3;
}

const STOP_WORDS = new Set([
  'a', 'about', 'above', 'after', 'again', 'against', 'all', 'am', 'an', 'and', 'any', 'are',
  'as', 'at', 'be', 'because', 'been', 'before', 'being', 'below', 'between', 'both', 'but', 'by',
  'can', 'could', 'did', 'do', 'does', 'doing', 'down', 'during', 'each', 'few', 'for', 'from',
  'further', 'had', 'has', 'have', 'having', 'he', 'her', 'here', 'hers', 'herself', 'him',
  'himself', 'his', 'how', 'i', 'if', 'in', 'into', 'is', 'it', 'its', 'itself', 'let', 'me',
  'more', 'most', 'my', 'myself', 'no', 'nor', 'not', 'of', 'off', 'on', 'once', 'only', 'or',
  'other', 'ought', 'our', 'ours', 'ourselves', 'out', 'over', 'own', 'same', 'she', 'should',
  'so', 'some', 'such', 'than', 'that', 'the', 'their', 'theirs', 'them', 'themselves', 'then',
  'there', 'these', 'they', 'this', 'those', 'through', 'to', 'too', 'under', 'until', 'up',
  'very', 'was', 'we', 'were', 'what', 'when', 'where', 'which', 'while', 'who', 'whom', 'why',
  'with', 'would', 'you', 'your', 'yours'
]);

function extractKeywords(title?: string): string[] {
  if (!title) return [];
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((word) => word.length > 2 && !STOP_WORDS.has(word));
}

export function getRelatedPosts(currentSlug: string, limit = 2) {
  const allPosts = getAllPosts();
  const currentPost = allPosts.find((p) => p.slugs[0] === currentSlug);

  if (!currentPost) {
    return allPosts.filter((p) => p.slugs[0] !== currentSlug).slice(0, limit);
  }

  const currentTags = (Array.isArray(currentPost.data.tags) ? currentPost.data.tags : []).map(
    (t: string) => t.toLowerCase().trim()
  );
  const currentAuthor = (currentPost.data.author || 'Rajdeep Singh').toLowerCase().trim();
  const currentKeywords = new Set(extractKeywords(currentPost.data.title));

  const scoredPosts = allPosts
    .filter((candidate) => candidate.slugs[0] !== currentSlug)
    .map((candidate) => {
      let score = 0;

      // 1. Tag relevance (+10 points per matching tag)
      if (Array.isArray(candidate.data.tags)) {
        for (const tag of candidate.data.tags) {
          const normalizedTag = tag.toLowerCase().trim();
          if (currentTags.includes(normalizedTag)) {
            score += 10;
          }
        }
      }

      // 2. Title keyword relevance (+3 points per matching word)
      const candidateKeywords = extractKeywords(candidate.data.title);
      for (const word of candidateKeywords) {
        if (currentKeywords.has(word)) {
          score += 3;
        }
      }

      // 3. Author relevance (+1 point for same author)
      const candidateAuthor = (candidate.data.author || 'Rajdeep Singh').toLowerCase().trim();
      if (currentAuthor && candidateAuthor === currentAuthor) {
        score += 1;
      }

      return { post: candidate, score };
    });

  // Sort by score descending; if tied, newer post first
  scoredPosts.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    const dateA = a.post.data.date ? new Date(a.post.data.date).getTime() : 0;
    const dateB = b.post.data.date ? new Date(b.post.data.date).getTime() : 0;
    return dateB - dateA;
  });

  return scoredPosts.slice(0, limit).map((item) => item.post);
}
