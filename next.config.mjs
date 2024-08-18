/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/test',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
