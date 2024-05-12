import { View, Text } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'
import { StyleSheet } from 'react-native'


const MapPages = () => {
    return (
        <View style={styles.container}>
            <MapView style={styles.map} />
        </View>
    )
}

export default MapPages

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});