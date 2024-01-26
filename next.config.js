/** @type {import('next').NextConfig} */

const redirectUrl = require("./redirect.js")

const withNextra = require('nextra')({
  theme: "section-blog-theme",
  themeConfig: "./theme.config.jsx",
  staticImage: true,
  readingTime: true,
})

module.exports = withNextra({
  reactStrictMode: true,
  async redirects() {
    return redirectUrl
  },
  transpilePackages: ['react-tweet']
})

