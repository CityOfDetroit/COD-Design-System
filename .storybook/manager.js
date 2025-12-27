import CODTheme from './CODTheme';
import { addons } from 'storybook/manager-api';
import {
  defaultConfig
} from 'storybook-addon-tag-badges/manager-helpers'

addons.setConfig({
  theme: CODTheme,
  navSize: 400,
  sidebar: {
    collapsedRoots: ['experimental'],
  },
  tagBadges: [
    // When tagged 'stable', display a badge in the sidebar and toolbar
    {
      tags: 'stable',
      badge: {
        text: 'Stable 🚀',
        bgColor: '#9DC183',
        fgColor: '#ffffff',
        tooltip: 'These components are ready for use!',
      },
      display: {
        sidebar: false,
        toolbar: true,
      },
    },
    // When tagged 'experimental', display a badge in the sidebar and toolbar
    {
      tags: ['experimental', 'alpha', 'beta', 'rc'],
      badge: {
        text: 'Experimental 🧪',
        bgColor: '#DC143C',
        fgColor: '#ffffff',
        tooltip: 'These components are experimental! They may be removed or modified in the future.',
      },
      display: {
        sidebar: ['component'],
        toolbar: true,
      },
    },
    ...defaultConfig,
  ],
})