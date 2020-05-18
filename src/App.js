import React from 'react';

import { Routes } from './layout';
import Head from './components/common/Head';

import './styles/index.scss';

const App = () => (
  <div className="main-container p-3">
    <Head />
    <Routes />
  </div>
);

export default App;
