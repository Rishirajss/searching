/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
      },
      {
        protocol: "https",
        hostname: "akm-img-a-in.tosshub.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
