import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react'

const HomeScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [mobileNo, setmobileNo] = useState('')
    console.log(setName)
    return (
        <View>
            <View>
                <Text style={{ textAlign: 'center', margin: 10, }}>HomeScreen</Text>
                <View style={{ width: '50%', alignSelf: 'center', }}>
                    <Button color="#000" title='Go to First Screen' onPress={() => navigation.navigate('FirstScreen')} />
                </View>
            </View>
            <TextInput
                style={styles.InputStyle}
                placeholder='Enter Your Name'
                onChangeText={setName}
            />
            <Text>name :{name}</Text>
            <TextInput
                style={styles.InputStyle}
                placeholder='Enter the Mobile Number'
                onChangeText={setmobileNo}
                keyboardType='numeric'
            />

            <Text>Mobile number : {mobileNo}</Text>

            <View style={styles.ImageWrapper}>
                <Image style={styles.Image} source={require('../assets/images/image.jpg')} />
                <TouchableOpacity onPress={() => Alert.alert('Submit')}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.SubmitWrapper}>
                <TouchableOpacity onPress={() => Alert.alert("Sbu")}>
                    <Text style={{ textAlign: 'center', fontWeight: '600', color: '#000', }}>Click Here to submit</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.SubmitWrapper1}>
                {/* <TouchableOpacity onPress={() => Alert.alert("Sbu")}>
                    <Text>Click Here to submit</Text>
                </TouchableOpacity> */}
                <Button title='Hello' />
            </View>
        </View >
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    InputStyle: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        margin: 10,
        padding: 10,
    },
    Image: {
        height: 50,
        width: 50,
        borderRadius: 10,
    },
    ImageWrapper: {
        alignItems: 'center',
    },
    SubmitWrapper: {
        width: '50%',
        height: 50,
        margin: 10,
        backgroundColor: '#6699ff',
        borderRadius: 10,
        justifyContent: 'center',
        alignSelf: 'center',

    },
    SubmitWrapper1: {
        alignSelf: 'center',
        width: '30%'
    },

})