/* eslint-disable no-use-before-define */
import React from 'react';
import { StyleSheet, View } from 'react-native';

import BookItem from './components/BookItem';

const BookList = () => (
  <View style={styles.container}>
    <BookItem />
    <BookItem />
    <BookItem />
    <BookItem />
  </View>
);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  }
});

export default BookList;
