/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", 'cloudflare-ipfs.com', "loremflickr.com" ],
  },
}

module.exports = nextConfig
