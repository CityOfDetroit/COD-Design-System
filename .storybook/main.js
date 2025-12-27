import remarkGfm from 'remark-gfm';

export default {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-coverage',
    '@chromatic-com/storybook',
    'storybook-addon-tag-badges',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  features: {
    interactionsDebugger: true,
  },
  staticDirs: ['../public'],
  docs: {
    mdx: {
      remarkPlugins: [remarkGfm],
    },
  },
  core: {
    builder: '@storybook/builder-vite',
  },
};
