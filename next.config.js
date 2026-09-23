const createNextPluginPreval = require("next-plugin-preval/config");
const withNextPluginPreval = createNextPluginPreval();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  typescript: {
    // Allows Vercel production builds to succeed despite third-party TypeScript mismatch errors
    ignoreBuildErrors: true,
  },
};

module.exports = withNextPluginPreval(nextConfig);
