import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import './CSS/atom-one-dark.css'

import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import history from './history'
import store from './store'

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { i18n } from 'element-react'
import locale from 'element-react/src/locale/lang/en'

i18n.use(locale);

ReactDOM.render(
  <Provider store={store}>
  <Router history={history}>
    <App />
  </Router>
</Provider>,,
  document.getElementById('root'));
registerServiceWorker();
