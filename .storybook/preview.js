// .storybook/preview.js
import '../src/shared/themed-bootstrap.css';

export default {
  parameters: {
    actions: {},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: [
          'Getting Started',
          [
            'Home',
            'Editors & Designers',
            'Developers',
            ['Introduction', 'Installation & Usage', 'Themes & Customization'],
          ],
          'Components',
          'Experimental',
        ],
      },
    },
  },
};
export const tags = [];
