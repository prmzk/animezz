/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["s4.anilist.co"],
  },
};

// Configuration object tells the next-pwa plugin
const withPWA = require("next-pwa")({
  dest: "public", // Destination directory for the PWA files
  disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
  register: true, // Register the PWA service worker
  skipWaiting: true, // Skip waiting for service worker activation
  fallbacks: {
    image: "/luffy.webp",
  },
});

module.exports = withPWA(nextConfig);
