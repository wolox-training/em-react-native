import React from 'react';
import { SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { BOOKS_MOCK } from '@constants/mockBooks';

import BookItem from './components/BookItem';
import styles from './styles';

function BookList() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={BOOKS_MOCK} renderItem={BookItem} keyExtractor={item => item.id.toString()} />
    </SafeAreaView>
  );
}

export default BookList;
