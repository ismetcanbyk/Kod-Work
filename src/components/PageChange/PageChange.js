import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import styles from './PageChange.style'
import { TouchableOpacity } from 'react-native-gesture-handler';

const PageChange = ({ pageNumber, setPageNumber }) => {

    const pageIncrement = () => {
        pageNumber += 1
        setPageNumber(pageNumber)
    }

    const pageDecrement = () => {
        if (pageNumber === 1) {
            return
        }
        pageNumber -= 1
        setPageNumber(pageNumber)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={pageDecrement}>
                <AntDesign name="caretleft" size={30} color="#ef5350" />
            </TouchableOpacity>

            <Text style={styles.pageNumber}>{pageNumber}</Text>

            <TouchableOpacity onPress={pageIncrement}>
                <AntDesign name="caretright" size={30} color="#ef5350" />
            </TouchableOpacity>
        </View>
    )
}

export default PageChange