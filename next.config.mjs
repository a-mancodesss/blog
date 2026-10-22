/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  // The parent directory has an unrelated lockfile; pin the workspace root.
  turbopack: {
    root: process.cwd(),
  },
  outputFileTracingRoot: process.cwd(),
  images: {
    qualities: [75, 90, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
