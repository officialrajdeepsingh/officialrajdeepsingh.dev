export interface ProjectItem {
  title: string;
  description: string;
  url: string;
  tag: string;
  badge?: string;
  stars?: string;
}

export interface PublicationItem {
  title: string;
  description: string;
  url: string;
  type: 'Newsletter' | 'Publication' | 'Author';
  highlight: string;
}

export interface SocialLink {
  name: string;
  handle?: string;
  href: string;
  iconName: string;
}

export const profileData = {
  name: 'Rajdeep Singh',
  role: 'Frontend Developer, Technical Writer & Open Source Contributor',
  headline: 'Specializing in Next.js, React.js, TypeScript, and modern documentation architecture.',
  experienceYears: 8,
  writingYears: 5,
  location: 'India',
  availability: 'Available for freelance & consulting',
  avatarUrl: 'https://www.gravatar.com/avatar/dafca7497609ae294378279ad1d6136c?s=256',
  bannerUrl: '/images/author/banner.png',
  bio: `Hi, I'm a professional frontend developer with eight years of experience specialising in Next.js, React.js, and TypeScript. Additionally, I am an open-source contributor, technical documentation manager, Ghost CMS, and technical writer with five years of experience in these roles.`  ,
  capabilities: [
    {
      title: 'Frontend Architecture & Performance',
      description: 'Optimizing web applications through Next.js (SSR/SSG), TypeScript type safety, dynamic metadata, and Core Web Vitals.',
    },
    {
      title: 'Modern UI & Design Systems',
      description: 'Building accessible, responsive interfaces and component systems using Tailwind CSS, Radix UI, Shadcn UI, and Aceternity UI.',
    },
    {
      title: 'Technical Writing & Documentation',
      description: 'Designing and managing clear, developer-friendly documentation platforms and open-source guides with 5+ years of publishing.',
    },
    {
      title: 'Headless CMS & Developer Tooling',
      description: 'Custom Ghost CMS theme development, headless architectures, and custom Linux & NixOS developer workstations.',
    },
  ],
  responsibilities: [
    {
      title: 'Frontend Architecture & Performance',
      description: 'Optimizing web applications through Next.js (SSR/SSG), TypeScript type safety, dynamic metadata, and Core Web Vitals.',
    },
    {
      title: 'Modern UI & Design Systems',
      description: 'Building accessible, responsive interfaces and component systems using Tailwind CSS, Radix UI, Shadcn UI, and Aceternity UI.',
    },
    {
      title: 'Technical Writing & Documentation',
      description: 'Designing and managing clear, developer-friendly documentation platforms and open-source guides with 5+ years of publishing.',
    },
    {
      title: 'Headless CMS & Developer Tooling',
      description: 'Custom Ghost CMS theme development, headless architectures, and custom Linux & NixOS developer workstations.',
    },
  ],
};

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    handle: '@officialrajdeepsingh',
    href: 'https://github.com/officialrajdeepsingh',
    iconName: 'github',
  },
  {
    name: 'Twitter / X',
    handle: '@Official_R_deep',
    href: 'https://twitter.com/Official_R_deep',
    iconName: 'twitter',
  },
  {
    name: 'LinkedIn',
    handle: 'in/officalrajdeepsingh',
    href: 'https://www.linkedin.com/in/officalrajdeepsingh',
    iconName: 'linkedin',
  },
  {
    name: 'Upwork',
    handle: 'Hire on Upwork',
    href: 'https://www.upwork.com/freelancers/~01a4e8ba7a41795229',
    iconName: 'upwork',
  },
  {
    name: 'Medium',
    handle: '@officialrajdeepsingh',
    href: 'https://officialrajdeepsingh.medium.com',
    iconName: 'medium',
  },
  {
    name: 'Linktree',
    handle: 'linktr.ee/officialrajdeepsingh',
    href: 'https://linktr.ee/officialrajdeepsingh',
    iconName: 'link',
  },
];

export const contactForm: SocialLink[] = [
  {
    name: 'Twitter / X',
    handle: '@Official_R_deep',
    href: 'https://twitter.com/Official_R_deep',
    iconName: 'twitter',
  },
  {
    name: 'LinkedIn',
    handle: 'in/officalrajdeepsingh',
    href: 'https://www.linkedin.com/in/officalrajdeepsingh',
    iconName: 'linkedin',
  }
];

