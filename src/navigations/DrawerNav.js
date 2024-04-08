import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavPage from '../pages/FavPage';
import StackNav from './StackNav';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
    return (
        <Drawer.Navigator screenOptions={{ drawerItemStyle: { backgroundColor: '#fdeaea' }, drawerLabelStyle: { color: '#ef5350' }, headerShown: false }}>
            <Drawer.Screen name="JobsMain" component={StackNav} />
            <Drawer.Screen name="Favorites Jobs" component={FavPage} />

        </Drawer.Navigator>
    )
}

export default DrawerNav