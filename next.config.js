/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  images: {
    domains: ['img.freepik.com', 'www.freepik.com', 'lh3.googleusercontent.com'],
  },

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
