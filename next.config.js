require('dotenv').config();

/**
 * @type {import('next').NextConfig}
 */



const nextConfig = {
  env: {
    GOOGLE_ANALYTICS: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
  },
}

module.exports = nextConfig
