/* eslint-disable no-use-before-define */
import { BOOKS_MOCK } from '@constants/mockBooks';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import BookItem from './components/BookItem';

const BookList = () => (
  <View style={styles.container}>
    <FlatList data={BOOKS_MOCK} renderItem={BookItem} keyExtractor={item => item.id.toString()} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  }
});

export default BookList;
