/** @type {import('next').NextConfig} */
const nextConfig = {
  
  webpack: (config: any, { isServer }: { isServer: boolean }) => {
    if (!isServer) {
      // Your plugin logic here
    }
    return config;
  },
   images: {
    remotePatterns: [
      new URL('https://raw.githubusercontent.com/**'),
    ],
  },
};

export default nextConfig;