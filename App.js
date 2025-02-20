import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppStack from './src/Navigation/AppStack/AppStack';

export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
