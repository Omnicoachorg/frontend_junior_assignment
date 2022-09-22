import { ThemeProvider } from 'styled-components';
import { theme, backgrounds  } from '../src/config/storybook'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: backgrounds,
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];