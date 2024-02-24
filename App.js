import * as React from "react";
import { useCallback } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// screens
import Home from "./src/screens/Home";
import Welcome from "./src/screens/onboarding/Welcome";

// prevents splash screen from auto-hiding while fonts are loaded
SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

export default function App() {
  // load fonts
  const [fontsLoaded, fontError] = useFonts({
    PlayfairDisplay: require("./src/assets/fonts/PlayfairDisplay-Regular.ttf"),
    PlayfairDisplayItalic: require("./src/assets/fonts/PlayfairDisplay-Italic.ttf"),
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
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={Welcome} options={{ title: "Welcome" }} />
          <Stack.Screen name="Home" component={Home} options={{ title: "Home" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
