import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import UseAPITodo from '../Hooks/API_TODO';


const InfoScreen = ({ route }) => {
    const { params } = route;
    const { value } = params;
    const { data, isloding, error } = UseAPITodo();

    //const { setInput } = item


    return (
        <ScrollView>
            <View>

            </View>
        </ScrollView>
    )
}

export default InfoScreen

const styles = StyleSheet.create({})