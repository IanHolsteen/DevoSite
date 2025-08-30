 /** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

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
//         pathname: '/markgowen/capstone_portfolio/**',
//       },
//     ]
//   }
// }
