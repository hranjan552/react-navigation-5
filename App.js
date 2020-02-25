import React from 'react';
import MainNavigation from './navigation/MainNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <MainNavigation></MainNavigation>
    </SafeAreaProvider>
  );
}
