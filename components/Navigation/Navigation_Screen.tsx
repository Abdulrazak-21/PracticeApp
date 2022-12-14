import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen1 from "../HomeScreen";
import API_Screen from "../API_Screen";
import CounterScreen from "../CounterScreen";
import Spotify from "../Spotify";
import Email_Info from "../Email_Info";
import NewScreen from "../NewScreen";
import InfoScreen from "../InfoScreen";
import API_Info_Screen from "../API_Info_Screen";
import HomeScreen from "../Reducer_HomeScreen/HomeScreen";
import Reducer_InfoScreen from "../Reducer_HomeScreen/Reducer_InfoScreen";

const Stack = createNativeStackNavigator();

const NavigationScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen1} />
                <Stack.Screen name="API_Screen" component={API_Screen} options={{ headerShown: false }} />
                <Stack.Screen name="Counter_Screen" component={CounterScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Spotify_Screen" component={Spotify} options={{ headerShown: false }} />
                <Stack.Screen name="EmailInfo_Screen" component={Email_Info} options={{ headerShown: false }} />
                <Stack.Screen name="New_Screen" component={NewScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Info_Screen" component={InfoScreen} options={{ headerShown: false }} />
                <Stack.Screen name="API_INFO_SCREEN" component={API_Info_Screen} options={{ headerShown: false }} />
                <Stack.Screen name="Reducer_HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Reducer_InfoScreen" component={Reducer_InfoScreen} options={{ headerShown: false }} />


            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavigationScreen;