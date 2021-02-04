import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BookList from '@screens/BookList';
import BookDetail from '@screens/BookDetail';
import WishList from '@screens/WishList';
import { ROUTES, TABS } from '@constants/routes';
import { COLORS } from '@constants/colors';
import Search from '@screens/Search';
import SearchBar from '@screens/Search/components/SearchBar';

import { SCREEN_OPTS } from './constants';
import TabIcon from './components/TabIcon';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function LibraryStackScreen() {
  return (
    <Stack.Navigator screenOptions={SCREEN_OPTS as object}>
      <Stack.Screen name={ROUTES.BookList} component={BookList} options={{ title: 'Listado de libros' }} />
      <Stack.Screen name={ROUTES.BookDetail} component={BookDetail} options={{ title: 'Detalle' }} />
      <Stack.Screen
        name={ROUTES.Search}
        component={Search}
        options={{ headerTitle: SearchBar, headerRight: undefined }}
      />
    </Stack.Navigator>
  );
}

function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => <TabIcon focused={focused} route={route} />
      })}
      tabBarOptions={{
        activeTintColor: COLORS.blue,
        inactiveTintColor: COLORS.lightGray,
        labelStyle: { marginTop: -10 }
      }}>
      <Tab.Screen name={TABS.bookList} component={LibraryStackScreen} options={{ title: 'Library' }} />
      <Tab.Screen name={TABS.wishList} component={WishList} options={{ title: 'Wishlist' }} />
    </Tab.Navigator>
  );
}

export default AppNavigator;
