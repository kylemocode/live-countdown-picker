import {
  ThemeProvider,
  createGlobalStyle,
} from 'styled-components';

import { PropsWithChildren } from 'react';

import themes from './index';

const GlobalStyle = createGlobalStyle`
  body {

  }
`;

const DynamicTheme = ({
  children,
}: PropsWithChildren<{}>) => {

  return (
    <ThemeProvider theme={themes}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  );
};

export default DynamicTheme;
