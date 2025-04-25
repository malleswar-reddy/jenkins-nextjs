/** @type {import('next').NextConfig} */
// Removed unused import of TerserPlugin
const nextConfig = {
  reactStrictMode: true, // Helps catch common bugs
  swcMinify: true, // Smaller and faster builds (default in latest Next.js)
  poweredByHeader: false, // Hide "X-Powered-By: Next.js"
  compress: true, // Gzip compression for faster delivery
  images: {
    domains: ["your-cdn.com"], // Set this if you use remote images
  },

  webpack(config, { dev, isServer }) {
    // Ensure the import statement is valid in this context
    import TerserPlugin from "terser-webpack-plugin";
    if (!dev && !isServer) {
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

    return config;
  },
};

module.exports = nextConfig;
