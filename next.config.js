/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/benning55.github.io' : '', // Updated to match repo name
}

module.exports = nextConfig 