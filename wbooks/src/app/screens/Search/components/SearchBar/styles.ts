import { COLORS } from '@constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 20,
    width: '100%',
    maxHeight: 34,
    borderRadius: 100,
    backgroundColor: COLORS.white
  },

  image: {
    width: 15,
    height: 15
  },

  text: {
    marginLeft: 10,
    width: '90%',
    fontSize: 14,
    marginVertical: 0,
    paddingVertical: 0,
    color: COLORS.black
  }
});
