import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, ActivityIndicator, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import UseAPIAirlines from '../Hooks/API_TODO';
import NewModalScreen from './NewModalScreen'
import { SCREEN_WIDTH } from './Spotify';


const NewScreen = ({ navigation }) => {
    // const { params } = route
    // const { item } = params;
    // const { url } = item;
    // const img_path = '../assets/images/nature.jpeg'
    const [search, setSearch] = useState('')
    const { data, isloding, error } = UseAPIAirlines();





    const renderTodoList = ({ item }) => {
        if (item.id == search)
            return (
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around', marginTop: 10, }}>
                    <Image style={{ height: 100, width: 100, borderRadius: 10, borderWidth: 1, borderColor: '#000', resizeMode: 'contain' }} source={{ uri: item.logo }} />
                    <Text style={{ textAlign: 'center', alignSelf: 'center', color: '#000' }}>{item.country}{'. '}{item.name}</Text>

                </View>
            )
        else {
            <View>
                <Text>No result</Text>
            </View>
        }
    }
    if (isloding) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size="large" color="#00ef" />
            </View>
        )
    }
    if (error) {
        console.log(error)
    }


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* <Image style={{ height: 100, width: 100, }} source={require(img_path)} />
            <NewModalScreen /> */}
            {/* <Text>New Screen</Text>
            <Text>{url}</Text>
            <Image style={{ height: SCREEN_WIDTH / 2, width: SCREEN_WIDTH / 2, borderWidth: 10, borderRadius: 10, borderColor: '#000' }} source={{ uri: url }} />
            <Image style={{ height: SCREEN_WIDTH / 2, width: SCREEN_WIDTH / 2, borderWidth: 10, borderRadius: 10, borderColor: '#000' }} source={{ uri: 'https://www.freepnglogos.com/uploads/nature-png/nature-grass-14.png' }} /> */}
            <TextInput style={{
                height: 40,
                width: '80%',
                margin: 12,
                borderWidth: 1,
                padding: 10,
            }}
                placeholder='Enter id'
                onChangeText={setSearch}
            //onChangeText={(text) => searchFilter(text)}
            //value={input}
            //keyboardType='numeric'

            />
            <Button title='Search' onPress={() => (navigation.navigate('API_INFO_SCREEN'))} />
            <FlatList
                data={data.slice(0, 100)}
                renderItem={renderTodoList}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default NewScreen

const styles = StyleSheet.create({})