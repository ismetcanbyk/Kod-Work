import { View, Text } from 'react-native'
import React from 'react'
import Button from '../Button'
import styles from './DetailFooter.style'

const DetailFooter = () => {
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>

                <Button title={"Submit"} iconName={"heart"} />
                <Button title={"Favorite Job"} iconName={"login"} />

            </View>
        </View>
    )
}

export default DetailFooter