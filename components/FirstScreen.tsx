import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const FirstScreen = ({ navigation, title }) => {
    return (
        <View>
            <Text style={{ textAlign: 'center', margin: 10 }}>{title}</Text>
            <Button title='Go to SecondScreen' onPress={navigation} />
        </View>
    )
}

export default FirstScreen

const styles = StyleSheet.create({})