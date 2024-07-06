/** @type {import('next').NextConfig} */


const nextConfig = {
  output: 'export',
  basePath: '/your-repository-name',
  assetPrefix: '/your-repository-name/',
  images: {
    loader: 'imgix',
    path: '',
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/comic': { page: '/comic' },
    };
  },
};

export default nextConfig;

