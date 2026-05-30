import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/E-Shop',
  assetPrefix: '/E-Shop/',
  trailingSlash: true,
};

export default nextConfig;
