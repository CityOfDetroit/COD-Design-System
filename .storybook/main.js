module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-coverage',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/web-components-webpack5',
    options: {},
  },
  features: {
    interactionsDebugger: true,
  },
  staticDirs: ['../public'],
  docs: {
    autodocs: true,
    // Add the MDX configuration here:
    mdx: {
      remarkPlugins: [
        require('remark-gfm')
      ],
    },
  },
};