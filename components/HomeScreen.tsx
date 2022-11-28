import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity, Alert, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from './API_Screen';
const HomeScreen1 = ({ navigation }) => {
    const [name, setName] = useState('');
    const [mobileNo, setmobileNo] = useState('')
    console.log(setName)
    const img = 'https://reactnative.dev/img/tiny_logo.png'
    return (
        <KeyboardAvoidingView>
            <View>
                <View>
                    <Text style={{ textAlign: 'center', margin: 10, color: '#000' }}>HomeScreen</Text>
                    <View >
                        <View style={styles.ButtonWrapper}>
                            <TouchableOpacity onPress={() => navigation.navigate('API_Screen')}>
                                <Text style={{ textAlign: 'center', fontWeight: '600', color: '#fff', }}>Go to API Screen</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ButtonWrapper}>
                            <TouchableOpacity onPress={() => navigation.navigate('Counter_Screen')}>
                                <Text style={{ textAlign: 'center', fontWeight: '600', color: '#fff', }}>Go to Counter Screen</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ButtonWrapper}>
                            <TouchableOpacity onPress={() => navigation.navigate('Spotify_Screen')}>
                                <Text style={{ textAlign: 'center', fontWeight: '600', color: '#fff', }}>Go to Spotify Screen</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ButtonWrapper}>
                            <TouchableOpacity onPress={() => navigation.navigate('New_Screen')}>
                                <Text style={{ textAlign: 'center', fontWeight: '600', color: '#fff', }}>Go to New Screen</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ButtonWrapper}>
                            <TouchableOpacity onPress={() => navigation.navigate('Reducer_HomeScreen')}>
                                <Text style={{ textAlign: 'center', fontWeight: '600', color: '#fff', }}>Go to Reducer HomeScreen</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

                <TextInput
                    style={styles.InputStyle}
                    placeholder='Enter Your Name'
                    placeholderTextColor='#000'
                    onChangeText={setName}
                />
                <Text style={{ textAlign: 'center', color: '#000' }}>name :{name}</Text>

                <TextInput
                    style={styles.InputStyle}
                    placeholder='Enter the Mobile Number'
                    placeholderTextColor='#000'
                    onChangeText={setmobileNo}
                    keyboardType='numeric'
                />

                <Text style={{ textAlign: 'center', marginBottom: 10, color: '#000' }}>Mobile number : {mobileNo}</Text>

                <View style={styles.ImageWrapper}>
                    <Image style={styles.Image} source={require('../assets/images/image.jpg')} />
                    <TouchableOpacity onPress={() => Alert.alert('Image is pressed')}>
                        <Image style={{ height: 50, width: 50, margin: 10, }} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Alert.alert('Submit Text is Pressed')}>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.ButtonWrapper}>
                    <TouchableOpacity onPress={() => Alert.alert("Submit Button is Pressed")}>
                        <Text style={{ textAlign: 'center', fontWeight: '600', color: '#fff', }}>Click Here to submit</Text>
                    </TouchableOpacity>
                </View>


            </View >
        </KeyboardAvoidingView>

    )
}

export default HomeScreen1

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
    ButtonWrapper: {
        width: SCREEN_WIDTH / 2,
        height: 50,
        margin: 10,
        backgroundColor: '#6699ff',
        borderRadius: 10,
        justifyContent: 'center',
        alignSelf: 'center',

    },

})