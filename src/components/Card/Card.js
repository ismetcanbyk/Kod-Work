import { View, Text } from 'react-native'
import React from 'react'
import styles from './Card.style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Button from '../Button'
import { useDispatch } from 'react-redux'
import { removeFavorite } from '../../context/Slice'


const Card = ({ item, navigation, customButton }) => {
    const dispatch = useDispatch()

    const handlePress = (id) => {
        navigation.navigate('Detail', { id })
    }

    const removeFavoriteJob = (id) => {
        dispatch(removeFavorite(id))
    }

    return (
        <View>

            <TouchableOpacity style={styles.card} onPress={() => handlePress(item.id)}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardBody}>{item.company.name}</Text>
                <View style={styles.locationContainer}>
                    <Text style={styles.location}>{item.locations[0].name} </Text>
                </View>
                <View style={styles.levelContainer}>
                    <Text style={styles.level} >{item.levels[0].name}</Text>
                </View>
                {customButton && <View style={styles.customButton}><Button title={customButton} onPress={() => removeFavoriteJob(item.id)} /></View>}
            </TouchableOpacity>
        </View>

    )
}

export default Card