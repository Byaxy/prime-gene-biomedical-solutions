/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};
const withNextIntl = require("next-intl/plugin")();

module.exports = withNextIntl(nextConfig);
