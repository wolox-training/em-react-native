import { Book } from '@interfaces/Book';

import { actions } from './actions';

const initialState = {
  books: [],
  booksLoading: false,
  bookError: null
};

interface Action {
  type: string;
  payload: Book[];
}

export const bookReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actions.GET_BOOKS:
      return {
        ...state,
        booksLoading: true
      };

    case actions.GET_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload
      };

    case actions.GET_BOOKS_FAILURE:
      return {
        ...state,
        bookError: action.payload
      };

    default:
      return state;
  }
};
