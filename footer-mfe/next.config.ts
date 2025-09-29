import type { NextConfig } from "next";
import  withModuleFederation  from '@module-federation/nextjs-mf';

const nextConfig: NextConfig = {
  // No basePath needed for Module Federation at the component level
};

const mfConfig = {
  name: 'footer_mfe',
  filename: 'static/chunks/remoteEntry.js',
  exposes: {
    './Footer': './src/components/Footer',
  },
  shared: {
    react: { singleton: true, requiredVersion: false },
    'react-dom': { singleton: true, requiredVersion: false },
    'styled-jsx': { singleton: true, requiredVersion: false },
  },
};

export default new withModuleFederation({ ...nextConfig, mfConfig } as any );
