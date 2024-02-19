import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './src/screens/Home'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>

        {/* <Stack.Screen name='Welcome' component={WelcomeScreen} options={{ title: 'Welcome' }} /> */}
        <Stack.Screen name='Home' component={Home} options={{ title: 'Home' }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};
