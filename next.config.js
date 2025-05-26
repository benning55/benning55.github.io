/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/benning55.github.io' : '', // Updated to match repo name
  assetPrefix: process.env.NODE_ENV === 'production' ? '/benning55.github.io' : '',
  distDir: 'dist',
  trailingSlash: true,
  // Ensure static files are handled correctly
  webpack: (config) => {
    config.output.publicPath = process.env.NODE_ENV === 'production' 
      ? '/benning55.github.io/_next/' 
      : '/_next/';
    return config;
  },
}

module.exports = nextConfig 