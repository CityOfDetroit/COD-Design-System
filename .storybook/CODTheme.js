import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: 'white',
  colorSecondary: '#004445',

  // UI
  appBg: 'white',
  appContentBg: '#e6e6e6',
  appBorderColor: '#004445',
  appBorderRadius: 6,

  // Typography
  fontBase: '"Montserrat", sans-serif',
  fontCode: '"Montserrat", monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'white',
  textMutedColor: '#666666',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: '#9FD5B3',
  barBg: '#004445',

  // Form colors
  inputBg: 'white',
  inputBorder: '#004445',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  // Brand assets
  brandTitle: 'City of Detroit',
  brandUrl: 'https://detroitmi.gov',
  brandImage:
    'https://detroitmi.gov/sites/detroitmi.localhost/files/2023-05/city-of-detroit-logo-1.png',
  brandTarget: '_self',
});
