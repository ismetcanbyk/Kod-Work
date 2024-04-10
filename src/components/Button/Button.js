import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './Button.style'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Button = ({ title, iconName }) => {
    return (
        <View style={styles.container}>


            <TouchableOpacity style={styles.button}>
                <MaterialCommunityIcons name={`${iconName}`} size={24} color="white" />
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>



        </View>
    )
}

export default Button