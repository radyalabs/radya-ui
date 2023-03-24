import type { StorybookConfig } from '@storybook/react-webpack5';
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/preset-create-react-app', '@storybook/addon-interactions', '@storybook/addon-mdx-gfm'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  webpackFinal: async (config: any) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [{
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [require('tailwindcss'), require('autoprefixer')]
          }
        }
      }],
      include: path.resolve(__dirname, '../')
    });
    config.resolve.plugins = [new TsconfigPathsPlugin()];
    return config;
  }
};
export default config;