import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import Reactotron from '@config/reactotronConfig';
import { fetchMiddleware } from 'redux-recompose';

import { bookReducer } from './book/reducer';

const rootReducer = combineReducers({ bookReducer });
const middlewares = [applyMiddleware(thunk, fetchMiddleware)];

if (__DEV__) {
  middlewares.push(Reactotron.createEnhancer());
}

export default createStore(rootReducer, compose(...middlewares));
