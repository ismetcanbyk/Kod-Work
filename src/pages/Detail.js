import { View, Text } from 'react-native'
import React from 'react'
import useFetch from '../hooks/useFetch'
import Loading from '../components/Loading'
import DetailHeader from '../components/DetailHeader/DetailHeader'

const Detail = ({ route, navigation }) => {
    const { id } = route.params

    const { data, error, loading, fetchData } = useFetch(`${process.env.EXPO_PUBLIC_API_URL}/${id}`)



    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Text>{error}</Text>
    }


    return (
        <View>
            <DetailHeader data={data} />
        </View>
    )
}

export default Detail