import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  putput:'export',
  distDir: 'dist',
  images:{
    unoptimized:true,
  },
};

export default nextConfig;
