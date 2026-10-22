/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  // The parent directory has an unrelated lockfile; pin the workspace root.
  turbopack: {
    root: process.cwd(),
  },
  outputFileTracingRoot: process.cwd(),
  experimental: {
    // Cover images are posted through Server Actions (default limit is 1 MB).
    // Vercel functions cap request bodies at 4.5 MB.
    serverActions: { bodySizeLimit: "4mb" },
  },
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
