/**
 * @format
 */

import 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import renderer from 'react-test-renderer';

import App from './src/app';

const mockStore = configureMockStore([thunk]);

const store = mockStore({
  bookReducer: { books: [] }
});

jest.useFakeTimers();

it('renders correctly', () => {
  renderer.create(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
