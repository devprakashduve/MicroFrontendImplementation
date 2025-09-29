import type { NextConfig } from "next";
import { withModuleFederation } from '@module-federation/nextjs-mf';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
};

const mfConfig = {
  name: 'header_mfe',
  filename: 'static/chunks/remoteEntry.js',
  exposes: {
    // This exposes the component at './src/components/Header'
    // The host will import it as 'header_mfe/Header'
    './Header': './src/components/Header',
  },
  shared: {
    // You can share dependencies here to avoid loading them multiple times
    react: { singleton: true, requiredVersion: false },
    'react-dom': { singleton: true, requiredVersion: false },
    'styled-jsx': { singleton: true, requiredVersion: false },
  },
};

export default withModuleFederation(
  nextConfig,
  mfConfig,
);
