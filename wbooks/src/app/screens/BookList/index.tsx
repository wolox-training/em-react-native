import React, { useEffect } from 'react';
import { SafeAreaView, FlatList, ListRenderItem } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Book } from '@interfaces/Book';
import actionCreators from '@redux/book/actions';

import BookItem from './components/BookItem';
import styles from './styles';

interface Props {
  bookReducer: {
    books: Book[];
  };
}

function BookList() {
  const dispatch = useDispatch();
  const books = useSelector((state: Props) => state.bookReducer.books);

  useEffect(() => {
    dispatch(actionCreators.getBooks());
  }, [dispatch]);

  const keyExtractor = ({ id }: Book) => String(id);
  const renderItem: ListRenderItem<Book> = ({ item }) => <BookItem item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={books} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
}

export default BookList;
