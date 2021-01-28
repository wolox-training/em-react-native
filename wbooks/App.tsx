import React from 'react';
import { Provider } from 'react-redux';

import store from './src/redux/store';
import App from './src/app';
import './src/config/reactotronConfig';

export default function index() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
