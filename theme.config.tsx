import type { SectionBlogTheme } from "section-theme-blog";

const themeConfig: SectionBlogTheme = {
  defaultSeo: {
    openGraph: {
      type: "website",
      locale: "en_IE",
      url: "https://section-theme-blog-docs.vercel.app/",
      siteName: "Section theme blog",
    },
    twitter: {
      handle: "@Official_R_deep",
      site: "@site",
      cardType: "summary_large_image",
    },
  },
  siteURL: "http://localhost:3000",
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
      route: "/page/about",
      name: "About",
    },
    {
      route: "/page/contact",
      name: "Contact",
    },
  ],
  secondary_navigation: [
    {
      route: "/page/disclaimer",
      name: "Disclaimer",
    },
    {
      route: "/page/privacy-policy",
      name: "Privacy policy",
    },
  ],
  social_links: [
    {
      name: "Twitter",
      url: "https://facebook.com/officialrajdeepsingh",
    },
    {
      name: "Github",
      url: "https://facebook.com/officialrajdeepsingh",
    },
  ],
};

export default themeConfig;
