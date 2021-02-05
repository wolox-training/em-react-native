import { createTypes, completeTypes } from 'redux-recompose';
import { getBooks } from '@services/BookService';

export const actions = createTypes(completeTypes(['GET_BOOKS'], ['FILTER_BOOKS']), '@@BOOKS');

export const actionCreators = {
  getBooks: () => ({
    type: actions.GET_BOOKS,
    target: 'books',
    service: getBooks
  }),

  filterBooks: (search: string) => ({
    type: actions.FILTER_BOOKS,
    target: 'filterBooks',
    payload: search
  })
};

export default actionCreators;
