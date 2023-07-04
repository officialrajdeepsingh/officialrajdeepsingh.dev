/** @type {import('next').NextConfig} */

const withNextra = require("nextra")({
  theme: "section-theme-blog",
  themeConfig: "./theme.config.tsx",
  staticImage: true,
});

module.exports = withNextra({
  reactStrictMode: true,
});
