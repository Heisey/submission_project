import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { services } from './core'

import styles from './styles'

ReactDOM.render(
  <React.StrictMode>
    <styles.GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

services.reportWebVitals()
