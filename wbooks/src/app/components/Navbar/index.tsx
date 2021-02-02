import React from 'react';
import { Image, View } from 'react-native';
import background from '@assets/bc_nav_bar.png';

import styles from './styles';

function Navbar() {
  return (
    <View>
      <Image style={styles.image} source={background} />
    </View>
  );
}

export default Navbar;
