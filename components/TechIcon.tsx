import React from 'react';

interface TechIconProps {
  name: string;
}

export function TechIcon({ name }: TechIconProps) {
  const normalized = name.toLowerCase().trim();

  // TypeScript
  if (normalized.includes('typescript')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M14.5 10.5h-5v2h1.5v7h2v-7h1.5v-2z" fill="#fff" />
        <path
          d="M15.5 17.5c.8.6 1.8.9 2.7.9 1.4 0 2.2-.6 2.2-1.6 0-1-.8-1.5-2.2-2-1.8-.7-3-1.6-3-3.3 0-1.7 1.3-3 3.3-3 .9 0 1.8.3 2.5.7l-.6 1.8c-.6-.4-1.3-.6-1.9-.6-1 0-1.5.5-1.5 1.2 0 .8.7 1.2 2 1.7 2 .7 3.2 1.7 3.2 3.6 0 1.9-1.4 3.2-3.8 3.2-1.2 0-2.3-.4-3.2-1l.7-1.6z"
          fill="#fff"
        />
      </svg>
    );
  }

  // JavaScript
  if (normalized.includes('javascript')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path
          d="M7 16.5c.4.7 1 1.2 2 1.2 1 0 1.7-.5 1.7-1.8v-7.4h2.2v7.4c0 2.4-1.4 3.5-3.8 3.5-1.9 0-3.1-.9-3.7-2.3l1.6-.6zm9.2-.1c.5.8 1.3 1.3 2.4 1.3 1 0 1.7-.5 1.7-1.2 0-.8-.7-1.1-1.9-1.6-1.8-.7-3-1.5-3-3.1 0-1.5 1.2-2.8 3.1-2.8 1.4 0 2.3.5 3 1.6l-1.6 1c-.3-.6-.8-.9-1.4-.9-.7 0-1.1.4-1.1.9 0 .6.4.9 1.5 1.4 2 .8 3.4 1.6 3.4 3.3 0 1.9-1.5 3-3.7 3-2.1 0-3.3-1-3.9-2.3l1.6-.6z"
          fill="#000"
        />
      </svg>
    );
  }

  // Rust
  if (normalized.includes('rust')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="#E55B3C" aria-hidden="true">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5h-2v-4h-1v4H8V7.5h3c2 0 3 1 3 2.5 0 1.1-.6 1.9-1.6 2.2l1.6 4.3zm-1-6.5c0-.6-.4-1-1-1h-1v2h1c.6 0 1-.4 1-1z" />
      </svg>
    );
  }

  // HTML5
  if (normalized.includes('html')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="#E34F26" aria-hidden="true">
        <path d="M3 2l1.9 20 7.1 2 7.1-2L21 2H3zm14.5 5.5l-.3 3.6H9.4l.2 2.5h7.3l-.6 6.3-4.3 1.2-4.3-1.2-.3-3.4h2.2l.1 1.7 2.3.6 2.3-.6.3-3.1H7.1L6.5 7.5h11z" />
      </svg>
    );
  }

  // CSS3 / SCSS
  if (normalized.includes('css') || normalized.includes('scss')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="#1572B6" aria-hidden="true">
        <path d="M3 2l1.9 20 7.1 2 7.1-2L21 2H3zm14.5 5.5H9.1l.2 2.5h7.9l-.6 6.3-4.6 1.3-4.6-1.3-.3-3.4h2.2l.1 1.7 2.6.7 2.6-.7.3-3.1H6.7L6.5 5.5h11.2l-.2 2z" />
      </svg>
    );
  }

  // Bash / Shell / Terminal
  if (normalized.includes('bash') || normalized.includes('shell') || normalized.includes('terminal')) {
    return (
      <svg
        className="w-3.5 h-3.5 shrink-0 text-emerald-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    );
  }

  // Next.js
  if (normalized.includes('next.js') || normalized.includes('nextjs')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0 fill-current text-fd-foreground" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.66 17.66l-5.83-7.53v7.53H10.1V6.34h1.73l5.83 7.55V6.34h1.73v11.32h-1.73z" />
      </svg>
    );
  }

  // React
  if (normalized.includes('react')) {
    return (
      <svg
        className="w-3.5 h-3.5 shrink-0 text-[#61DAFB]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
        <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(120 12 12)" />
      </svg>
    );
  }

  // Tailwind CSS
  if (normalized.includes('tailwind')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0 text-[#38BDF8] fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    );
  }

  // shadcn/ui
  if (normalized.includes('shadcn')) {
    return (
      <svg
        className="w-3.5 h-3.5 shrink-0 text-fd-foreground"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <line x1="20" y1="4" x2="4" y2="20" />
        <line x1="14" y1="4" x2="4" y2="14" />
      </svg>
    );
  }

  // Radix UI
  if (normalized.includes('radix')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0 fill-current text-fd-foreground" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a5 5 0 0 0-5 5v5a5 5 0 0 0 5 5 5 5 0 0 0 5-5V7a5 5 0 0 0-5-5zm0 13a3 3 0 0 1-3-3V7a3 3 0 0 1 6 0v5a3 3 0 0 1-3 3z" />
        <circle cx="12" cy="19.5" r="2.5" />
      </svg>
    );
  }

  // NixOS
  if (normalized.includes('nixos')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0 text-[#5277C3]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M8.2 2.2L12 8.7l-2.2 3.8-5.7-9.8c-.3-.5.1-1.1.7-1.1h3.4c.4 0 .7.2.9.6zm7.6 0l-3.8 6.5 2.2 3.8 5.7-9.8c.3-.5-.1-1.1-.7-1.1h-3.4c-.4 0-.7.2-.9.6zM2.2 12.5l6.5 3.8-2.2 3.8-9.8-5.7c-.5-.3-.5-1 0-1.3l2.9-1.7c.3-.2.7-.2 1 0zm19.6 0l-6.5 3.8 2.2 3.8 9.8-5.7c.5-.3.5-1 0-1.3l-2.9-1.7c-.3-.2-.7-.2-1 0zM12 15.3l3.8 6.5H12.4c-.4 0-.7-.2-.9-.6L9.8 17.5l2.2-2.2z" />
      </svg>
    );
  }

  // Linux
  if (normalized.includes('linux') || normalized.includes('ubuntu')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0 fill-current text-amber-500" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.012 2c-3.1 0-4.667 2.37-4.667 5.097 0 1.056.323 2.197.632 3.284-.66.865-1.42 2.012-1.785 3.195-.333 1.08-.27 2.26.177 3.336.425 1.026 1.25 1.83 2.274 2.22 1.05.4 2.22.4 3.369.4s2.32-.0 3.37-.4c1.023-.39 1.848-1.194 2.273-2.22.447-1.076.51-2.256.177-3.336-.365-1.183-1.125-2.33-1.785-3.195.31-1.087.632-2.228.632-3.284C16.68 4.37 15.112 2 12.012 2zm-1.8 5.4a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8zm3.6 0a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8zm-1.8 1.8c.8 0 1.5.4 1.5.9s-.7 1.5-1.5 1.5-1.5-1-1.5-1.5.7-.9 1.5-.9z" />
      </svg>
    );
  }

  // Git
  if (normalized === 'git') {
    return (
      <svg className="w-3.5 h-3.5 shrink-0 text-[#F05032] fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L8.8 4.6l2.7 2.7c.6-.2 1.3 0 1.7.5.5.5.6 1.2.3 1.8l2.6 2.6c.6-.3 1.3-.2 1.8.3.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.5-.5-.6-1.3-.3-1.8L12.5 10.8v4.9c.2.2.4.4.4.7 0 1-.8 1.8-1.8 1.8s-1.8-.8-1.8-1.8c0-.7.4-1.3 1-1.6V9.8c-.6-.3-1-.9-1-1.6 0-.3.1-.6.2-.9L6.8 4.6 2.4 9c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.6-8.6c.6-.6.6-1.5 0-2.1z" />
      </svg>
    );
  }

  // GitHub
  if (normalized.includes('github')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0 fill-current text-fd-foreground" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    );
  }

  // Node.js
  if (normalized.includes('node')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0 fill-current text-[#5FA04E]" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2zm0 2.3L4.8 8.5v7l7.2 4.2 7.2-4.2v-7L12 4.3z" />
      </svg>
    );
  }

  // Deno
  if (normalized.includes('deno')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0 text-fd-foreground" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <path d="M8 12a4 4 0 0 1 8 0" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  // Vite
  if (normalized.includes('vite')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21.5 3.5L12.7 20.3a1 1 0 0 1-1.8 0L2.5 3.5a1 1 0 0 1 1.2-1.4l8.3 2.8 8.3-2.8a1 1 0 0 1 1.2 1.4z" fill="#646CFF" />
        <path d="M14.5 3.5l-4.2 8h3.2l-2.5 6 5.5-8.5h-3.2l2.2-5.5h-1z" fill="#FFD62E" />
      </svg>
    );
  }

  // pnpm
  if (normalized.includes('pnpm')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="8" height="8" fill="#F69220" rx="1" />
        <rect x="14" y="2" width="8" height="8" fill="#F69220" rx="1" />
        <rect x="14" y="14" width="8" height="8" fill="#F69220" rx="1" />
        <rect x="2" y="14" width="8" height="8" fill="#6B7280" rx="1" />
        <rect x="8" y="8" width="8" height="8" fill="#F69220" rx="1" />
      </svg>
    );
  }

  // Ghost CMS
  if (normalized.includes('ghost')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0 text-fd-foreground fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a9 9 0 0 0-9 9v11l3-2.5 3 2.5 3-2.5 3 2.5 3-2.5 3 2.5V11a9 9 0 0 0-9-9zm-3.5 10a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
      </svg>
    );
  }

  // WordPress
  if (normalized.includes('wordpress')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0 text-[#21759B] fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18.5a8.5 8.5 0 0 1-5.4-2l3.4-9.3 2.3 6.8 1.3-3.8.9 2.5a8.5 8.5 0 0 1-2.5 5.8zm6.5-6.1a8.5 8.5 0 0 1-.6 2.3l-2.4-7c.6 0 1.2-.1 1.2-.1.5 0 .5-.7 0-.7-.5 0-1.7.1-2.4.1s-1.9-.1-2.4-.1c-.5 0-.5.7 0 .7 0 0 .6.1 1.1.1l-1.6 4.7-2-6c.6 0 1.1-.1 1.1-.1.5 0 .5-.7 0-.7-.5 0-1.7.1-2.4.1-.2 0-.6 0-.9 0A8.5 8.5 0 0 1 12 3.5a8.5 8.5 0 0 1 6.5 10.9z" />
      </svg>
    );
  }

  // Strapi
  if (normalized.includes('strapi')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0 text-[#4945FF] fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm-1 3.3v4.9L6.5 12 6 9.2l5-3.9zm2 0l5 3.9-.5 2.8-4.5-1.8V5.3zm-7 8.2l3.5 1.4v3.8L5.5 16l.5-2.5zm9 5.2v-3.8l3.5-1.4.5 2.5-4 2.7z" />
      </svg>
    );
  }

  // Documentation (Fumadocs, Nextra, Docusaurus, Docsify)
  if (
    normalized.includes('fumadocs') ||
    normalized.includes('nextra') ||
    normalized.includes('docusaurus') ||
    normalized.includes('docsify')
  ) {
    return (
      <svg
        className="w-3.5 h-3.5 shrink-0 text-fd-primary"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    );
  }

  // Zod
  if (normalized.includes('zod')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0 text-[#3E67B1] fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    );
  }

  // Alpine.js
  if (normalized.includes('alpine')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0 text-[#77C1D8] fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.8 8.3L12 15.1l-2.6-2.6 6.8-6.8 2.6 2.6zM5.2 15.1l6.8-6.8 2.6 2.6-6.8 6.8-2.6-2.6z" />
      </svg>
    );
  }

  // Generic / REST API / CMS / Tools Fallback
  return (
    <svg
      className="w-3.5 h-3.5 shrink-0 text-fd-muted-foreground group-hover:text-fd-primary transition-colors"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
