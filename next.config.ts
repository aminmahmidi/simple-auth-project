import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compilerOptions: {
    baseUrl: ".",
    paths: {
      "@/*": ["./src/*"],
      "@/app/*": ["./src/app/*"],
      "@/components/*": ["./src/components/*"],
    },
  },
};

export default nextConfig;
