import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import searchIcon from '@assets/baric_search.png';
import { useNavigation } from '@react-navigation/native';
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
