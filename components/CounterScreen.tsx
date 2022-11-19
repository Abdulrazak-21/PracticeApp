import { StyleSheet, Text, View, Button, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'

const CounterScreen = () => {
    const [counter, setCounter] = useState(0)
    if (counter < 0) {
        setCounter(0);
        Alert.alert("Count cannot be a Negative number")
    }
    return (
        <View style={styles.Container}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => setCounter(counter + 1)} >
                <View style={styles.ButtonStyle}>
                    <Text style={{ fontSize: 70, color: '#0000ff' }}>+</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.5} onPress={() => setCounter(counter - 1)}>
                <View style={styles.ButtonStyle}>
                    <Text style={{ fontSize: 70, color: '#0000ff', }}>-</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => setCounter(0)}>
                <View style={styles.ButtonStyle}>
                    <Text style={{ fontSize: 35, color: '#0000ff', }}>Reset</Text>
                </View>
            </TouchableOpacity>
            <View>
                <Text style={{ fontSize: 70, color: '#000', }}>{counter}</Text>
            </View >


        </View >
    )
}

export default CounterScreen;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //flexDirection: 'row'
    },
    ButtonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        height: 100,
        width: 100,
        margin: 10,
        borderWidth: 2,
        borderColor: '#ff0000',
    },

})