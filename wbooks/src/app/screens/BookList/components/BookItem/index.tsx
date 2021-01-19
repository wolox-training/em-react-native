import React from 'react';
/* eslint-disable no-use-before-define */
import { Image, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '@constants/colors';
import noBook from '@assets/General/img_book_placeholder.png';

const functionName = (props: any) => {
  return (
    <View style={styles.container}>
      <Image defaultSource={noBook} style={styles.image} source={{ uri: props.item.imageUrl }} />
      <View style={styles.text}>
        <Text style={styles.title}>{props.item.title}</Text>
        <Text style={styles.author}>{props.item.author}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 335,
    height: 90,
    backgroundColor: COLORS.white,
    marginBottom: 10,
    paddingHorizontal: 30,
    paddingVertical: 15
  },
  title: {
    fontSize: 17,
    color: COLORS.gray
  },
  author: {
    fontSize: 15
  },
  text: {
    marginLeft: 19
    // flex: 2
  },
  image: {
    height: 60,
    width: 39
  }
});

export default functionName;
