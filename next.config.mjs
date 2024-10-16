const allowedDomains = [
  "upload.wikimedia.org",
  "akm-img-a-in.tosshub.com",
  "resize.indiatv.in",
  "resize.indiatvnews.com",
  "img1.wsimg.com",
  "www.erupse.com",
  "eichic.wordpress.com",
  "bsmedia.business-standard.com",
  "zyroassets.s3.us-east-2.amazonaws.com",
  "images.news18.com",
  "bcsads.com",
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
    domains: allowedDomains,
  },
};

export default nextConfig;
