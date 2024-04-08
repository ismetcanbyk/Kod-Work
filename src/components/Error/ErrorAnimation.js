import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const ErrorAnimation = () => {
    return (
        <LottieView source={require("../../../assets/error2.json")} style={{ width: "100% ", height: "100%" }} />
    )
}

export default ErrorAnimation