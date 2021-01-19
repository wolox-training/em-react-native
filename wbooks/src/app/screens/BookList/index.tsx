import { BOOKS_MOCK } from '@constants/mockBooks';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import BookItem from './components/BookItem';

function BookList() {
  return (
    <SafeAreaView>
      <FlatList data={BOOKS_MOCK} renderItem={BookItem} keyExtractor={item => item.id.toString()} />
    </SafeAreaView>
  );
}

export default BookList;
