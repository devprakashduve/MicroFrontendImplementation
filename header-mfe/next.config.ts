import type { NextConfig } from "next";
import  withModuleFederation  from '@module-federation/nextjs-mf';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
};

const mfConfig = {
  name: 'header_mfe',
  filename: 'static/chunks/remoteEntry.js',
  exposes: {
    './Header': './src/components/Header',
  },
  shared: {
    react: { singleton: true, requiredVersion: false },
    'react-dom': { singleton: true, requiredVersion: false },
    'styled-jsx': { singleton: true, requiredVersion: false },
  },
};

export default new withModuleFederation(
  {...nextConfig, mfConfig} as any
);
