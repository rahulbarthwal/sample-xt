import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Loadable from 'react-loadable';

import App from './App';
import { ServerDataProvider } from './state/serverDataContext';

import './assets/fonts/Roboto-Bold.ttf';
import './assets/fonts/Roboto-Medium.ttf';
import './assets/fonts/Roboto-Light.ttf';
import './assets/fonts/Roboto-Regular.ttf';

import './styles/index.scss';

const serverData = window.__SERVER_DATA__;

export const main = () => {
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(
      <ServerDataProvider value={serverData}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ServerDataProvider>,
      document.getElementById('root')
    );
  });
};
