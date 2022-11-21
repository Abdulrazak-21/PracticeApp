import { StyleSheet, Text, View, FlatList, Image, ActivityIndicator, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import ModalScreen from './ModalScreen'
import UseAPISpotify from '../Hooks/API_Spotify'

export const SCREEN_WIDTH = Dimensions.get('window').width
export const SCREEN_HEIGHT = Dimensions.get('window').height


const API_Screen = () => {
    const { data, isloading, error } = UseAPISpotify();
    const renderItemsAPI = ({ item }) => {
        return (
            <View style={{}}>
                {/* <Text style={{ fontSize: 25, }}>{item.id}</Text> */}
                {/* <Text style={{ fontSize: 10, }}>{item.url}</Text> */}
                <Image style={{ height: SCREEN_WIDTH / 3.5, width: SCREEN_WIDTH / 3.5, margin: 2, }} source={{ uri: item.url }} />
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
            <Text style={{ color: '#000' }}>API_Screen</Text>
            <ModalScreen />
            {/* <Text>{data}</Text> */}
            {/* <UseAPIEmails /> */}
            {/* <Text>{data.title}</Text>
            <Text>{data.body}</Text> */}
            <View style={{ borderWidth: 1, padding: 5, height: SCREEN_WIDTH * 1.2, width: SCREEN_WIDTH, alignItems: 'center', justifyContent: 'center', bottom: 100, top: 20, }}>
                <FlatList
                    data={data.slice(0, 30)}
                    renderItem={renderItemsAPI}
                    keyExtractor={item => item.id}
                    // horizontal={true}
                    numColumns={3}
                />
            </View>

        </View>
    )
}

export default API_Screen

