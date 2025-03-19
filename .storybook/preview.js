// .storybook/preview.js
import 'bootstrap/dist/css/bootstrap.min.css';

export const parameters = {
  actions: {},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Getting Started', 'Components', 'Experimental'],
    },
  },
};
export const tags = [];
