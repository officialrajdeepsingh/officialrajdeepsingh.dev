'use client';

import { useSearchContext } from 'fumadocs-ui/contexts/search';
import { Search } from 'lucide-react';
import { ComponentProps } from 'react';

export function HeaderSearch({
  hideIfDisabled,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  className: _className,
  ...props
}: ComponentProps<'button'> & { hideIfDisabled?: boolean }) {
  const { enabled, hotKey, setOpenSearch, open } = useSearchContext();

  if (hideIfDisabled && !enabled) return null;

  return (
    <div className="group relative inline-flex items-center">
      <button
        type="button"
        onClick={() => setOpenSearch(true)}
        data-search=""
        aria-label="Search"
        title="Search"
        {...props}
        className="inline-flex size-9 items-center justify-center rounded-md p-1.5 text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring cursor-pointer"
      >
        <Search className="size-4.5" />
      </button>

      {/* Tooltip on hover showing kbd shortcut keys */}
      {!open && (
        <span
          role="tooltip"
          className="pointer-events-none absolute top-full left-1/2 z-50 mt-2 -translate-x-1/2 flex items-center gap-1 rounded-md border border-fd-border bg-fd-popover/95 px-2 py-1 text-xs text-fd-popover-foreground shadow-md backdrop-blur-xs opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-focus-within:opacity-100 group-focus-within:scale-100 transition-all duration-150 ease-out select-none whitespace-nowrap"
        >
          <span
            className="absolute -top-1 left-1/2 -translate-x-1/2 size-2 rotate-45 border-t border-l border-fd-border bg-fd-popover"
            aria-hidden="true"
          />
          {hotKey && hotKey.length > 0 ? (
            hotKey.map((k, i) => (
              <kbd
                key={i}
                className="rounded border border-fd-border/80 bg-fd-muted px-1.5 py-0.5 font-sans text-[10px] font-medium leading-none text-fd-muted-foreground shadow-2xs"
              >
                {k.display}
              </kbd>
            ))
          ) : (
            <>
              <kbd className="rounded border border-fd-border/80 bg-fd-muted px-1.5 py-0.5 font-sans text-[10px] font-medium leading-none text-fd-muted-foreground shadow-2xs">
                Ctrl
              </kbd>
              <kbd className="rounded border border-fd-border/80 bg-fd-muted px-1.5 py-0.5 font-sans text-[10px] font-medium leading-none text-fd-muted-foreground shadow-2xs">
                K
              </kbd>
            </>
          )}
        </span>
      )}
    </div>
  );
}
