const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["naszsklep-api.vercel.app", "media.graphassets.com"],
  },
  pageExtensions: ["ts", "tsx", "mdx"],
  experimental: {
    typedRoutes: true,
    mdxRs: true,
  },
  env: {
    HYGRAPH_API_URL: process.env.HYGRAPH_API_URL,
    HYGRAPH_API_KEY: process.env.HYGRAPH_API_KEY,
  },
  async redirects() {
    return [
      {
        source: "/products",
        destination: "/products/1",
        permanent: false,
      },
      {
        source: "/category",
        destination: "/categories",
        permanent: false,
      },
    ];
  },
};

module.exports = withMDX(nextConfig);
