/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const packageJSON = require("./package.json");

const env = {
  ...process.env,
  APP_VERSION: packageJSON.version,
};

const nextConfig = {
  poweredByHeader: false,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["res.cloudinary.com", "img.youtube.com"],
  },
  serverRuntimeConfig: Object.keys(env).reduce((vars, name) => {
    if (name.match(/(^NODE_VERSION$|^NODE_ENV$|^npm_)/)) return vars;
    return { ...vars, [name]: env[name] };
  }, {}),
  publicRuntimeConfig: Object.keys(env).reduce((vars, name) => {
    if (name.match(/(^PRIVATE_|^NODE_VERSION$|^NODE_ENV$|^npm_)/)) return vars;
    return { ...vars, [name]: env[name] };
  }, {}),
  async generateBuildId() {
    return `${env.ENV}-${env.APP_VERSION}`;
  },
  redirects() {
    return [
      {
        source: "/og",
        destination: "/api/og",
        permanent: true,
      },
    ];
  },
  headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

// https://nextjs.org/docs/advanced-features/security-headers
const ContentSecurityPolicy = `
    default-src 'self' vercel.live;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.vercel-insights.com va.vercel-scripts.com vercel.live;
    style-src 'self' 'unsafe-inline';
    frame-src youtube.com www.youtube.com;
    img-src * blob: data:;
    media-src 'self' cloudinary.com res.cloudinary.com;
    connect-src *;
    font-src 'self' data:;;
`;

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\n/g, ""),
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

module.exports = nextConfig;