export interface TechStackCategory {
  id: string;
  category: string;
  skills: string[];
}

export const techStackCategories: TechStackCategory[] = [
  {
    id: '01',
    category: 'Language',
    skills: ['TypeScript', 'JavaScript', 'Rust', 'HTML5', 'CSS3 / SCSS', 'Bash / Shell'],
  },
  {
    id: '02',
    category: 'Framework',
    skills: ['Next.js', 'React.js', 'Fumadocs', 'Nextra', 'Docusaurus', 'Vite'],
  },
  {
    id: '03',
    category: 'Frontend & UI',
    skills: ['Tailwind CSS', 'shadcn/ui', 'Radix UI', 'Aceternity UI', 'Alpine.js', 'Zod'],
  },
  {
    id: '04',
    category: 'Linux & Systems',
    skills: ['NixOS', 'Linux', 'Node.js', 'Deno', 'pnpm', 'Git', 'GitHub'],
  },
  {
    id: '05',
    category: 'CMS & Tooling',
    skills: ['Ghost CMS', 'WordPress', 'Strapi', 'Payload CMS', 'Directus', 'REST APIs'],
  },
];

export const ghostThemes: ProjectItem[] = [
  {
    title: 'Awesome Ghost',
    description: 'A curated list of awesome resources, themes, tools, integrations, and tutorials for Ghost CMS.',
    url: 'https://github.com/frontendweb3/awesome-ghost',
    tag: 'Curated Resource',
    badge: 'resources',
  },
  {
    title: 'Ghost Theme Builder',
    description: 'Build, customize, review, debug, migrate, and optimize Ghost CMS Handlebars themes with routes, GScan, and custom settings.',
    url: 'https://github.com/frontendweb3/ghost-theme-builder',
    tag: 'Handlebars / Tooling',
    badge: 'Developer Tool',
  },
  {
    title: 'Fastest',
    description: 'Lightweight Ghost theme designed to launch a fast personal or technical blog with Ghost CMS in under 5 minutes.',
    url: 'https://github.com/frontendweb3/fastest',
    tag: 'Ghost / Handlebars',
    badge: 'Ghost Theme',
  },
  {
    title: 'Logly',
    description: 'A minimalist open-source theme designed specifically for content creators and technical Ghost blogs.',
    url: 'https://github.com/frontendweb3/logly',
    tag: 'Ghost / Handlebars',
    badge: 'Ghost Theme',
  },
  {
    title: 'Ghost Theme Starter Kit',
    description: 'Modern boilerplate to build high-performance Ghost CMS themes using Vite and Tailwind CSS 4.',
    url: 'https://github.com/frontendweb3/ghost-theme-starter-kit',
    tag: 'Vite + Tailwind CSS 4',
    badge: 'Starter Boilerplate',
  },
  {
    title: 'Outline',
    description: 'A modern Ghost CMS theme designed for blogs, technical tutorials, and knowledge-driven publishing.',
    url: 'https://github.com/frontendweb3/outline',
    tag: 'Ghost / Handlebars',
    badge: 'Ghost Theme',
  },
  {
    title: 'Pulse',
    description: 'A minimal, dark-mode-first Ghost CMS theme built with Vite, Tailwind CSS 4, and Alpine.js.',
    url: 'https://github.com/frontendweb3/pulse',
    tag: 'Tailwind 4 + Alpine.js',
    badge: 'Ghost Theme',
  },
];

