/** @type {import('next').NextConfig} */

const withPlugins = require('next-compose-plugins');
const { withContentlayer } = require('next-contentlayer');
const { withPlausibleProxy } = require('next-plausible');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline' *.googleapis.com cdn.jsdelivr.net;
	frame-src youtube.com www.youtube.com;
  img-src * blob: data:;
  media-src 'none';
	object-src 'none';
  connect-src *;
  font-src 'self';
`;

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
];
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com', // Unsplash
      'images.pexels.com', // Pexels
      'picsum.photos', // Picsum
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/js/script.js',
  //       destination: 'https://plausible.io/js/script.js',
  //     },
  //     {
  //       source: '/api/event', // Or '/api/event/' if you have `trailingSlash: true` in this config
  //       destination: 'https://plausible.io/api/event',
  //     },
  //   ];
  // },
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }

    return config;
  },
};

module.exports = withPlugins(
  [withContentlayer, withBundleAnalyzer, withPlausibleProxy],
  nextConfig
);
