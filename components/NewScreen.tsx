import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import NewModalScreen from './NewModalScreen'
import { SCREEN_WIDTH } from './Spotify';

const NewScreen = () => {
    const img_path = '../assets/images/nature.jpeg'
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* <Image style={{ height: 100, width: 100, }} source={require(img_path)} />
            <NewModalScreen /> */}
            <Text>New Screen</Text>
            <Image style={{ height: SCREEN_WIDTH / 2, width: SCREEN_WIDTH / 2, borderWidth: 10, borderRadius: 10, borderColor: '#000' }} source={{ uri: 'https://www.freepnglogos.com/uploads/nature-png/nature-grass-14.png' }} />
        </View>
    )
}

export default NewScreen

const styles = StyleSheet.create({})