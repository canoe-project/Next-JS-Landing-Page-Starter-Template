/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('next').NextConfig} */
const dev = process.env.NODE_ENV !== 'production';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {},
  env: {
    HOSTNAME: dev
      ? 'http://localhost:3000'
      : 'https://infinite-scroll-project.vercel.app/',
    AIR_QUALITY_DOMAIN: process.env.AIR_QUALITY_DOMAIN,
    PUBLIC_DATA_SERVICE_KEY: process.env.PUBLIC_DATA_SERVICE_KEY,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
