import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducerRoot from './store/reducerRoot';

require('bootstrap/dist/css/bootstrap.min.css');

const store = createStore(reducerRoot);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
