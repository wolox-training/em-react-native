import { BOOKS_MOCK } from '@constants/mockBooks';
import React from 'react';
import { View } from 'react-native';

import BookItem from './components/BookItem';

function BookList() {
  return (
    <View>
      {BOOKS_MOCK.map(book => (
        <BookItem item={book} />
      ))}
    </View>
  );
}

export default BookList;
