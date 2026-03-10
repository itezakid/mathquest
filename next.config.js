/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com'], // Google profile pictures
  },
  // Untuk deployment di cPanel (bukan Vercel)
  output: 'standalone',
}

module.exports = nextConfig
