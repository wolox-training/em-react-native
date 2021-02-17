import { completeState, createReducer, completeReducer, onReadValue } from 'redux-recompose';

import { actions } from './actions';

const initialState = {
  books: [],
  filterBooks: ''
};

const fullInitialState = completeState(initialState);

const reducerDescription = {
  primaryActions: [actions.GET_BOOKS],
  override: { [actions.FILTER_BOOKS]: onReadValue() }
};

export const bookReducer = createReducer(fullInitialState, completeReducer(reducerDescription));
