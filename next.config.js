/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Add these domains to allow external images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
    // Increase timeout for image optimization
    minimumCacheTTL: 86400, // Cache images for 24 hours
    // Limit image sizes to reduce load time
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [32, 48, 64, 96, 128],
  },
  // Increase timeout for serverless functions
  staticPageGenerationTimeout: 60, // Increase from default 15 to 60 seconds
};

module.exports = nextConfig;
