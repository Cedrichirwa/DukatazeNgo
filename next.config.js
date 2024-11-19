/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
      },
      {
        protocol: "https",
        hostname: "www.dukataze.rw",
      },
    ],
  },
  webpack: (config) => {
    config.ignoreWarnings = [
      {
        module: /node_modules\/payload/,
        message: /require.extensions is not supported by webpack/,
      },
      {
        module: /node_modules\/payload\/node_modules\/express/,
        message:
          /Critical dependency: the request of a dependency is an expression/,
      },
    ];
    return config;
  },
};

module.exports = nextConfig;
