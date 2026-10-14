import { createMDX } from 'fumadocs-mdx/next';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const redirectUrls = require('./redirect.js');

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    return redirectUrls;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  transpilePackages: ['react-tweet'],
};

export default withMDX(config);
