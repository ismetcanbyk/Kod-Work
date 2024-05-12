import { View, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import useFetch from '../hooks/useFetch'
import Loading from '../components/Loading'
import DetailHeader from '../components/DetailHeader/DetailHeader'
import RenderHTML from 'react-native-render-html'
import { ScrollView } from 'react-native-gesture-handler'
import DetailFooter from '../components/DetailFooter'
import styles from './styles/Detail.style'

const Detail = ({ route, navigation }) => {
    const { id } = route.params
    const width = useWindowDimensions().width
    const { data, error, loading } = useFetch(`${process.env.EXPO_PUBLIC_API_URL}/${id}`)



    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Text>{error}</Text>
    }

    const source = {
        html: data.contents,
    }


    return (
        <View style={styles.container}>
            <ScrollView >
                <DetailHeader data={data} navigation={navigation} />
                <View style={styles.renderHtml}>
                    <RenderHTML source={source} contentWidth={width} />
                </View>
            </ScrollView>
            <View style={styles.footer}>

                <DetailFooter data={data} navigation={navigation} />
            </View>
        </View>
    )
}



export default Detail