import React from 'react';
import LibraryInactiveIcon from '@assets/ic_library.png';
import LibraryActiveIcon from '@assets/ic_library_active.png';
import wishlistInactiveIcon from '@assets/ic_wishlist.png';
import wishlistActiveIcon from '@assets/ic_wishlist_active.png';
import { TABS } from '@constants/routes';
import { Image } from 'react-native';

interface Props {
  focused: boolean;
  route: { name: string };
}

function TabIcon({ focused, route }: Props) {
  let icon = LibraryActiveIcon;

  if (route.name === TABS.bookList) {
    icon = focused ? LibraryActiveIcon : LibraryInactiveIcon;
  } else if (route.name === TABS.wishList) {
    icon = focused ? wishlistActiveIcon : wishlistInactiveIcon;
  }

  return <Image source={icon} />;
}

export default TabIcon;
