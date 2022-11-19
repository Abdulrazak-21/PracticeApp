import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../HomeScreen";
import FirstScreen from "../FirstScreen";
import SecondScreen from "../SecondScreen";
import API_Screen from "../API_Screen";
import CounterScreen from "../CounterScreen";
import Spotify from "../Spotify";
import Email_Info from "../Email_Info";
const Stack = createNativeStackNavigator();

const NavigationScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="FirstScreen" component={FirstScreen} options={{ headerShown: false }} />
                <Stack.Screen name="SecondScreen" component={SecondScreen} options={{ headerShown: false }} />
                <Stack.Screen name="API_Screen" component={API_Screen} options={{ headerShown: false }} />
                <Stack.Screen name="Counter_Screen" component={CounterScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Spotify_Screen" component={Spotify} options={{ headerShown: false }} />
                <Stack.Screen name="EmailInfo_Screen" component={Email_Info} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavigationScreen;