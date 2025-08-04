import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    productionBrowserSourceMaps: true,

     images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Matches all domains
      },
    ],
  },
};

export default nextConfig;
