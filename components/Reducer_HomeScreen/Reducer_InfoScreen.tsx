import { StyleSheet, Text, View, FlatList, ActivityIndicator, Image } from 'react-native'
import React from 'react'
import fetchDatafromAPI from '../../Hooks/Reducer_Hook/UseAPI';

const Reducer_InfoScreen = ({ route }) => {
    const { params } = route;
    const { searchItem } = params;
    console.log(searchItem)
    const { state } = fetchDatafromAPI();
    const renderItemAPI = ({ item }) => {
        if (item.id == searchItem) {
            return (
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10, }}>
                    <Text style={{ textAlign: 'center', color: '#000', alignSelf: 'center' }}>{item.id}</Text>
                    <Image style={{ height: 100, width: 100 }} source={{ uri: item.url }} />
                </View>
            )
        }
    }


    if (state.loading) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>

        )
    }
    if (state.error) {
        console.log(state.error)
    }
    return (
        <View>
            <Text>Reducer_InfoScreen</Text>
            <View style={{ borderWidth: 2, height: '80%', width: '80%', alignSelf: 'center', margin: 10, }}>
                <FlatList
                    data={state.post.slice(0, 100)}
                    renderItem={renderItemAPI}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

export default Reducer_InfoScreen

const styles = StyleSheet.create({})