export const nextjsTemplates: ProjectItem[] = [
  {
    title: 'Nextify',
    description: 'Pre-built template for creating modern developer documentation sites with an integrated blog using Next.js and Fumadocs.',
    url: 'https://github.com/frontendweb3/nextify',
    tag: 'Next.js + Fumadocs',
    badge: 'Docs & Blog',
  },
  {
    title: 'Minimalist',
    description: 'Ultra-clean, distraction-free minimalist blog template built with Next.js and Tailwind CSS.',
    url: 'https://github.com/frontendweb3/minimalist',
    tag: 'Next.js + Tailwind',
    badge: 'Minimal Blog',
  },
  {
    title: 'Open Blog',
    description: 'Open-source markdown blogging template designed with Next.js, Tailwind CSS, and optimized typography.',
    url: 'https://github.com/frontendweb3/open-blog',
    tag: 'Next.js + Markdown',
    badge: 'Markdown Blog',
  },
  {
    title: 'Blogify',
    description: 'Modern, responsive Next.js blogging template crafted with Tailwind CSS and dark mode support.',
    url: 'https://github.com/frontendweb3/blogify',
    tag: 'Next.js + Tailwind CSS',
    badge: 'Open Source',
  },
];

export const openSourceProjects: ProjectItem[] = [
  {
    title: 'Awesome Next.js',
    description: 'Curated collection of production-ready Next.js libraries, starter kits, boilerplates, and developer tools.',
    url: 'https://github.com/officialrajdeepsingh/awesome-nextjs',
    tag: 'Next.js Ecosystem',
    badge: 'Awesome List',
  },
  {
    title: 'Nerd Fonts Installer',
    description: 'Automated bash installer script to easily install and configure popular Nerd Fonts on Debian and Ubuntu Linux distros.',
    url: 'https://github.com/officialrajdeepsingh/nerd-fonts-installer',
    tag: 'Linux / Bash Script',
    badge: 'CLI Tool',
  },
  {
    title: 'Awesome Documentation',
    description: 'Curated resources, tools, and best practices for technical writers, software documentation managers, and dev docs teams.',
    url: 'https://github.com/officialrajdeepsingh/awesome-documentation',
    tag: 'Tech Writing / Docs',
    badge: 'Curated List',
  },
  {
    title: 'Promptpen',
    description: 'Open-source prompt engineering collection, templates, and utilities for AI developer workflows.',
    url: 'https://github.com/officialpromptpen/promptpen',
    tag: 'AI / Prompting',
    badge: 'Open Source',
  },
  {
    title: 'Dotfiles',
    description: 'Personal Linux configuration files, Neovim IDE setup, terminal themes, and development environment automation.',
    url: 'https://github.com/officialrajdeepsingh/dotfiles',
    tag: 'Linux / Neovim',
    badge: 'Developer Env',
  },
  {
    title: 'Next.js + Ghost CMS API',
    description: 'Reference implementation combining Next.js static site generation with the Ghost Content API for blazing-fast publishing.',
    url: 'https://github.com/officialrajdeepsingh/nextjsghostcms',
    tag: 'Jamstack / CMS API',
    badge: 'Integration',
  },
];

export const publications: PublicationItem[] = [
  {
    title: 'Next.js Newsletter',
    description: 'Weekly curated insights, tutorials, architecture patterns, and release updates for the Next.js and React community on Medium.',
    url: 'https://medium.com/nextjs/newsletter',
    type: 'Newsletter',
    highlight: 'Next.js Community',
  },
  {
    title: 'Frontend Web',
    description: 'Technical Medium publication sharing hands-on tutorials on modern frontend frameworks, CSS, JavaScript, and developer tooling.',
    url: 'https://medium.com/frontendweb',
    type: 'Publication',
    highlight: 'Frontend Ecosystem',
  },
  {
    title: 'The Linux',
    description: 'Publication focused on Linux terminal productivity, distro setup, package management, bash automation, and sysadmin guides.',
    url: 'https://medium.com/thelinux',
    type: 'Publication',
    highlight: 'Linux & Terminal',
  },
  {
    title: 'The NixOS',
    description: 'Publication sharing hands-on tutorials, opinions, and guides regarding NixOS, Nix flakes, package management, and reproducible environments.',
    url: 'https://medium.com/thenixos',
    type: 'Publication',
    highlight: 'NixOS & Flakes',
  },
  {
    title: 'FreeCodeCamp Technical Author',
    description: 'Published over 300+ in-depth technical tutorials covering React, Next.js, Linux commands, web performance, and open source.',
    url: 'https://www.freecodecamp.org/news/author/rajdeep/',
    type: 'Author',
    highlight: '300+ Articles',
  },
];

