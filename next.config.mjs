/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/insights/:match*",
        destination:
          "https://pirate-software.vercel.app/_vercel/insights/:match*",
      },
    ];
  },
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
