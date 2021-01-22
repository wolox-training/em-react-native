/* eslint-disable no-use-before-define */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BookList from '../screens/BookList';
import BookDetail from '../screens/BookDetail';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BookList" component={BookList} options={{ title: 'Listado de libros' }} />
      <Stack.Screen name="BookDetail" component={BookDetail} options={{ title: 'Detalle' }} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
