import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'http',
      hostname: 'cato888.com',
      port: '',
      pathname: '/one/**',
      search: ''

    }]
  }
}

export default nextConfig
