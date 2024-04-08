import { View, Text } from 'react-native'
import React from 'react'
import styles from './Card.style'
import { TouchableOpacity } from 'react-native-gesture-handler'


const Card = () => {



    return (

        <TouchableOpacity style={styles.card}>
            <Text style={styles.cardTitle}>Title</Text>
            <Text style={styles.cardBody}>Body</Text>
            <View style={styles.locationContainer}>
                <Text style={styles.location}>Footer</Text>
            </View>
            <View style={styles.levelContainer}>
                <Text style={styles.level} >Level</Text>
            </View>
        </TouchableOpacity>

    )
}

export default Card