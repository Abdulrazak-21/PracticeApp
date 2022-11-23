import { StyleSheet, Text, View, FlatList, TextInput, Image, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import fetchDatafromAPI from '../hooks/UseAPI'
// const HomeScreen = () => {

//     const { data, loading, error } = getDataFromAPI();
//     const [search, setSearch] = useState('')

//     if (loading) {
//         return (
//             <View><Text>loading....</Text></View>
//         )
//     }
//     if (error) {
//         console.log(error)
//     }

//     const renderItemAPI = ({ item }) => {
//         return (
//             <View style={{ alignContent: 'center', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly', margin: 10, }}>
//                 <Text>{item.id}</Text>
//                 <Image style={{ height: 100, width: 100 }} source={{ uri: item.url }} />
//             </View>
//         )
//     }
//     return (
//         <View>
//             <View>
//                 <TextInput style={{ borderWidth: 2, padding: 10, margin: 10, borderRadius: 10, }}
//                     placeholder='Enter'
//                     onChangeText={(search) => { setSearch(search) }}
//                 />
//                 <View style={{ height: '80%', width: '80%', alignSelf: 'center', margin: 10, borderWidth: 2, }}>
//                     <FlatList
//                         data={data.slice(0, 10)}
//                         renderItem={renderItemAPI}
//                         keyExtractor={item => item.id}
//                         showsVerticalScrollIndicator={false}
//                     />
//                 </View>
//             </View>
//         </View>
//     )
// }

// export default HomeScreen;

const HomeScreen = () => {
    const { state } = fetchDatafromAPI();
    const [search, setSearch] = useState('')
    //console.log(search)
    const renderItemAPI = ({ item }) => {
        if (item.title.includes(search)) {
            return (
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10, }}>
                    <Text style={{ textAlign: 'center', color: '#000', alignSelf: 'center' }}>{item.id}</Text>
                    <Image style={{ height: 100, width: 100 }} source={{ uri: item.url }} />
                </View>
            )
        }
    }
    if (state.loading) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>

        )
    }
    if (state.error) {
        console.log(state.post.error)
    }
    return (
        <View>

            <View>
                <TextInput
                    style={{ borderWidth: 2, margin: 10, borderRadius: 10, }}
                    placeholder='Enter'
                    onChangeText={(text) => { setSearch(text) }}
                />
            </View>
            <View style={{ borderWidth: 2, height: '80%', width: '80%', alignSelf: 'center' }}>
                <FlatList
                    data={state.post.slice(0, 100)}
                    renderItem={renderItemAPI}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

export default HomeScreen;
