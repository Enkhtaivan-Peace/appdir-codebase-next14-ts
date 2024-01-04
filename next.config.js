/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
      styledComponents: true,
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: "*",
          },
        ],
      },
   env: {
    NEXT_BACKEND_URL: process.env.NEXT_BACKEND_URL
   }   
}

module.exports = nextConfig
