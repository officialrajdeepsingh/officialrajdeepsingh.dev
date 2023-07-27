/** @type {import('next').NextConfig} */

 const redirectUrl = require("./redirect.js")

const withNextra = require('nextra')({
  theme: "section-theme-blog",
  themeConfig: "./theme.config.tsx",
  staticImage: true,
  readingTime: true,
})

module.exports = withNextra({
  reactStrictMode: true,
  async redirects() {
    return redirectUrl
  }
})



// console.log("redirectUrl", redirectUrl)

