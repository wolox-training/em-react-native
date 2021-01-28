import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import Reactotron from '@config/reactotronConfig';

import { bookReducer } from './book/reducer';

const rootReducer = combineReducers({ bookReducer });

export default createStore(rootReducer, compose(applyMiddleware(thunk), Reactotron.createEnhancer()));
