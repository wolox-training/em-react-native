import React from 'react';
import { useSelector } from 'react-redux';
import { Book } from '@interfaces/Book';
import { AppState } from '@interfaces/Redux';
import BookList from '@components/BookList';

function Search() {
  const searchCriteria = useSelector<AppState, string>(state => state.bookReducer.filterBooks) || '';
  const books = useSelector<AppState, Book[]>(state =>
    searchCriteria.length < 1
      ? []
      : state.bookReducer.books.filter(book => {
          const SEARCH = searchCriteria.toLowerCase();
          const TITLE = book.title.toLowerCase();

          return TITLE.includes(SEARCH);
        })
  );

  return <BookList Books={books} isSearch searchCriteria={searchCriteria} />;
}

export default Search;
