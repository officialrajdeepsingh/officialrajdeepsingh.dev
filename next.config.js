/** @type {import('next').NextConfig} */


const withNextra = require("nextra")({
  theme: "section-theme-blog",
  themeConfig: "./theme.config.tsx",
});
 
module.exports = withNextra({
  reactStrictMode: true,
});
