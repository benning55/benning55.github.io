/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/benning55.github.io' : '', // Updated to match repo name
  assetPrefix: process.env.NODE_ENV === 'production' ? '/benning55.github.io/' : '',
  trailingSlash: true,
}

module.exports = nextConfig 