import Navbar from '@components/Navbar';
import { COLORS } from '@constants/colors';

import SearchIcon from '../SearchIcon';

export const SCREEN_OPTS = {
  headerTitleStyle: {
    fontSize: 16,
    color: COLORS.white,
    fontWeight: '600',
    letterSpacing: -0.4,
    marginBottom: 20
  },
  headerLeftContainerStyle: {
    marginBottom: 50
  },
  headerStyle: {
    height: 100
  },
  headerBackground: Navbar,
  headerRight: SearchIcon,
  headerBackTitleVisible: false,
  headerTransparent: true,
  headerTintColor: COLORS.lightBlue
};
