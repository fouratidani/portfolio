/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // This enables static export
  distDir: 'docs',         // Output to /docs folder for GitHub Pages
  images: {
    unoptimized: true,     // Required for GitHub Pages
  },
  trailingSlash: true,     // Avoid routing issues on GitHub Pages
};

module.exports = nextConfig;