import { StyleSheet, Text, View, FlatList, TextInput, Image, Button, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'


const HomeScreen = ({ navigation }) => {
    const [search, setSearch] = useState('')

    return (
        <View style={{ alignContent: 'center', justifyContent: 'center', flex: 1, }}>

            <View>
                <TextInput
                    style={{ borderWidth: 2, margin: 10, borderRadius: 10, }}
                    placeholder='Enter id'
                    onChangeText={(text) => { setSearch(text) }}
                />
            </View>
            <View style={{ alignItems: 'center' }}>
                <Button title='Search' onPress={() => navigation.navigate('Reducer_InfoScreen', { searchItem: search })} />
            </View>
        </View>
    )
}

export default HomeScreen;
