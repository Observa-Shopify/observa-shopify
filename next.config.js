/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/observa-shopify' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/observa-shopify' : '',
}

module.exports = nextConfig
