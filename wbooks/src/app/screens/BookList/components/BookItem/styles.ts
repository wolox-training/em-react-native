import { COLORS } from '@constants/colors';
import { StyleSheet } from 'react-native';

export const STYLES = StyleSheet.create({
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
    width: 335,
    height: 90,
    backgroundColor: COLORS.white,
    marginBottom: 10,
    paddingHorizontal: 30,
    paddingVertical: 15
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    color: COLORS.gray
  },
  author: {
    color: COLORS.gray,
    fontSize: 15
  },
  text: {
    marginLeft: 20,
    flex: 1
  },
  image: {
    paddingHorizontal: 20,
    paddingVertical: 25
  }
});
