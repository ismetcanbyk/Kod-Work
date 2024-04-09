import { View, Text } from 'react-native'
import React from 'react'
import styles from './Card.style'
import { TouchableOpacity } from 'react-native-gesture-handler'


const Card = ({ item }) => {

    return (

        <TouchableOpacity style={styles.card}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardBody}>{item.company.name}</Text>
            <View style={styles.locationContainer}>
                <Text style={styles.location}>{item.locations[0].name} </Text>
            </View>
            <View style={styles.levelContainer}>
                <Text style={styles.level} >{item.levels[0].name}</Text>
            </View>
        </TouchableOpacity>

    )
}

export default Card