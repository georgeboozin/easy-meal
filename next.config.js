/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  i18n: {
    locales: ["en", "ru", "ge"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
