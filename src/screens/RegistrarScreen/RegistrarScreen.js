import * as React from 'react';
import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from "react-native-login-screen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RegistrarScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Registrar Screen</Text>
        </View>
    )
}

export default RegistrarScreen