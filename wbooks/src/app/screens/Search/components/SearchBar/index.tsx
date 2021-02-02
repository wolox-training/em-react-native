import React from 'react';
import { Image, TextInput, View } from 'react-native';
import searchIcon from '@assets/ic_search_placeholder.png';

import styles from './styles';

function SearchBar() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={searchIcon} />
      <TextInput style={styles.text} />
    </View>
  );
}

export default SearchBar;
