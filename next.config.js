const i18n = require('./i18n')
// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
<<<<<<< HEAD
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/**',
      },
    ],
=======
    domains: ['cdn.sanity.io'],
>>>>>>> febe4b4 (checkpoint)
  },
  i18n: {
    defaultLocale: i18n.DEFAULT_LANGUAGE,
    locales: [i18n.DEFAULT_LANGUAGE, ...i18n.SECONDARY_LANGUAGES],
  },
}

module.exports = nextConfig
