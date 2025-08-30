 /** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export', // for static site generation
  images: { unoptimized: true }, // required for static exports
  trailingSlash: true, // helps with GitHub Pages routing
  // basePath: '/DevoSite',
  // assetPrefix: '/DevoSite/', // ensures assets load from the correct path
};

module.exports = nextConfig;
// const nextConfig = {
//   reactStrictMode: true,

// }

// module.exports = {
//   async rewrites() {
//     return [
//       {
//         source: '/api/:path*',
//         destination: 'http://localhost:3000/api/:path*'
//       }
//     ]
//   },

//   // distDir: 'build',
//   images: {
//     unoptimized: true,
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'tailwindui.com',
//         port: '',
//         pathname: '/img/logos/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'www.github.com',
//         port: '',
//         pathname: '/**',
//       },
//     ]
//   }
// }
