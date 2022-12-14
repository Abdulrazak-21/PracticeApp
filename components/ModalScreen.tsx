import React, { useState } from "react";
import { Button, Text, View, Modal, StyleSheet, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import { SCREEN_WIDTH } from './API_Screen';
const ModalScreen = () => {
    const [ModalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.modalView}>
            <Modal visible={ModalVisible} animationType="slide" transparent={true}>
                <View style={styles.modalView1}>
                    <Text style={{ marginBottom: 5, color: '#000' }}>This is Modal Screen</Text>
                    <Image style={{ height: 50, width: 50, }} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                    <Button title='Close Modal' onPress={() => setModalVisible(false)} />

                </View>
            </Modal>
            <View style={{ alignContent: 'center', alignItems: 'center' }}>
                <Button title='Open Modal' onPress={() => setModalVisible(true)} />
                <Feather style={{ marginTop: 5, }} name='bell' size={30} color='#000' onPress={() => setModalVisible(true)} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ModalItems: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalView: {
        height: SCREEN_WIDTH / 2.5,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalView1: {
        margin: 20,
        backgroundColor: "white",
        height: SCREEN_WIDTH / 2.5,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        alignContent: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

})

export default ModalScreen;



{/* <View>
<Modal visible={ModalVisible} transparent={false} animationType="slide">
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text >Hello this is Modal Screen</Text>
        <Text style={{ marginBottom: 10 }} >Hello this is Modal Screen 2</Text>
        <Button title="Close Modal" onPress={() => setModalVisible(false)} />
    </View>
</Modal>
<View style={{ alignItems: 'center' }}>
    <Button title="Open Modal" onPress={() => setModalVisible(true)} />
</View>
</View> */}