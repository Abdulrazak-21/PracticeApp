import { StyleSheet, Text, View, InteractionManager } from 'react-native';
import React from 'react'

const Email_Info = ({ route }) => {
    // //const { route } = props;
    const { params } = route;
    const { item1 } = params;
    const { title, body } = item1;
    return (
        <View style={{ margin: 15, }}>
            <Text style={{ fontSize: 25, color: '#000' }}>{title}</Text>
            <Text style={{ fontSize: 15, color: '#000' }}>{body}</Text>
            <Text style={{ fontSize: 15, color: '#000' }}>{item1.id}</Text>

        </View>
    )
}

export default Email_Info

const styles = StyleSheet.create({})