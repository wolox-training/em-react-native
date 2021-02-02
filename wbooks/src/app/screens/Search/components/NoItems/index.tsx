import React from 'react';
import { Text, View, Image } from 'react-native';
import magnifier from '@assets/ic_search_placeholder.png';

import styles from './styles';

function NoItems() {
  return (
    <View style={styles.container}>
      <Image source={magnifier} />
      <Text style={styles.title}>Search in Wbooks</Text>
      <Text style={styles.subtitle}>Find your favorite writer and books!</Text>
    </View>
  );
}

export default NoItems;
