import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BookList from '@screens/BookList';
import BookDetail from '@screens/BookDetail';
import { ROUTES, TABS } from '@constants/routes';
import { View } from 'react-native';
import { COLORS } from '@constants/colors';

import { SCREEN_OPTS } from './constants';
import TabIcon from './components/TabIcon';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function LibraryStackScreen() {
  return (
    <Stack.Navigator screenOptions={SCREEN_OPTS as object}>
      <Stack.Screen name={ROUTES.BookList} component={BookList} options={{ title: 'Listado de libros' }} />
      <Stack.Screen name={ROUTES.BookDetail} component={BookDetail} options={{ title: 'Detalle' }} />
    </Stack.Navigator>
  );
}

function WishListScreen() {
  return <View />;
}

function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => <TabIcon focused={focused} route={route} />
      })}
      tabBarOptions={{
        activeTintColor: COLORS.blue,
        inactiveTintColor: COLORS.gray
      }}>
      <Tab.Screen name={TABS.bookList} component={LibraryStackScreen} />
      <Tab.Screen name={TABS.wishList} component={WishListScreen} />
    </Tab.Navigator>
  );
}

export default AppNavigator;
