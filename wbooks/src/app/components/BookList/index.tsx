import React, { useEffect } from 'react';
import { SafeAreaView, FlatList, ListRenderItem } from 'react-native';
import { useDispatch } from 'react-redux';
import { Book } from '@interfaces/Book';
import actionCreators from '@redux/book/actions';

import BookItem from './components/BookItem';
import NoItems from './components/NoItems';
import styles from './styles';

interface Props {
  Books: Book[];
  isSearch?: boolean;
  searchCriteria?: string;
}

function BookList({ Books, isSearch, searchCriteria }: Props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionCreators.getBooks());
  }, [dispatch]);

  const keyExtractor = ({ id }: Book) => String(id);
  const renderItem: ListRenderItem<Book> = ({ item }) => <BookItem item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Books}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={
          isSearch ? () => <NoItems hasSearch={(Books.length < 1 && searchCriteria) as boolean} /> : undefined
        }
      />
    </SafeAreaView>
  );
}

export default BookList;
