import React from 'react';
import { useSelector } from 'react-redux';
import { Book } from '@interfaces/Book';
import { AppState } from '@interfaces/Redux';
import BookList from '@components/BookList';

function Library() {
  const books = useSelector<AppState, Book[]>(state => state.bookReducer.books);

  return <BookList books={books} />;
}

export default Library;
