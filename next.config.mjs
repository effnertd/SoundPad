/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/SoundPad',
  assetPrefix: '/SoundPad/',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
