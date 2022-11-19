import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./components/HomeScreen";
import FirstScreen from "./components/FirstScreen";
import SecondScreen from "./components/SecondScreen";
import API_Screen from "./components/API_Screen";
import CounterScreen from "./components/CounterScreen";
import Spotify from "./components/Spotify";
import Email_Info from "./components/Email_Info";
const Stack = createNativeStackNavigator();
const App = () => {
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

export default App;