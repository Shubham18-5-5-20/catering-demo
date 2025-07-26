// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add this 'images' block to allow external image domains
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/photos/**',
      },
    ],
  },
};

export default nextConfig;