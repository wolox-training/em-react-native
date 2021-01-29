import React, { useEffect } from 'react';
import { SafeAreaView, FlatList, ListRenderItem } from 'react-native';
import { useDispatch } from 'react-redux';
import { BOOKS_MOCK } from '@constants/mockBooks';
import { Book } from '@interfaces/Book';
import actionCreators from '@redux/book/actions';

import BookItem from './components/BookItem';
import styles from './styles';

function BookList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionCreators.getBooks());
  }, [dispatch]);

  const keyExtractor = ({ id }: Book) => String(id);
  const renderItem: ListRenderItem<Book> = ({ item }) => <BookItem item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={BOOKS_MOCK} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
}

export default BookList;
