import * as React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from "react-native-login-screen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistrarScreen from "./src/screens/RegistrarScreen";
import HomeScreen from "./src/screens/HomeScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
      // Stack Screen es cada pantalla la primera de arriba a abajo sera lo q ves primero
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Universidad Autonoma de Guadalajara" component={HomeScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="RegistrarScreen" component={RegistrarScreen} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;

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
    buttonRegistrarse: {
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
