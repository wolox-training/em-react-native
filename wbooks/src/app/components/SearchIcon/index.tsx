import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import searchIcon from '@assets/ic_search.png';
import { ROUTES } from '@constants/routes';

import styles from './styles';

function SearchIcon() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(ROUTES.Search)}>
      <Image style={styles.magnifier} source={searchIcon} />
    </TouchableOpacity>
  );
}

export default SearchIcon;
