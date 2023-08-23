/** @type {import('next').NextConfig} */
const path = require('path');
// включает gzip сжатие для уменьшения размера бандлов и ускорения загрузки.
const nextConfig = {
  compress: true,
  optimizeFonts: true,
  //  включает минификацию кода с помощью SWC вместо Terser. Это более быстрый минификатор кода.
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'img.freepik.com',
      'www.freepik.com',
      'lh3.googleusercontent.com',
      'avatars.githubusercontent.com',
    ],
  },

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
