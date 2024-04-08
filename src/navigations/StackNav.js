import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Jobs from '../pages/Jobs';
import Detail from '../pages/Detail';

const Stack = createNativeStackNavigator();


const StackNav = () => {


    return (
        <Stack.Navigator screenOptions={{ headerTitleAlign: 'center', headerTitleStyle: { color: '#ef5350' } }}>
            <Stack.Screen name="Jobs" component={Jobs} />
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
    )
}

export default StackNav