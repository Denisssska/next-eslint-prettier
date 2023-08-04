/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
}
const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
module.exports = nextConfig
