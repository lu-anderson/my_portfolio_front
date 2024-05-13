/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: '192.168.1.13'
      }
    ]
  }
};

module.exports = nextConfig;
