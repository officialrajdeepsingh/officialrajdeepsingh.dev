/** @type {import('next').NextConfig} */

const withNextra = require("nextra")({
  theme: "section-theme-blog",
  themeConfig: "./theme.config.tsx",
  staticImage: true,
  readingTime: true,
});
module.exports = withNextra({
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source:"/:slug",
        destination: '/posts/:slug', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  },
});
