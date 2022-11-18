import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import UseAPIEmails from '../Hooks/API_Emails'

const API_Screen = () => {
    const { data, isloading, error } = UseAPIEmails();
    const renderItemsAPI = ({ item }) => {
        return (
            <View>
                {/* <Text style={{ fontSize: 25, }}>{item.id}</Text> */}
                {/* <Text style={{ fontSize: 10, }}>{item.url}</Text> */}
                <Image style={{ height: 140, width: 140, margin: 2, }} source={{ uri: item.url }} />
                {/* <Image style={{ height: 25, width: 25 }} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} /> */}

            </View>
        )
    }
    if (isloading) {
        return <Text>It is Loading</Text>
    }
    return (
        <View>
            <Text>API_Screen</Text>
            {/* <Text>{data}</Text> */}
            {/* <UseAPIEmails /> */}
            {/* <Text>{data.title}</Text>
            <Text>{data.body}</Text> */}

            <FlatList
                data={data.slice(0, 25)}
                renderItem={renderItemsAPI}
                keyExtractor={item => item.id}
                // horizontal={true}
                numColumns={3}
            />

        </View>
    )
}

export default API_Screen

