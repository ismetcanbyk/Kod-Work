import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Card from '../components/Card'
import { FlashList } from "@shopify/flash-list";
import useFetch from '../hooks/useFetch'
import Loading from '../components/Loading'

const Jobs = () => {

    const { data, error, loading } = useFetch(process.env.EXPO_PUBLIC_API_URL + 'page=1')

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <div>Error: {error}</div>
    }


    return (
        <View>
            {/* <FlashList
                data={{}}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        body={item.body}
                        footer={item.footer}
                    />
                )}

                estimatedItemSize={10}
            /> */}

            <Card />
        </View>
    )
}

export default Jobs