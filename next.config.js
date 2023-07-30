/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.startech.com.bd",
      "www.cloud.ryanscomputers.com",
      "www.techlandbd.com",
      "www.ucc.com.bd",
      "live.staticflickr.com",
      "github.com",
    ],
  },
};

module.exports = nextConfig;
