import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavPage from './src/pages/FavPage';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerNav from './src/navigations/DrawerNav';






export default function App() {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
}

