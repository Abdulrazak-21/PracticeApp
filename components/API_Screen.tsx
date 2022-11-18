import { StyleSheet, Text, View, FlatList, Image, ActivityIndicator, Button } from 'react-native'
import React from 'react'
import UseAPIEmails from '../Hooks/API_Emails'
import ModalScreen from './ModalScreen'
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
    if (error) {
        console.log(error)
    }
    if (isloading) {
        return (
            <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )
    }
    return (
        <View>
            <Text>API_Screen</Text>
            <ModalScreen />
            {/* <Text>{data}</Text> */}
            {/* <UseAPIEmails /> */}
            {/* <Text>{data.title}</Text>
            <Text>{data.body}</Text> */}

            <FlatList
                data={data.slice(0, 24)}
                renderItem={renderItemsAPI}
                keyExtractor={item => item.id}
                // horizontal={true}
                numColumns={3}
            />

        </View>
    )
}

export default API_Screen

