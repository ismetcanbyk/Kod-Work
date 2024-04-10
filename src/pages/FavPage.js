import { View, Text } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FlashList } from '@shopify/flash-list'
import Card from '../components/Card/Card'
import styles from './styles/FavPage.style'


const FavPage = ({ navigation }) => {

    const favorites = useSelector((state) => state.favorites)


    const renderItem = ({ item }) => (
        <View>
            <Card
                item={item}
                navigation={navigation}
                customButton={"Remove from Favorites"}
            />
        </View>
    )


    return (
        <View style={styles.container}>
            <FlashList
                data={favorites}
                renderItem={renderItem}
                estimatedItemSize={200}
            />
        </View>
    )
}

export default FavPage