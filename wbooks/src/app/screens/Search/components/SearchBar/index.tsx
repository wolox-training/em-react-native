import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Image, TextInput, View, TouchableOpacity } from 'react-native';
import searchIcon from '@assets/ic_search_placeholder.png';
import cancel from '@assets/times-circle-solid.png';
import actionCreators from '@redux/book/actions';

import styles from './styles';

function SearchBar() {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();
  const onChangeText = (text: string) => {
    setSearch(text);
    dispatch(actionCreators.filterBooks(text));
  };
  const onPressDelete = () => {
    dispatch(actionCreators.filterBooks(''));
    setSearch('');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={searchIcon} />
      <TextInput style={styles.text} value={search} onChangeText={onChangeText} />
      <TouchableOpacity onPress={onPressDelete}>
        <Image style={styles.image} source={cancel} />
      </TouchableOpacity>
    </View>
  );
}

export default SearchBar;
