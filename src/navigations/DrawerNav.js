import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavPage from '../pages/FavPage';
import StackNav from './StackNav';
import MapPages from '../pages/MapPages';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
    return (
        <Drawer.Navigator screenOptions={{ drawerItemStyle: { backgroundColor: '#fdeaea' }, headerShown: false }}>
            <Drawer.Screen name="Jobs Main" component={StackNav} options={{ drawerLabelStyle: { color: '#ef5350' }, }} />
            <Drawer.Screen name="Favorites Jobs" component={FavPage} />
            <Drawer.Screen name="Map Page" component={MapPages} />
        </Drawer.Navigator>
    )
}

export default DrawerNav