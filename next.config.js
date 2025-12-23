// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",        // enables static export
  trailingSlash: true,     // optional: adds / after routes
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'raw.githubusercontent.com' },
    ],
  },
};
module.exports = nextConfig;
