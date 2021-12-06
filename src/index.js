import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root';
import { ThemeProvider } from 'styled-components';
import theme from 'utils/theme';
import GlobalStyles from 'utils/GlobalStyles';
import 'utils/fonts.css';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Root />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
