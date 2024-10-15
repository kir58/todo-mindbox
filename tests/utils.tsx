import { render } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../src/app/theme';

export const renderWithProviders = (ui: React.ReactElement) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );

  return { Wrapper, ...render(ui, { wrapper: Wrapper }) };
};
