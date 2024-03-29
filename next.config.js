/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ru", "ge"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
