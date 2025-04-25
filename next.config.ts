import { NextConfig } from "next";
import TerserPlugin from "terser-webpack-plugin";
import { Configuration } from "webpack";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  compress: true,
  images: {
    domains: ["your-cdn.com"],
  },
  webpack(
    config: Configuration,
    { dev, isServer }: { dev: boolean; isServer: boolean }
  ) {
    if (!dev && !isServer) {
      if (config.optimization?.minimizer) {
        config.optimization.minimizer.push(
          new TerserPlugin({
            terserOptions: {
              compress: {
                drop_console: true,
              },
            },
          })
        );
      }
    }
    return config;
  },
};

export default nextConfig;
