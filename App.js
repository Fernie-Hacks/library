import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from "react-native-login-screen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistrarScreen from "./src/screens/RegistrarScreen";
import HomeScreen from "./src/screens/HomeScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
      // Contenidor de Navegacion
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Universidad Autonoma de Guadalajara" component={HomeScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Registrar" component={RegistrarScreen} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
