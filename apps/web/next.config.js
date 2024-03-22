/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  images: {
    domains: ["loremflickr.com", "avatars.githubusercontent.com", "startglobal1920.notion.site", "media.istockphoto.com", "t3.ftcdn.net", "t4.ftcdn.net", "www.morganstanley.com", "www.shutterstock.com", "media.giphy.com", "cloudflare-ipfs.com"],
  },
  experimental: {
    serverActions: true,
  },
};
