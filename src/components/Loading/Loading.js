import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const Loading = () => {
    return (
        <LottieView source={require("../../../assets/loading.json")} style={{ width: "50% ", height: "50%" }} autoPlay loop />
    )
}

export default Loading