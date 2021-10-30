import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root';
import { ThemeProvider } from 'styled-components';
import theme from 'utils/theme';
import GlobalStyles from 'utils/GlobalStyles';
import 'utils/fonts.css';

import { Provider } from 'react-redux';
import { store } from 'store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Root />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
