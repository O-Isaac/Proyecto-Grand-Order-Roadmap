import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "www.proyectograndorder.es"
      },
      {
        hostname: "imgur.com"
      }
    ]
  }
};

export default nextConfig;
