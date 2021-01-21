import React from 'react';
import { Image, Text, View } from 'react-native';
import noBook from '@assets/img_book_placeholder.png';
import { Book } from '@interfaces/Book';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

interface Props {
  item: Book;
}

function BookItem({ item }: Props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('BookDetail')}>
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
