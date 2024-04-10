import { View, Text, Alert } from 'react-native'
import React from 'react'
import Button from '../Button'
import styles from './DetailFooter.style'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite } from '../../context/Slice'

const DetailFooter = ({ data, navigation }) => {
    const work = {
        id: data.id,
        name: data.name,
        locations: data.locations,
        levels: data.levels,
        company: {
            name: data.company.name
        }
    }
    const favorites = useSelector((state) => state.favorites)
    const dispatch = useDispatch()

    const handleFavorite = () => {
        if (favorites.find((item) => item.id === work.id)) {
            return Alert.alert("This job is already in your favorites")
        } else {
            dispatch(addFavorite(work))
            navigation.navigate('Favorites Jobs')
        }

    }


    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>

                <Button title={"Submit"} iconName={"login"} />
                <Button title={"Favorite Job"} iconName={"heart"} onPress={handleFavorite} />

            </View>
        </View>
    )
}

export default DetailFooter