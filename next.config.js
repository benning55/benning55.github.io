/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/benning' : '', // Replace 'benning' with your repo name
}

module.exports = nextConfig 