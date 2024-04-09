import { View, Text } from 'react-native'
import React from 'react'
import styles from './DetailHeader.style'

const DetailHeader = ({ data }) => {
    return (
        <View style={styles.container}  >
            <Text style={styles.title}>{data.name}</Text>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Locations: </Text>
                <Text style={styles.locations}>{data.locations[0].name}</Text>
            </View>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Job Level: </Text>
                <Text style={styles.locations}>{data.levels[0].name}</Text>
            </View>
            <Text style={styles.jobDetail}>Job Detail</Text>
        </View>
    )
}

export default DetailHeader