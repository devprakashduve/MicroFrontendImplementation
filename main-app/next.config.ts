import type { NextConfig } from "next";
import  withModuleFederation  from '@module-federation/nextjs-mf';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const mfConfig = {
  name: 'main_app',
  remotes: {
    header_mfe: 'header_mfe@http://localhost:3001/_next/static/chunks/remoteEntry.js',
    footer_mfe: 'footer_mfe@http://localhost:3002/_next/static/chunks/remoteEntry.js',
  },
  shared: {
    react: { singleton: true, requiredVersion: false },
    'react-dom': { singleton: true, requiredVersion: false },
    'styled-jsx': { singleton: true, requiredVersion: false },
  },
};

export default new withModuleFederation({...nextConfig, mfConfig} as any);
