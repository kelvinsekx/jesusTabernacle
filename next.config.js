const fs = require('fs')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 200,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dfliypjzt/**",
      },
    ],
  },
  env: {
    rawJsFromFile: fs.readFileSync("./rawgoogleapi.js").toString(),
  },
};

module.exports = nextConfig;
