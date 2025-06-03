// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
reactStrictMode: true, 
  output: 'export',
  
  images: {
    unoptimized: true,
  },
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
};

export default nextConfig;
