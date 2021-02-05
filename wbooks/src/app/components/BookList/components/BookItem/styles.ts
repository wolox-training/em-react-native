import { StyleSheet } from 'react-native';
import { COLORS } from '@constants/colors';

export default StyleSheet.create({
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
    backgroundColor: COLORS.white,
    marginTop: 10,
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginHorizontal: 20
  },
  textContainer: {
    flex: 1,
    marginLeft: 20
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
  image: {
    width: 40,
    height: 60
  }
});
