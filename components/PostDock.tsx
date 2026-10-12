'use client';

import { useState, useEffect, useRef } from 'react';
import type { TOCItemType } from 'fumadocs-core/toc';
import {
  Clock,
  List,
  Share2,
  Check,
  Copy,
  ArrowUp,
  X,
  ChevronRight,
} from 'lucide-react';

interface PostDockProps {
  items: TOCItemType[];
  readingTimeMinutes: number;
  title: string;
  url?: string;
}

export function PostDock({
  items,
  readingTimeMinutes,
  title,
  url,
}: PostDockProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activePopover, setActivePopover] = useState<'toc' | 'share' | null>(null);
  const [remainingMinutes, setRemainingMinutes] = useState(readingTimeMinutes);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeHeadingId, setActiveHeadingId] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const dockRef = useRef<HTMLDivElement>(null);

  // Compute absolute share URL
  const shareUrl =
    url || (typeof window !== 'undefined' ? window.location.href : '');
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  // Scroll listener for visibility, progress, remaining time, active heading, and footer collision
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      // Check if footer is in viewport so dock doesn't obscure footer content
      const footer = document.querySelector('footer');
      let isFooterInView = false;
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        isFooterInView = footerRect.top < window.innerHeight;
      }

      // Show dock after scrolling past initial hero (140px) and hide when footer is in view
      const shouldBeVisible = scrollY > 140 && !isFooterInView;
      setIsVisible(shouldBeVisible);
      if (isFooterInView) {
        setActivePopover(null);
      }

      if (docHeight > 0) {
        const progress = Math.min(1, Math.max(0, scrollY / docHeight));
        setScrollProgress(Math.round(progress * 100));
        const remaining = Math.max(
          1,
          Math.ceil(readingTimeMinutes * (1 - progress))
        );
        setRemainingMinutes(remaining);
      }

      // Detect active heading from TOC items
      if (items && items.length > 0) {
        const headingElements = items
          .map((item) => {
            const id = item.url.startsWith('#')
              ? item.url.slice(1)
              : item.url;
            return {
              id,
              element: document.getElementById(id),
            };
          })
          .filter(
            (item): item is { id: string; element: HTMLElement } =>
              item.element !== null
          );

        // Find current active heading (the one closest above the scroll threshold)
        const scrollOffset = scrollY + 120;
        let currentId = '';
        for (let i = 0; i < headingElements.length; i++) {
          const { id, element } = headingElements[i];
          if (element.offsetTop <= scrollOffset) {
            currentId = id;
          } else {
            break;
          }
        }
        if (currentId) {
          setActiveHeadingId(currentId);
        } else if (headingElements.length > 0 && scrollY < 200) {
          setActiveHeadingId(headingElements[0].id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    // Also observe footer via IntersectionObserver for robust visibility detection
    const footer = document.querySelector('footer');
    let observer: IntersectionObserver | null = null;
    if (footer && typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        () => {
          handleScroll();
        },
        { threshold: [0, 0.1, 0.5, 1.0] }
      );
      observer.observe(footer);
    }

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [items, readingTimeMinutes]);

  // Click outside listener to close popovers
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        dockRef.current &&
        !dockRef.current.contains(event.target as Node)
      ) {
        setActivePopover(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActivePopover(null);
      }
    };

    document.addEventListener('pointerdown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link', err);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHeadingClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    const id = url.startsWith('#') ? url.slice(1) : url;
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setActiveHeadingId(id);
      setActivePopover(null);
    }
  };

  const togglePopover = (type: 'toc' | 'share') => {
    setActivePopover((prev) => (prev === type ? null : type));
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
    <aside
      ref={dockRef}
      aria-label="Article controls dock"
      className={`fixed bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-out select-none ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Table of Contents Popover */}
        {activePopover === 'toc' && (
          <div
            role="dialog"
            aria-label="Table of contents"
            className="absolute bottom-full mb-3 w-[92vw] max-w-sm sm:max-w-md rounded-2xl border border-fd-border/80 bg-fd-background/95 dark:bg-neutral-900/95 backdrop-blur-xl shadow-2xl p-4 flex flex-col max-h-[60vh] animate-in fade-in zoom-in-95 duration-200 ring-1 ring-black/5 dark:ring-white/10"
          >
            {/* Popover Header */}
            <div className="flex items-center justify-between pb-3 border-b border-fd-border">
              <div className="flex items-center gap-2">
                <List className="w-4 h-4 text-fd-primary" />
                <span className="text-xs font-semibold uppercase tracking-wider text-fd-foreground">
                  Table of Contents
                </span>
                <span className="text-[11px] font-mono px-1.5 py-0.5 rounded-full bg-fd-muted text-fd-muted-foreground">
                  {items.length}
                </span>
              </div>
              <button
                onClick={() => setActivePopover(null)}
                aria-label="Close table of contents"
                className="p-1 rounded-md text-fd-muted-foreground hover:text-fd-foreground hover:bg-fd-muted transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Headings List */}
            <nav className="mt-3 overflow-y-auto space-y-1 pr-1 overscroll-contain text-sm max-h-[45vh]">
              {items && items.length > 0 ? (
                items.map((item, index) => {
                  const itemId = item.url.startsWith('#')
                    ? item.url.slice(1)
                    : item.url;
                  const isActive = itemId === activeHeadingId;
                  const isSubItem = item.depth > 2;

                  return (
                    <a
                      key={`${item.url}-${index}`}
                      href={item.url}
                      onClick={(e) => handleHeadingClick(e, item.url)}
                      className={`group flex items-center justify-between rounded-lg py-1.5 px-2.5 transition-all cursor-pointer ${
                        isActive
                          ? 'bg-fd-primary/10 text-fd-primary font-medium border-l-2 border-fd-primary'
                          : 'text-fd-muted-foreground hover:text-fd-foreground hover:bg-fd-muted/60'
                      } ${isSubItem ? 'ml-3 text-xs' : 'text-sm'}`}
                    >
                      <span className="truncate">{item.title}</span>
                      <ChevronRight
                        className={`w-3.5 h-3.5 transition-transform opacity-0 group-hover:opacity-100 ${
                          isActive
                            ? 'opacity-100 text-fd-primary translate-x-0.5'
                            : 'text-fd-muted-foreground'
                        }`}
                      />
                    </a>
                  );
                })
              ) : (
                <p className="text-xs text-fd-muted-foreground py-4 text-center">
                  No headings found
                </p>
              )}
            </nav>
          </div>
        )}

        {/* Share Popover */}
        {activePopover === 'share' && (
          <div
            role="dialog"
            aria-label="Share article"
            className="absolute bottom-full mb-3 w-[88vw] max-w-xs rounded-2xl border border-fd-border/80 bg-fd-background/95 dark:bg-neutral-900/95 backdrop-blur-xl shadow-2xl p-4 flex flex-col gap-3 animate-in fade-in zoom-in-95 duration-200 ring-1 ring-black/5 dark:ring-white/10"
          >
            {/* Popover Header */}
            <div className="flex items-center justify-between pb-2.5 border-b border-fd-border">
              <div className="flex items-center gap-2">
                <Share2 className="w-4 h-4 text-fd-primary" />
                <span className="text-xs font-semibold uppercase tracking-wider text-fd-foreground">
                  Share Article
                </span>
              </div>
              <button
                onClick={() => setActivePopover(null)}
                aria-label="Close share menu"
                className="p-1 rounded-md text-fd-muted-foreground hover:text-fd-foreground hover:bg-fd-muted transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Social Share Options */}
            <div className="grid grid-cols-1 gap-2">
              {shareLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setActivePopover(null)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg border border-fd-border/70 bg-fd-card hover:bg-fd-muted/70 hover:border-fd-primary/40 text-xs font-medium text-fd-foreground transition-all cursor-pointer"
                >
                  <span className="text-fd-primary">{link.icon}</span>
                  <span>Share on {link.name}</span>
                </a>
              ))}

              {/* Copy Link Button */}
              <button
                onClick={copyToClipboard}
                type="button"
                className={`flex items-center gap-2.5 px-3 py-2 rounded-lg border text-xs font-medium transition-all cursor-pointer ${
                  copied
                    ? 'border-green-500/50 bg-green-500/10 text-green-500'
                    : 'border-fd-border/70 bg-fd-card hover:bg-fd-muted/70 hover:border-fd-primary/40 text-fd-foreground'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-500" />
                    <span>Link copied to clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-fd-primary" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Floating Dock Capsule */}
        <div className="group/dock flex items-center gap-1 sm:gap-1.5 p-1.5 sm:p-2 rounded-full border border-fd-border/80 bg-fd-card/90 dark:bg-neutral-900/90 backdrop-blur-xl shadow-xl shadow-black/10 dark:shadow-black/50 ring-1 ring-black/5 dark:ring-white/10 text-fd-foreground hover:border-fd-primary/30 transition-all duration-300">
          {/* Reading Time Badge with circular scroll progress indicator */}
          <div
            title={`Reading progress: ${scrollProgress}% (~${readingTimeMinutes} min total)`}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-fd-muted/60 text-xs font-mono text-fd-foreground cursor-default"
          >
            <div className="relative flex items-center justify-center w-3.5 h-3.5">
              <svg className="w-3.5 h-3.5 -rotate-90 transform" viewBox="0 0 24 24">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="text-fd-border"
                  fill="none"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeDasharray={62.83}
                  strokeDashoffset={62.83 - (62.83 * scrollProgress) / 100}
                  strokeLinecap="round"
                  className="text-fd-primary transition-all duration-200"
                  fill="none"
                />
              </svg>
            </div>
            <span className="font-medium whitespace-nowrap">
              {remainingMinutes}m left
            </span>
          </div>

          {/* Divider */}
          <div className="h-4 w-px bg-fd-border/70 mx-0.5" />

          {/* Table of Contents Button */}
          {items && items.length > 0 && (
            <>
              <button
                onClick={() => togglePopover('toc')}
                type="button"
                aria-expanded={activePopover === 'toc'}
                title="Table of Contents"
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  activePopover === 'toc'
                    ? 'bg-fd-primary text-fd-primary-foreground shadow-sm'
                    : 'text-fd-muted-foreground hover:text-fd-foreground hover:bg-fd-muted/80'
                }`}
              >
                <List className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">TOC</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full transition-colors ${
                    activePopover === 'toc'
                      ? 'bg-fd-primary-foreground/20 text-fd-primary-foreground'
                      : 'bg-fd-muted text-fd-muted-foreground'
                  }`}
                >
                  {items.length}
                </span>
              </button>

              {/* Divider */}
              <div className="h-4 w-px bg-fd-border/70 mx-0.5" />
            </>
          )}

          {/* Share Button */}
          <button
            onClick={() => togglePopover('share')}
            type="button"
            aria-expanded={activePopover === 'share'}
            title="Share Article"
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
              activePopover === 'share'
                ? 'bg-fd-primary text-fd-primary-foreground shadow-sm'
                : 'text-fd-muted-foreground hover:text-fd-foreground hover:bg-fd-muted/80'
            }`}
          >
            <Share2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Share</span>
          </button>

          {/* Divider */}
          <div className="h-4 w-px bg-fd-border/70 mx-0.5" />

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            type="button"
            title="Back to top"
            aria-label="Scroll back to top"
            className="p-1 sm:p-1.5 rounded-full text-fd-muted-foreground hover:text-fd-foreground hover:bg-fd-muted/80 transition-all cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
