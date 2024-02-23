/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a0.muscache.com',
        port: '',
        pathname: '/**/*',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        pathname: '/**/*',
      },
      {
        protocol: 'https',
        hostname:'www.shutterstock.com',
        port: '',
        pathname: '/**/*',
      }
    ],
  },
};

export default nextConfig;
