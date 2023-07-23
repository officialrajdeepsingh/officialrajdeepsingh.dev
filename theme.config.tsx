import type { SectionBlogTheme } from "section-theme-blog";

const themeConfig: SectionBlogTheme = {
  homePageAsAuthor: true,
  siteURL: "https://officialrajdeepsingh.dev",
  defaultSeo: {
    openGraph: {
      type: "website",
      locale: "en_IE",
      url: "https://officialrajdeepsingh.dev",
      siteName: "Rajdeep Singh",
    },
    twitter: {
      handle: "@Official_R_deep",
      site: "@site",
      cardType: "summary_large_image",
    },
  },
  logo: {
    text: "Rajdeep Singh",
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V12"
          stroke="black"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  primary_navigation: [
    {
      route: "/",
      name: "Home",
    },
    {
      route: "/posts",
      name: "Blog",
    },
    {
      route: "/tags/ghost",
      name:"Ghost CMS"
    },
    {
      route: "/tags/linux",
      name:"Linux"
    },
    {
      route: "/pages/manga-and-anime",
      name: "Manga and Anime",
    },

  ],
  secondary_navigation: [
    {
      route: "https://officialrajdeepsingh.dev/pages/disclaimer",
      name: "Disclaimer",
    },
    {
      route: "https://officialrajdeepsingh.dev/pages/privacy-policy",
      name: "Privacy policy",
    },
    {
      route: "https://officialrajdeepsingh.dev/pages/contact",
      name: "Contact",
    },

  ],
  social_links: [
    {
      name: "Twitter",
      url: "https://twitter.com/Official_R_deep",
    },
    {
      name: "Github",
      url: "https://github.com/officialrajdeepsingh/officialblog",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/officalrajdeepsingh/",
    },
  ],
};

export default themeConfig;
