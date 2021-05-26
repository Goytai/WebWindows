import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import ReactModal from 'react-modal';
import Routes from './routes';

import GlobalStyles from './styles/globals';
import DefaultTheme from './styles/themes/default';
import store from './store';

const App: React.FC = () => {
  ReactModal.setAppElement('#root');
  return (
    <Provider store={store}>
      <ThemeProvider theme={DefaultTheme}>
        <BrowserRouter>
          <Routes />
          <GlobalStyles />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
