import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BookList from '@screens/BookList';
import BookDetail from '@screens/BookDetail';
import Navbar from '@components/Navbar';
import { COLORS } from '@constants/colors';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontSize: 16,
          color: COLORS.white,
          fontWeight: '600',
          letterSpacing: -0.4,
          marginBottom: 20
        },
        headerLeftContainerStyle: {
          marginBottom: 20
        },
        headerStyle: {
          height: 100
        },
        headerBackTitleVisible: false,
        headerBackground: Navbar,
        headerTransparent: true,
        headerTintColor: COLORS.white
      }}>
      <Stack.Screen name="BookList" component={BookList} options={{ title: 'Listado de libros' }} />
      <Stack.Screen name="BookDetail" component={BookDetail} options={{ title: 'Detalle' }} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
