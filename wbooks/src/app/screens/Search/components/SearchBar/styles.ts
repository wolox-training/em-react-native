import { COLORS } from '@constants/colors';
import { StyleSheet } from 'react-native';

const SIZE = 15;

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 20,
    width: '100%',
    height: 34,
    borderRadius: 100,
    backgroundColor: COLORS.white
  },

  image: {
    width: SIZE,
    height: SIZE
  },

  text: {
    marginLeft: 10,
    width: '90%',
    fontSize: 14,
    marginVertical: 0,
    paddingVertical: 0,
    color: COLORS.notSoBlack
  }
});
