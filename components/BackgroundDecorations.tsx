'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

// ============================================================================
// MINIMALIST ARCHITECTURAL GLYPHS (NO SLOP, PURE ATMOSPHERIC GEOMETRY)
// ============================================================================

/**
 * Dual Pixel Block: matches the user's reference screenshot
 * (two adjacent translucent square tiles)
 */
function PixelBlock({ className = '' }: { className?: string }) {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Base larger square */}
      <rect
        x="4"
        y="14"
        width="24"
        height="24"
        className="fill-white/[0.04] stroke-white/[0.08]"
        strokeWidth="1"
      />
      {/* Upper-right offset smaller square */}
      <rect
        x="24"
        y="4"
        width="16"
        height="16"
        className="fill-white/[0.07] stroke-white/[0.12]"
        strokeWidth="1"
      />
    </svg>
  );
}

/**
 * Triple Stepped Pixel Cluster
 */
function TriplePixel({ className = '' }: { className?: string }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="6"
        y="6"
        width="14"
        height="14"
        className="fill-white/[0.03] stroke-white/[0.07]"
        strokeWidth="1"
      />
      <rect
        x="20"
        y="12"
        width="18"
        height="18"
        className="fill-white/[0.06] stroke-white/[0.10]"
        strokeWidth="1"
      />
      <rect
        x="8"
        y="26"
        width="12"
        height="12"
        className="fill-white/[0.04] stroke-white/[0.08]"
        strokeWidth="1"
      />
    </svg>
  );
}

/**
 * Drafting Crosshair Alignment Mark
 */
function CrosshairMark({ className = '' }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <line
        x1="12"
        y1="2"
        x2="12"
        y2="22"
        className="stroke-white/[0.12]"
        strokeWidth="1"
        strokeDasharray="2 2"
      />
      <line
        x1="2"
        y1="12"
        x2="22"
        y2="12"
        className="stroke-white/[0.12]"
        strokeWidth="1"
        strokeDasharray="2 2"
      />
      <circle cx="12" cy="12" r="1.5" className="fill-white/[0.25]" />
    </svg>
  );
}

/**
 * Editorial Corner Bracket
 */
function CornerBracket({ className = '' }: { className?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6 18V6H18"
        className="stroke-white/[0.12]"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="16" y="16" width="3" height="3" className="fill-white/[0.15]" />
    </svg>
  );
}

/**
 * Minimalist 3x3 Dot Matrix
 */
function DotMatrix({ className = '' }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {[0, 1, 2].map((r) =>
        [0, 1, 2].map((c) => (
          <circle
            key={`${r}-${c}`}
            cx={8 + c * 8}
            cy={8 + r * 8}
            r="1.2"
            className="fill-white/[0.10]"
          />
        ))
      )}
    </svg>
  );
}

/**
 * Minimalist Dashed Framing Tile
 */
function DashedFrame({ className = '' }: { className?: string }) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="6"
        y="6"
        width="24"
        height="24"
        className="stroke-white/[0.08] fill-white/[0.02]"
        strokeWidth="1"
        strokeDasharray="2 3"
      />
      <rect x="14" y="14" width="8" height="8" className="fill-white/[0.07]" />
    </svg>
  );
}

const GLYPH_COMPONENTS = [
  PixelBlock,
  TriplePixel,
  CrosshairMark,
  CornerBracket,
  DotMatrix,
  DashedFrame,
];

// Simple deterministic string hash to compute stable pseudo-random variations per route
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function BackgroundDecorations() {
  const pathname = usePathname() || '/';

  // Compute deterministic layout slots for the current route
  const decorations = useMemo(() => {
    const seed = hashString(pathname);

    // Slot 1: Top-Left Gutter (Directly matching the screenshot beside the header)
    const slot1GlyphIdx = seed % 3 === 0 ? 0 : (seed % GLYPH_COMPONENTS.length); // bias towards PixelBlock
    const slot1TopOffset = (seed % 24) - 12; // -12px to +12px
    const slot1Rot = ((seed % 4) * 90);

    // Slot 2: Top-Right Gutter
    const slot2GlyphIdx = (seed + 1) % GLYPH_COMPONENTS.length;
    const slot2TopOffset = ((seed >> 2) % 30) - 15;
    const slot2Rot = (((seed >> 2) % 4) * 90);

    // Slot 3: Mid-Left Gutter
    const slot3GlyphIdx = (seed + 2) % GLYPH_COMPONENTS.length;
    const slot3TopPercent = 42 + ((seed % 10) - 5); // 37% - 47%
    const slot3Rot = (((seed >> 3) % 4) * 90);

    // Slot 4: Mid-Right Gutter
    const slot4GlyphIdx = (seed + 3) % GLYPH_COMPONENTS.length;
    const slot4TopPercent = 60 + ((seed % 10) - 5); // 55% - 65%
    const slot4Rot = (((seed >> 4) % 4) * 90);

    // Slot 5: Lower-Left Gutter
    const slot5GlyphIdx = (seed + 4) % GLYPH_COMPONENTS.length;
    const slot5TopPercent = 78 + ((seed % 8) - 4); // 74% - 82%
    const slot5Rot = (((seed >> 5) % 4) * 90);

    return [
      {
        id: 'slot-1',
        Component: GLYPH_COMPONENTS[slot1GlyphIdx],
        style: {
          top: `calc(7rem + ${slot1TopOffset}px)`,
          left: 'max(1.25rem, calc(50vw - 470px))',
          transform: `rotate(${slot1Rot}deg)`,
        },
      },
      {
        id: 'slot-2',
        Component: GLYPH_COMPONENTS[slot2GlyphIdx],
        style: {
          top: `calc(6.5rem + ${slot2TopOffset}px)`,
          right: 'max(1.25rem, calc(50vw - 480px))',
          transform: `rotate(${slot2Rot}deg)`,
        },
      },
      {
        id: 'slot-3',
        Component: GLYPH_COMPONENTS[slot3GlyphIdx],
        style: {
          top: `${slot3TopPercent}vh`,
          left: 'max(1.5rem, calc(50vw - 490px))',
          transform: `rotate(${slot3Rot}deg)`,
        },
      },
      {
        id: 'slot-4',
        Component: GLYPH_COMPONENTS[slot4GlyphIdx],
        style: {
          top: `${slot4TopPercent}vh`,
          right: 'max(1.5rem, calc(50vw - 470px))',
          transform: `rotate(${slot4Rot}deg)`,
        },
      },
      {
        id: 'slot-5',
        Component: GLYPH_COMPONENTS[slot5GlyphIdx],
        style: {
          top: `${slot5TopPercent}vh`,
          left: 'max(1.75rem, calc(50vw - 480px))',
          transform: `rotate(${slot5Rot}deg)`,
        },
      },
    ];
  }, [pathname]);

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none"
      aria-hidden="true"
    >
      {decorations.map(({ id, Component, style }) => (
        <div
          key={id}
          style={style}
          className="absolute hidden sm:block opacity-75 hover:opacity-100 transition-opacity duration-500 pointer-events-auto cursor-default"
        >
          <Component className="transition-transform duration-700 hover:scale-105" />
        </div>
      ))}
    </div>
  );
}
