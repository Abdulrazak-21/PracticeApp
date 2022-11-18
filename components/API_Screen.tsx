import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import UseAPIEmails from '../Hooks/API_Emails'

const API_Screen = () => {
    const { data } = UseAPIEmails();
    // const renderItem = ({ item }) => {
    //     <View>
    //         <Text>{id}</Text>
    //     </View>
    // }
    return (
        <View>
            <Text>API_Screen</Text>
            {/* <Text>{data}</Text> */}
            {/* <UseAPIEmails /> */}
            <Text>{data.title}</Text>
            <Text>{data.body}</Text>
            {/* <FlatList
                data={data.slice(10)}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            /> */}

        </View>
    )
}

export default API_Screen

const styles = StyleSheet.create({})