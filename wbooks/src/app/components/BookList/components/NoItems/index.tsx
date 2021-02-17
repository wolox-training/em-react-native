import React from 'react';
import { Text, View, Image } from 'react-native';
import magnifier from '@assets/ic_search_placeholder.png';

import styles from './styles';

interface Props {
  hasSearch: boolean;
}

function NoItems({ hasSearch }: Props) {
  return (
    <View style={styles.container}>
      <Image source={magnifier} />
      <Text style={styles.title}>{hasSearch ? 'No book was found' : 'Search in Wbooks'}</Text>
      <Text style={styles.subtitle}>
        {hasSearch ? "Check if you're spelling the book right" : 'Find your favorite writers and books!'}
      </Text>
    </View>
  );
}

export default NoItems;
