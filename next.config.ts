import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx$/
});

const nextConfig: NextConfig = {
  pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
  typedRoutes: true,
  redirects() {
    return [
      {
        source: "/docs",
        destination: "/docs/index",
        permanent: true
      }
    ];
  }
};

export default withMDX(nextConfig);
