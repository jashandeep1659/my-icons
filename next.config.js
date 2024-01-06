/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: "canvas" }]; // required to make Konva & react-konva work
    return config;
  },
  images: {
    domains: ["my-icons.blr1.digitaloceanspaces.com"],
  },
};

module.exports = nextConfig;

// eslint: {
//     ignoreDuringBuilds: true,
// },
