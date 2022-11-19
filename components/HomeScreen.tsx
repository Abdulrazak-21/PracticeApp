import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity, Alert, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react'
import FirstScreen from './FirstScreen';
const HomeScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [mobileNo, setmobileNo] = useState('')
    console.log(setName)
    const img = 'https://reactnative.dev/img/tiny_logo.png'
    return (
        <KeyboardAvoidingView>

            <View>
                <View>
                    <Text style={{ textAlign: 'center', margin: 10, }}>HomeScreen</Text>
                    <View style={{ alignItems: 'center', }}>
                        <Button color="#000" title='Go to API Screen' onPress={() => navigation.navigate('API_Screen')} />
                        <Button color="#000" title='Go to Counter Screen' onPress={() => navigation.navigate('Counter_Screen')} />
                    </View>
                </View>

                <TextInput
                    style={styles.InputStyle}
                    placeholder='Enter Your Name'
                    onChangeText={setName}
                />
                <Text style={{ textAlign: 'center' }}>name :{name}</Text>

                <TextInput
                    style={styles.InputStyle}
                    placeholder='Enter the Mobile Number'
                    onChangeText={setmobileNo}
                    keyboardType='numeric'
                />

                <Text style={{ textAlign: 'center', marginBottom: 10, }}>Mobile number : {mobileNo}</Text>

                <View style={styles.ImageWrapper}>
                    <Image style={styles.Image} source={require('../assets/images/image.jpg')} />
                    <TouchableOpacity onPress={() => Alert.alert('Image is pressed')}>
                        <Image style={{ height: 50, width: 50, margin: 10, }} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Alert.alert('Submit Text is Pressed')}>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.SubmitWrapper}>
                    <TouchableOpacity onPress={() => Alert.alert("Submit Button is Pressed")}>
                        <Text style={{ textAlign: 'center', fontWeight: '600', color: '#fff', }}>Click Here to submit</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.SubmitWrapper1}>
                    {/* <TouchableOpacity onPress={() => Alert.alert("Sbu")}>
                    <Text>Click Here to submit</Text>
                </TouchableOpacity> */}
                    <Button title='Hello' onPress={() => Alert.alert('Hello Button is Pressed')} />
                </View >

            </View >
        </KeyboardAvoidingView>

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