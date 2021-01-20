import React from 'react';
import { SafeAreaView } from 'react-native';
import { BOOKS_MOCK } from '@constants/mockBooks';

import BookItem from './components/BookItem';
import styles from './styles';

function BookList() {
  return (
    <SafeAreaView style={styles.container}>
      {BOOKS_MOCK.map(book => (
        <BookItem item={book} />
      ))}
    </SafeAreaView>
  );
}

export default BookList;
