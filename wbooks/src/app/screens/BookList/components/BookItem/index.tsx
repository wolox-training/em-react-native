import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Book } from '@interfaces/Book';
import { ROUTES } from '@constants/routes';
import noBook from '@assets/img_book_placeholder.png';

import styles from './styles';

interface Props {
  item: Book;
}

function BookItem({ item }: Props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(ROUTES.BookDetail)}>
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
    </TouchableOpacity>
  );
}

export default BookItem;
