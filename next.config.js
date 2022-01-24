const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withFonts = require('next-fonts');

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Referrer-Policy', value: 'same-origin' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'Strict-Transport-Security', value: 'max-age=28800; includeSubDomains; preload'}
];

const redirects = require('./public/redirects.json');

module.exports = withPlugins([
  withImages, withFonts
], {
  trailingSlash: false,
  cleanUrls: true,
  basePath: '',
  swcMinify: true, //You can opt-in to using the Next.js compiler for minification. This is 7x faster than Terser.
  compress: true,
  images: {
    domains: ['s3.us-east-2.amazonaws.com', 'https://essay-multi-zone-vercel-us-git-dev-24task.vercel.app']
  },
  env: {
    basePath: '',
    defaultMeta: {
      title: "",
      description: "",
      keywords: "",
      urlCategory: 0
    },
     isApiLive: true,
     NEXT_PUBLIC_STRIPE_TEST_KEY: 'pk_test_oWefgUn8atgORbMuY4imVlC6',
     NEXT_PUBLIC_STRIPE_LIVE_KEY: 'pk_live_BIwIJ20n2rhBcb5y46PEpAzu',
     NEXT_PUBLIC_GTM: 'TR6NLSZ',
      hostBaseUrl: 'https://essay-multi-zone-vercel-us-git-dev-24task.vercel.app'
     //hostBaseUrl: 'http://localhost:3000'
  },
  defaultLocale: 'en',
  async rewrites() {
    return [
      {
        source: '/uk',
        destination: `https://essay-multi-zone-vercel-us-git-dev-24task.vercel.app/uk`
      },
      {
        source: '/uk/:path*',
        destination: `https://essay-multi-zone-vercel-us-git-dev-24task.vercel.app/uk/:path*`
      },
      {
        source: '/writers-profile/:path*',
        destination: `/writers-profile/:path*`
      },
      {
        source: '/articles/:path*',
        destination: `/articles/:path*`
      },
      {
        source: '/post/:path*',
        destination: `/post/:path*`
      },
      {
        source: '/:path*',
        destination: `/services/:path*`
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders
      },
    ]
  },
  async redirects() {
    return redirects
  },
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.css$/,
        loader: 'babel-loader!raw-loader'
      },
      {
        test: /\.scss$/,
        loader: 'babel-loader!raw-loader!sass-loader'
      }
    )
    return config
  }
})
