The official blog project is my personal portfolio website built with [Next.js](https://nextjs.org/), [Nextra](https://nextra.site/), [Mantine UI](https://mantine.dev/) and [Section theme](https://section-theme-blog-docs.vercel.app/).
In my blog, I write articles about Linux, Ubuntu, Raspberry Pi 4, etc.

You can also start your blog using the Section theme. I created a Section theme with Nextra and Mantine UI for the official blog project. So everybody could start their blog within less than 5 mint. 

Nextra is a static site generated based on Next.js, and the good part is the vercel team maintains Nextra. 

With a [Section theme](https://section-theme-blog-docs.vercel.app/), you can focus on writing, not design and configuration. The good part is Section theme comes with less configuration. Section theme includes SEO support, nav customization, Inbuilt search, dark mode, etc.


## Getting Started with official blog

First, clone the `git clone https://github.com/officialrajdeepsingh/officialblog` project, and install the dependencies using one of the node package managers NPM, yarn, and pnpm.

```bash
npm install
# or
yarn install
# or
pnpm install
```

After starting your local development server:


```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.mdx`. The page auto-updates as you edit the file.

Learn more about nextra and the section theme, and if there is any problem or question about the section theme, contact me.

## Note:
Before deploy firstly remove the `https://officialrajdeepsingh.dev` domain in `next-sitemap.config.js` and `theme.config.tsx` file. 
