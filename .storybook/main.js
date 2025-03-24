module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-coverage',
    '@storybook/addon-interactions',
    '@storybook/addon-webpack5-compiler-babel',
    '@chromatic-com/storybook',
    'storybook-addon-tag-badges'
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
    // Add the MDX configuration here:
    mdx: {
      remarkPlugins: [
        require('remark-gfm')
      ],
    }
  },
};