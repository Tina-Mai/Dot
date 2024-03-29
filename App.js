import * as React from 'react';
import { useCallback } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// screens
import Welcome from './src/screens/Welcome';
import Authentication from './src/screens/SignUp/Authentication';
import SignUp2 from './src/screens/SignUp/SignUp2';
import SignUp3 from './src/screens/SignUp/SignUp3';
import SignUp4 from './src/screens/SignUp/SignUp4';
import Home from './src/screens/Home';
import Friends from './src/screens/Friends';
import Settings from './src/screens/Settings';

// prevents splash screen from auto-hiding while fonts are loaded
SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

export default function App() {
    // load fonts
    const [fontsLoaded, fontError] = useFonts({
        PlayfairDisplay: require('./src/assets/fonts/PlayfairDisplay-Regular.ttf'),
        PlayfairDisplayItalic: require('./src/assets/fonts/PlayfairDisplay-Italic.ttf'),
    });

    // after the custom fonts have loaded, we can hide the splash screen and display the app screen
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
                    <Stack.Screen name='Welcome' component={Welcome} options={{ title: 'Welcome' }} />

                    {/* onboarding screens */}
                    <Stack.Screen name='Authentication' component={Authentication} options={{ title: 'Phone Number & Verification' }} />
                    <Stack.Screen name='SignUp2' component={SignUp2} options={{ title: 'Sign Up: Verification' }} />
                    <Stack.Screen name='SignUp3' component={SignUp3} options={{ title: 'Sign Up: Name' }} />
                    <Stack.Screen name='SignUp4' component={SignUp4} options={{ title: 'Sign Up: Profile Pic' }} />

                    <Stack.Screen name='Home' component={Home} options={{ title: 'Home' }} />
                    <Stack.Screen name='Friends' component={Friends} options={{ title: 'Friends' }} />
                    <Stack.Screen name='Settings' component={Settings} options={{ title: 'Settings' }} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}
