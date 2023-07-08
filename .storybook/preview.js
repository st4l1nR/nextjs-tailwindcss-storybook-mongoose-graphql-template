// .storybook/preview.js

import '../src/app/globals.css';
import * as NextImage from 'next/image';
import { RouterContext } from "next/dist/shared/lib/router-context"
import SessionContextProvider from './SessionContextProvider.js';
import previewAuthentications from './previewAuthentification.js';
import { MockedProvider } from '@apollo/client/testing';

const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

const withAuthMock = (Story, context) => {
  const session = previewAuthentications[context.globals.appAuthenticated]?.session;

  return (
    <SessionContextProvider session={session}>
      <Story {...context} />
    </SessionContextProvider>
  );
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  previewTabs: {
    'storybook/docs/panel': { index: -1 },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  apolloClient: {
    MockedProvider,
  },
};
// define global options for theme and locale switcher
export const globalTypes = {
  appAuthenticated: {
    name: 'appAuthenticated',
    description: 'Set authentication state',
    defaultValue: null,
    toolbar: {
      icon: 'user',
      items: Object.keys(previewAuthentications).map((u) => ({
        value: u,
        title: previewAuthentications[u].title,
      })),
    },
  },
};

export const decorators = [withAuthMock];
