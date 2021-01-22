import React from 'react';
import { SafeAreaView, FlatList, ListRenderItem } from 'react-native';
import { BOOKS_MOCK } from '@constants/mockBooks';
import { Book } from '@interfaces/Book';

import BookItem from './components/BookItem';
import styles from './styles';

function BookList() {
  const keyExtractor = ({ id }: Book) => String(id);
  const renderItem: ListRenderItem<Book> = ({ item }) => <BookItem item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={BOOKS_MOCK} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
}

export default BookList;
