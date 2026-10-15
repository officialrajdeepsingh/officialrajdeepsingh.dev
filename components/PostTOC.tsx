'use client';

import { useState, useEffect } from 'react';
import type { TOCItemType } from 'fumadocs-core/toc';
import { Clock, List, ChevronDown } from 'lucide-react';

interface PostTOCProps {
  items: TOCItemType[];
  readingTimeMinutes: number;
}

export function PostTOC({ items, readingTimeMinutes }: PostTOCProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [remainingTime, setRemainingTime] = useState(readingTimeMinutes);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const progress = Math.min(1, Math.max(0, scrollY / docHeight));
      const remaining = Math.max(1, Math.ceil(readingTimeMinutes * (1 - progress)));
      setRemainingTime(remaining);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [readingTimeMinutes]);

  if (!items || items.length === 0) {
    return (
      <div className="my-8 flex justify-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-fd-border bg-fd-card/60 text-xs font-mono text-fd-muted-foreground shadow-sm">
          <Clock className="w-3.5 h-3.5 text-fd-primary" />
          <span>~{readingTimeMinutes} min read</span>
          <span>•</span>
          <span>{remainingTime} min left</span>
        </div>
      </div>
    );
  }

  return (
    <div className="my-8 flex flex-col items-center justify-center">
      {/* Centered Controls Container */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {/* Remaining Time Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-fd-border bg-fd-card/60 text-xs font-mono text-fd-muted-foreground shadow-sm">
          <Clock className="w-3.5 h-3.5 text-fd-primary" />
          <span>{remainingTime} min left</span>
          <span className="text-fd-border">•</span>
          <span className="text-[11px] opacity-80">({readingTimeMinutes} min total)</span>
        </div>

        {/* Centered TOC Toggle Button (Hidden by default) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          aria-expanded={isOpen}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-fd-border bg-fd-card hover:bg-fd-muted/70 hover:border-fd-primary/40 text-xs font-medium text-fd-foreground shadow-sm transition-all cursor-pointer"
        >
          <List className="w-3.5 h-3.5 text-fd-primary" />
          <span>Table of Contents</span>
          <span className="text-[11px] font-mono px-1.5 py-0.2 rounded bg-fd-muted text-fd-muted-foreground">
            {items.length}
          </span>
          <ChevronDown
            className={`w-3.5 h-3.5 text-fd-muted-foreground transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
      </div>

      {/* Collapsible TOC Content */}
      {isOpen && (
        <div className="w-full max-w-xl mt-4 p-5 rounded-xl border border-fd-border bg-fd-card/90 backdrop-blur-sm shadow-md animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="text-xs font-mono uppercase tracking-wider text-fd-muted-foreground mb-3 pb-2 border-b border-fd-border flex items-center justify-between">
            <span>In this article</span>
            <span className="text-[10px] lowercase text-fd-muted-foreground">
              click to jump
            </span>
          </div>
          <nav className="flex flex-col space-y-1.5 text-sm max-h-80 overflow-y-auto pr-1">
            {items.map((item, index) => {
              const isSubItem = item.depth > 2;
              return (
                <a
                  key={`${item.url}-${index}`}
                  href={item.url}
                  onClick={() => setIsOpen(false)}
                  className={`text-fd-muted-foreground hover:text-fd-foreground hover:bg-fd-muted/50 rounded-md py-1 px-2 transition-colors ${
                    isSubItem ? 'pl-6 text-xs text-fd-muted-foreground/90' : 'font-medium'
                  }`}
                >
                  {item.title}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
}
