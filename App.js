import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Pantalla de bienvenida
function HomeScreen({ navigation }) {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={{marginTop: 20,}} source={require('./assets/uag.png')} />
          <View style={styles.containerButtons}>
              <Pressable style={styles.buttonLogIn} onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.text}>Login</Text>
              </Pressable>
              <Pressable style={styles.buttonRegistrarse} onPress={() => navigation.navigate('Registrarse')}>
                  <Text style={styles.text}>Registrarse</Text>
              </Pressable>
          </View>
      </View>
  );
}

// Para login
function LoginScreen() {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen</Text>
      </View>
  );
}

// Para Registrarse
function RegistrarseScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Registrar Screen</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
      // Stack Screen es cada pantalla la primera de arriba a abajo sera lo q ves primero
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Universidad Autonoma de Guadalajara" component={HomeScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Registrarse" component={RegistrarseScreen} />
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
