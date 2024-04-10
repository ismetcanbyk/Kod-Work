import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavPage from './src/pages/FavPage';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerNav from './src/navigations/DrawerNav';
import Loading from './src/components/Loading';
import { Provider } from 'react-redux';
import { Store } from './src/context/Store'





export default function App() {
  return (
    <Provider store={Store}>

      <NavigationContainer>
        <DrawerNav />
      </NavigationContainer>
    </Provider>
  );
}

