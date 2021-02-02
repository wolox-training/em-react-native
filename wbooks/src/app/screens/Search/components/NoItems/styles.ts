import { COLORS } from '@constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: 110,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.lightBlue
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 20,
    marginBottom: 15
  },
  subtitle: {
    fontSize: 15
  }
});
