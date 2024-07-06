/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd? '/next-testing' : '',
  output: "export",
  reactStrictMode: true,
};

export default nextConfig;

