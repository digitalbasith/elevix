import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    if (process.env.VERCEL) config.resolve.alias['./wordpress-environment'] = process.cwd() + '/lib/wordpress-environment.vercel.ts';
    return config;
  },
};

export default nextConfig;
