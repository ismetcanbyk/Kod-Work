import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { FlashList } from "@shopify/flash-list";
import useFetch from '../hooks/useFetch'
import Loading from '../components/Loading'
import PageChange from '../components/PageChange';

const Jobs = () => {
    const [pageNumber, setPageNumber] = useState(1)

    const { data, error, loading, fetchData } = useFetch(`${process.env.EXPO_PUBLIC_API_URL}page=${pageNumber}`)

    useEffect(() => {
        fetchData(`${process.env.EXPO_PUBLIC_API_URL}page=${pageNumber}`);
    }, [pageNumber])



    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Text>{error}</Text>
    }

    const renderItem = ({ item }) => (
        <Card
            item={item}
        />
    )

    const pageChangeItem = () => {
        return (
            <PageChange pageNumber={pageNumber} setPageNumber={setPageNumber} />
        )
    }



    return (
        <View style={styles.container}>
            <FlashList
                data={data.results}
                renderItem={renderItem}
                estimatedItemSize={200}
                ListFooterComponent={pageChangeItem}
            />


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    }
})

export default Jobs