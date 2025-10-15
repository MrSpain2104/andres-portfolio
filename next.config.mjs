/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enforce linting and TypeScript errors during build to catch issues early.
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    // Do not ignore TypeScript build errors; fix them before deploying.
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
