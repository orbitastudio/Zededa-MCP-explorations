import type { Preview } from '@storybook/react';
import '../public/global.css';
import { themes } from '@storybook/theming';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#1a1716',
        },
        {
          name: 'light',
          value: '#ffffff',
        },
      ],
    },
    layout: 'centered',
  },
};

export default preview;

