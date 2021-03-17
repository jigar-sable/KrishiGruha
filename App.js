import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import loginScreen from './screens/loginScreen';
import registerScreen from './screens/registerScreen';
import homeScreen from './screens/homeScreen';
import sellScreen from './screens/sellScreen';
import buyScreen from './screens/buyScreen';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          animationEnabled:false,
          headerTitleAlign:'center',
          headerStyle:{
            backgroundColor:'green',
            height:87
          },
          headerTintColor:'white'
        }}>
        <Stack.Screen name="login" component={loginScreen} options={{title:'Krishi Gruha'}}/>
        <Stack.Screen name="register" component={registerScreen} options={{title:'Krishi Gruha'}}/>
        <Stack.Screen name="home" component={homeScreen} options={{title:'Krishi Gruha'}}/>
        <Stack.Screen name="sell" component={sellScreen} options={{title:'Krishi Gruha '}}/> 
        <Stack.Screen name="buy" component={buyScreen} options={{title:'Krishi Gruha'}}/>  
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
