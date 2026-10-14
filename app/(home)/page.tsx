import Link from 'next/link';
import { getAllPosts, formatMonthYear } from '@/lib/posts';
import { Collaboration } from '@/components/Collaboration';
import { TechIcon } from '@/components/TechIcon';
import {
  profileData,
  socialLinks,
  techStackCategories,
  ghostThemes,
  nextjsTemplates,
  openSourceProjects,
  publications,
} from '@/data/portfolio';
import {
  ArrowRight,
  ExternalLink,
  BadgeCheck,
  Cpu,
  Palette,
  Newspaper,
  FolderGit2,
  Briefcase,
  Layout,
  Globe,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rajdeep Singh | Frontend Developer, Author & Open Source Contributor',
  description:
    'Personal portfolio and technical blog of Rajdeep Singh. 8+ years specializing in Next.js, React.js, TypeScript, Linux, and Ghost CMS themes.',
};

// Social icon helper with clean inline SVGs / Lucide fallback
function getSocialIcon(name: string) {
  switch (name) {
    case 'GitHub':
      return (
        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      );
    case 'Twitter / X':
      return (
        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case 'LinkedIn':
      return (
        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.54a1.63 1.63 0 0 0-1.63 1.63c0 .9.73 1.63 1.63 1.63a1.63 1.63 0 0 0 1.63-1.63c0-.9-.73-1.63-1.63-1.63" />
        </svg>
      );
    case 'Medium':
      return (
        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
      );
    case 'Upwork':
      return (
        <Briefcase className="w-4 h-4 text-emerald-500 shrink-0" />
      );
    default:
      return <Globe className="w-4 h-4 shrink-0" />;
  }
}

export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 8);

  return (
    <div className="container max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-16 space-y-16">
      {/* =========================================================================
          PROFILE HEADER / HERO
          ========================================================================= */}
      <section className="space-y-5 p-4">
        {/* Availability Badge */}
        <div>
          <Link
            href="/pages/contact"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/15 hover:border-emerald-500/50 text-xs font-medium text-emerald-500 transition-all group"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Available for Freelance &amp; Consulting</span>
            <ArrowRight className="w-3 h-3 text-emerald-500/70 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Name, Headline & Editorial Bio */}
        <div className="space-y-3.5">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-fd-foreground">
              {profileData.name}
            </h1>
            <BadgeCheck className="w-6 h-6 text-fd-primary shrink-0" aria-label="Verified author" />
          </div>

          {/* Merged Dot-Separated Role Bar */}
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-base sm:text-lg font-semibold tracking-tight text-fd-foreground">
            <span>Frontend Developer</span>
            <span className="text-fd-muted-foreground/40 font-mono text-xs select-none">•</span>
            <span>Technical Writer</span>
            <span className="text-fd-muted-foreground/40 font-mono text-xs select-none">•</span>
            <span className="text-fd-primary font-medium">Open Source Contributor</span>
          </div>

          {/* Clean Editorial Bio */}
          <p className="text-sm sm:text-base text-fd-muted-foreground leading-relaxed max-w-2xl">
            {profileData.bio}
          </p>
        </div>

        {/* Social Badges Grid */}
        <div className="pt-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg border border-fd-border bg-fd-card hover:bg-fd-muted/50 hover:border-fd-primary/40 transition-all group"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="text-fd-muted-foreground group-hover:text-fd-primary transition-colors">
                    {getSocialIcon(s.name)}
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs font-medium text-fd-foreground truncate">
                      {s.name}
                    </div>
                    {s.handle && (
                      <div className="text-[11px] font-mono text-fd-muted-foreground truncate">
                        {s.handle}
                      </div>
                    )}
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-fd-muted-foreground/60 group-hover:text-fd-primary transition-colors shrink-0 ml-1" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          TECH STACK & TOOLS
          ========================================================================= */}
      <section id="skills" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between pb-3 border-b border-fd-border">
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-fd-primary" />
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-fd-foreground">
              Tech Stack &amp; Skills
            </h2>
          </div>
          <span className="text-xs font-mono text-fd-muted-foreground">
            Core Toolkit
          </span>
        </div>

        {/* Structured Grid without round corners or extra padding */}
        <div className="border border-fd-border bg-fd-card/20 divide-y divide-fd-border/70">
          {techStackCategories.map((cat) => (
            <div
              key={cat.id || cat.category}
              className="flex flex-col sm:flex-row items-stretch transition-colors hover:bg-fd-muted/10"
            >
              {/* Category indicator with vertical border */}
              <div className="w-full sm:w-44 md:w-48 shrink-0 flex items-center gap-2 px-3 py-2 sm:py-2.5 border-b sm:border-b-0 sm:border-r border-fd-border/70 bg-fd-muted/15 sm:bg-transparent">
                <span className="font-mono text-xs font-semibold text-fd-muted-foreground/60 select-none">
                  {cat.id}
                </span>
                <span className="text-xs sm:text-sm font-medium text-fd-foreground">
                  {cat.category}
                </span>
              </div>

              {/* Skill buttons with icons, square corners & compact padding */}
              <div className="flex-1 flex flex-wrap items-center gap-1.5 sm:gap-2 p-2 sm:p-2.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-fd-border bg-fd-card hover:bg-fd-muted/40 hover:border-fd-primary/40 transition-all text-xs font-medium text-fd-foreground cursor-default select-none group"
                  >
                    <TechIcon name={skill} />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          GHOST CMS THEMES (Feature Section from mt.md)
          ========================================================================= */}
      <section id="ghost-themes" className="space-y-6 scroll-mt-20">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-fd-border">
          <div className="flex items-center gap-2">
            <Palette className="w-5 h-5 text-fd-primary" />
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-fd-foreground">
              Ghost CMS Themes &amp; Tools
            </h2>
          </div>
          <span className="text-xs font-mono px-2.5 py-1 rounded-full border border-fd-border bg-fd-muted/50 text-fd-muted-foreground">
            {ghostThemes.length} Open Source Themes
          </span>
        </div>

        <p className="text-sm text-fd-muted-foreground leading-relaxed -mt-2">
          Curated, lightweight, and modern themes built with Handlebars, Vite, Tailwind CSS 4, and Alpine.js.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ghostThemes.map((theme) => (
            <a
              key={theme.title}
              href={theme.url}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-xl border border-fd-border bg-fd-card hover:border-fd-primary/40 hover:bg-fd-muted/20 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-fd-primary/10 text-fd-primary font-medium border border-fd-primary/20">
                    {theme.tag}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-fd-muted-foreground group-hover:text-fd-primary transition-colors shrink-0" />
                </div>
                <h3 className="text-base font-semibold text-fd-foreground group-hover:text-fd-primary transition-colors mb-1.5 flex items-center gap-1.5">
                  <span>{theme.title}</span>
                </h3>
                <p className="text-xs sm:text-sm text-fd-muted-foreground leading-relaxed">
                  {theme.description}
                </p>
              </div>

              {theme.badge && (
                <div className="mt-4 pt-3 border-t border-fd-border/50 flex items-center justify-between text-[11px] font-mono text-fd-muted-foreground">
                  <span>{theme.badge}</span>
                  <span className="group-hover:translate-x-0.5 transition-transform text-fd-foreground font-sans">
                    View on GitHub →
                  </span>
                </div>
              )}
            </a>
          ))}
        </div>
      </section>

      {/* =========================================================================
          NEXT.JS & MARKDOWN TEMPLATES
          ========================================================================= */}
      <section id="templates" className="space-y-6 scroll-mt-20">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-fd-border">
          <div className="flex items-center gap-2">
            <Layout className="w-5 h-5 text-fd-primary" />
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-fd-foreground">
              Next.js &amp; Markdown Templates
            </h2>
          </div>
          <span className="text-xs font-mono px-2.5 py-1 rounded-full border border-fd-border bg-fd-muted/50 text-fd-muted-foreground">
            {nextjsTemplates.length} Templates
          </span>
        </div>

        <p className="text-sm text-fd-muted-foreground leading-relaxed -mt-2">
          Production-ready boilerplates for developer documentation and technical blogs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {nextjsTemplates.map((template) => (
            <a
              key={template.title}
              href={template.url}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-xl border border-fd-border bg-fd-card hover:border-fd-primary/40 hover:bg-fd-muted/20 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-fd-muted/80 text-fd-muted-foreground font-medium border border-fd-border/70">
                    {template.tag}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-fd-muted-foreground group-hover:text-fd-primary transition-colors shrink-0" />
                </div>
                <h3 className="text-base font-semibold text-fd-foreground group-hover:text-fd-primary transition-colors mb-1.5">
                  {template.title}
                </h3>
                <p className="text-xs sm:text-sm text-fd-muted-foreground leading-relaxed">
                  {template.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-fd-border/50 flex items-center justify-between text-[11px] font-mono text-fd-muted-foreground">
                <span>{template.badge}</span>
                <span className="group-hover:translate-x-0.5 transition-transform text-fd-foreground font-sans">
                  Use Template →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* =========================================================================
          OPEN SOURCE PROJECTS & TOOLING
          ========================================================================= */}
      <section id="projects" className="space-y-6 scroll-mt-20">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-fd-border">
          <div className="flex items-center gap-2">
            <FolderGit2 className="w-5 h-5 text-fd-primary" />
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-fd-foreground">
              Open Source Tooling &amp; Repositories
            </h2>
          </div>
          <Link
            href="https://github.com/officialrajdeepsingh?tab=repositories"
            target="_blank"
            className="text-xs font-mono text-fd-muted-foreground hover:text-fd-foreground transition-colors inline-flex items-center gap-1"
          >
            <span>All Repositories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {openSourceProjects.map((p) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-xl border border-fd-border bg-fd-card hover:border-fd-primary/40 hover:bg-fd-muted/20 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="text-[11px] font-mono text-fd-muted-foreground uppercase tracking-wider">
                    {p.tag}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-fd-muted-foreground group-hover:text-fd-foreground transition-colors shrink-0" />
                </div>
                <h3 className="font-semibold text-base text-fd-foreground mb-1 group-hover:text-fd-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-fd-muted-foreground leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-fd-border/50 flex items-center justify-between text-[11px] font-mono text-fd-muted-foreground">
                <span>{p.badge}</span>
                <span className="group-hover:translate-x-0.5 transition-transform text-fd-foreground font-sans">
                  GitHub →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* =========================================================================
          PUBLICATIONS & NEWSLETTERS
          ========================================================================= */}
      <section id="publications" className="space-y-6 scroll-mt-20">
        <div className="flex items-center justify-between pb-3 border-b border-fd-border">
          <div className="flex items-center gap-2">
            <Newspaper className="w-5 h-5 text-fd-primary" />
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-fd-foreground">
              Publications &amp; Community Newsletters
            </h2>
          </div>
          <span className="text-xs font-mono text-fd-muted-foreground">
            300+ Articles Written
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {publications.map((pub) => (
            <a
              key={pub.title}
              href={pub.url}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-xl border border-fd-border bg-fd-card hover:border-fd-primary/40 hover:bg-fd-muted/20 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-fd-primary/10 text-fd-primary border border-fd-primary/20 font-medium">
                    {pub.highlight}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-fd-muted-foreground group-hover:text-fd-primary transition-colors" />
                </div>
                <h3 className="font-semibold text-base text-fd-foreground group-hover:text-fd-primary transition-colors mb-1.5">
                  {pub.title}
                </h3>
                <p className="text-xs sm:text-sm text-fd-muted-foreground leading-relaxed">
                  {pub.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-fd-border/50 flex items-center justify-between text-[11px] font-mono text-fd-muted-foreground">
                <span>{pub.type}</span>
                <span className="group-hover:translate-x-0.5 transition-transform text-fd-foreground font-sans">
                  Read Articles →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* =========================================================================
          BLOGS SECTION (Matching minimal editorial design)
          ========================================================================= */}
      <section id="blogs" className="space-y-4 scroll-mt-20">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-fd-foreground tracking-tight">
            Blogs
          </h2>
          <Link
            href="/posts"
            className="inline-flex items-center gap-1 text-xs font-mono text-fd-muted-foreground hover:text-fd-foreground transition-colors group"
          >
            <span>All Articles</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="border-t border-fd-border/40">
          {latestPosts.map((post) => (
            <Link
              key={post.url}
              href={post.url}
              className="group flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6 -mx-3 px-3 py-3.5 rounded-lg border-b border-fd-border/40 hover:bg-fd-accent/40 transition-all duration-150"
            >
              <span className="text-base sm:text-lg font-serif text-fd-foreground/80 group-hover:text-fd-foreground group-hover:translate-x-0.5 transition-all duration-150">
                {post.data.title}
              </span>
              <time className="shrink-0 text-xs sm:text-sm text-fd-muted-foreground/75 group-hover:text-fd-muted-foreground transition-colors font-sans sm:text-right">
                {formatMonthYear(post.data.date)}
              </time>
            </Link>
          ))}
        </div>
      </section>

      {/* =========================================================================
          COLLABORATION & FREELANCE CTA
          ========================================================================= */}
      <Collaboration />
    </div>
  );
}
