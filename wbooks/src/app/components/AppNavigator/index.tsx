import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BookList from '@screens/BookList';
import BookDetail from '@screens/BookDetail';

import { SCREEN_OPTS } from './constants';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={SCREEN_OPTS as object}>
      <Stack.Screen name="BookList" component={BookList} options={{ title: 'Listado de libros' }} />
      <Stack.Screen name="BookDetail" component={BookDetail} options={{ title: 'Detalle' }} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
