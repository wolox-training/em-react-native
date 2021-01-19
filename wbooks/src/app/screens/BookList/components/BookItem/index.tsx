import React from 'react';
import { Image, Text, View } from 'react-native';
import noBook from '@assets/img_book_placeholder.png';

import { STYLES } from './styles';

type Props = {
  item: {
    title: string;
    author: string;
    imageUrl: string | null;
  };
};

function BookItem(props: Props) {
  return (
    <View style={STYLES.container}>
      <Image
        style={STYLES.image}
        source={
          props.item.imageUrl
            ? {
                uri: props.item.imageUrl
              }
            : noBook
        }
      />
      <View style={STYLES.text}>
        <Text numberOfLines={2} style={STYLES.title}>
          {props.item.title}
        </Text>
        <Text style={STYLES.author}>{props.item.author}</Text>
      </View>
    </View>
  );
}

export default BookItem;
