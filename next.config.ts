import type { NextConfig } from "next";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/devpage",
  assetPrefix: "/devpage/",
};

export default nextConfig;
