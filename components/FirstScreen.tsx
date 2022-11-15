import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const FirstScreen = ({ navigation }) => {
    return (
        <View>
            <Text>FirstScreen</Text>
            <Button title='Go to SecondScreen' onPress={() => navigation.navigate('SecondScreen')} />
        </View>
    )
}

export default FirstScreen

const styles = StyleSheet.create({})