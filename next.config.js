/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains: ["cdn.sanity.io"],
  },
  reactStrictMode: true,
  i18n:{
    locales: ["en","es","pt"],
    defaultLocale: "en",
    localeDetection: true,
  },
}

module.exports = nextConfig
