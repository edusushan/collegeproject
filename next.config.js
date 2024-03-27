/* @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "localhost",
      "duyt4h9nfnj50.cloudfront.net",
      "th.bing.com",
      "static.vecteezy.com",
    ],
  },
};

module.exports = nextConfig;
