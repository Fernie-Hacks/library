import * as React from 'react';
import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import LoginScreen from "react-native-login-screen";

export default function HomeScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{marginTop: 20,}} source={require('../../../assets/uag.png')} />
            <View style={styles.containerButtons}>
                <Pressable style={styles.buttonLogIn} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.text}>Login</Text>
                </Pressable>
                <Pressable style={styles.buttonRegistrar} onPress={() => navigation.navigate('Registrar')}>
                    <Text style={styles.text}>Registrar</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerButtons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    buttonLogIn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%',
        marginTop: 20,
        marginRight: 10,
        height: 40,
        backgroundColor: 'blue',
    },
    buttonRegistrar: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%',
        marginTop: 20,
        height: 40,
        backgroundColor: 'red',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});