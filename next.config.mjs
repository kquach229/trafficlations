/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'example.com',
      'summons_image_domain.com',
      'nycserv.nyc.gov',
      'https://data.cityofnewyork.us',
    ], // Add your image domains here
  },
};

export default nextConfig;
