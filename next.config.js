/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Configure for GitHub Pages deployment
  assetPrefix: '/observa-shopify',
  basePath: '/observa-shopify',
}

module.exports = nextConfig
