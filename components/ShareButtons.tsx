'use client';

import { useState } from 'react';
import { Share2, Check, Copy } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  url?: string;
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  // Fallback to window.location.href on client if url is relative or not passed
  const currentUrl =
    url || (typeof window !== 'undefined' ? window.location.href : '');

  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(title);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link', err);
    }
  };

  const shareLinks = [
    {
      name: 'X (Twitter)',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.54a1.63 1.63 0 0 0-1.63 1.63c0 .9.73 1.63 1.63 1.63a1.63 1.63 0 0 0 1.63-1.63c0-.9-.73-1.63-1.63-1.63" />
        </svg>
      ),
    },
    {
      name: 'Reddit',
      href: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm6.2 11.5c0 .3-.1.5-.2.7-.6 1.7-2.6 2.8-6 2.8s-5.4-1.1-6-2.8c-.1-.2-.2-.4-.2-.7 0-.9.7-1.6 1.6-1.6.5 0 .9.2 1.2.6 1 .7 2.3 1.1 3.4 1.1s2.4-.4 3.4-1.1c.3-.4.7-.6 1.2-.6.9 0 1.6.7 1.6 1.6z" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="my-10 pt-8 border-t border-fd-border">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-2 text-sm font-medium text-fd-foreground">
          <Share2 className="w-4 h-4 text-fd-muted-foreground" />
          <span>Share this article</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {shareLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Share on ${link.name}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-fd-border bg-fd-card text-xs font-medium text-fd-muted-foreground hover:text-fd-foreground hover:bg-fd-muted/60 hover:border-fd-primary/40 transition-all"
            >
              {link.icon}
              <span className="hidden sm:inline">{link.name}</span>
            </a>
          ))}

          <button
            onClick={copyToClipboard}
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-fd-border bg-fd-card text-xs font-medium text-fd-muted-foreground hover:text-fd-foreground hover:bg-fd-muted/60 hover:border-fd-primary/40 transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-500" />
                <span className="text-green-500 font-semibold">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Link</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
