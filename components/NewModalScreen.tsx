import { StyleSheet, Text, View, Button, Image, Modal } from 'react-native'
import React, { useState } from 'react'

const NewModalScreen = () => {
    const img_path = '../assets/images/nature.jpeg'

    const [ModalVisible, setModalVisible] = useState(false);
    console.log(img_path)
    return (
        <View>
            <Modal visible={ModalVisible} animationType='slide' transparent={true} >
                <View>
                    <Text>This is Modal Screen</Text>
                    <Button title='Close Modal' onPress={() => setModalVisible(false)} />
                    <Image source={require(img_path)} />
                </View>
            </Modal>
            <View>
                <Button title='Open Modal' onPress={() => setModalVisible(true)} />
            </View>
        </View>
    )
}

export default NewModalScreen;

const styles = StyleSheet.create({})