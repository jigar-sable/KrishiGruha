import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import loginScreen from './screens/loginScreen'
import registerScreen from './screens/registerScreen'
import homeScreen from './screens/homeScreen'

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerTitleAlign:'center',
          headerStyle:{
            backgroundColor:'green'
          },
          headerTintColor:'white'
        }}>
        <Stack.Screen name="login" component={loginScreen} options={{title:'KrishiGruha Login'}}/>
        <Stack.Screen name="register" component={registerScreen} options={{title:'KrishiGruha Register'}}/>
        <Stack.Screen name="home" component={homeScreen} options={{title:'KrishiGruha'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
