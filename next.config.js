const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["naszsklep-api.vercel.app"],
  },
  pageExtensions: ["ts", "tsx", "mdx"],
  experimental: {
    typedRoutes: true,
    mdxRs: true,
  },
};

module.exports = withMDX(nextConfig);
