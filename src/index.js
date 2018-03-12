import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import { Router } from 'react-router-dom'
import history from './history'

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { i18n } from 'element-react'
import locale from 'element-react/src/locale/lang/en'

i18n.use(locale);

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
