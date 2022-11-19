import { StyleSheet, Text, View, Alert, FlatList, InteractionManager, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import UseAPISpotify from '../Hooks/API_Spotify'
import UseAPIEmails from '../Hooks/API_Emails'
const Spotify = ({ navigation }) => {
    const { data } = UseAPISpotify();
    const { data1 } = UseAPIEmails();
    const renderTrendingScreen = ({ item }) => {
        return (
            <View style={styles.TrendingData}>
                <Image style={{ height: 200, width: 150, borderRadius: 10, }} source={{ uri: item.url }} />
                <Text style={{ textAlign: 'center', color: '#000', fontSize: 15 }}>{item.id}</Text>
            </View>
        )
    }
    const renderEmailScreen = ({ item }) => {
        return (
            <View >
                <View style={styles.EmailWrapper}>
                    <TouchableOpacity onPress={() => navigation.navigate('EmailInfo_Screen', { item1: item })}>
                        <Text style={{ fontSize: 20, color: '#000' }}>{item.title}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.Container}>
            {/* Header For APP */}
            <View style={styles.HeaderContainer}>
                <View >
                    <Text style={styles.HeaderText}>My App</Text>
                </View>
                <View style={styles.HeaderIconWrapper}>
                    <Feather style={styles.HeaderIcons} onPress={() => (Alert.alert("Header Is pressed"))} name='chrome' color='#000' size={40} />
                    <Feather style={styles.HeaderIcons} name='bell' color='#000' size={40} />
                </View>
            </View>

            {/* Trending Screen */}
            <View>
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#000', margin: 5, }}>Trending</Text>

                <View>
                    <FlatList
                        data={data.slice(0, 10)}
                        renderItem={renderTrendingScreen}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>

            {/* Listen Now */}
            <View>
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#000', margin: 5, }}>Information</Text>
                <FlatList
                    data={data1.slice(0, 50)}
                    renderItem={renderEmailScreen}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    )
}

export default Spotify

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    HeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 70,
        borderWidth: 1,
        alignItems: 'center',
        padding: 10,
        margin: 5,
        borderRadius: 10,

    },
    HeaderText: {
        fontSize: 30,
        color: '#000',
    },
    HeaderIconWrapper: {
        justifyContent: 'space-evenly',
        alignContent: 'space-between',
        flexDirection: 'row',
    },
    HeaderIcons: {
        justifyContent: 'space-between',
        paddingRight: 10,
    },
    TrendingData: {
        margin: 3,
    },
    EmailWrapper: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        backgroundColor: '#fff',
    },
})