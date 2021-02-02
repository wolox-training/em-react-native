import React, { useEffect } from 'react';
import { SafeAreaView, FlatList, ListRenderItem } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Book } from '@interfaces/Book';
import actionCreators from '@redux/book/actions';
import { AppState } from '@interfaces/Redux';

import BookItem from '../BookList/components/BookItem';

import styles from './styles';
import NoItems from './components/NoItems';

function Search() {
  const dispatch = useDispatch();
  const books = useSelector<AppState, Book[]>(state => state.bookReducer.books);

  useEffect(() => {
    dispatch(actionCreators.getBooks());
  }, [dispatch]);

  const keyExtractor = ({ id }: Book) => String(id);
  const renderItem: ListRenderItem<Book> = ({ item }) => <BookItem item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={NoItems}
      />
    </SafeAreaView>
  );
}

export default Search;
