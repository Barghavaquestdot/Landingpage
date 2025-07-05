// next.config.js
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
