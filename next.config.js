// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,

  // 👇 required for GitHub Pages repo subpath
  basePath: '/BurntSienna',
  assetPrefix: '/BurntSienna/',

  // 👇 required for static export with next/image
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
