import React from 'react';
import { Image, Text, View } from 'react-native';
import noBook from '@assets/img_book_placeholder.png';
import { Book } from '@interfaces/Book';

import styles from './styles';

function BookItem({ item }: Book) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={
          item.imageUrl
            ? {
                uri: item.imageUrl
              }
            : noBook
        }
      />
      <View style={styles.textContainer}>
        <Text numberOfLines={2} style={styles.title}>
          {item.title}
        </Text>
        <Text style={styles.author}>{item.author}</Text>
      </View>
    </View>
  );
}

export default BookItem;
