import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BookList from '@screens/BookList';
import BookDetail from '@screens/BookDetail';
import { ROUTES } from '@constants/routes';

import { SCREEN_OPTS } from './constants';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={SCREEN_OPTS as object}>
      <Stack.Screen name={ROUTES.BookList} component={BookList} options={{ title: 'Listado de libros' }} />
      <Stack.Screen name={ROUTES.BookDetail} component={BookDetail} options={{ title: 'Detalle' }} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
