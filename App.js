import * as React from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Button,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { SplashScreen } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BottomTabNavigator from "./navigation/BottomTabNavigator";
import useLinking from "./navigation/useLinking";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SingleHotelScreen from "./screens/SingleHotelScreen";
import RattingScreen from "./screens/RattingScreen";
import SignupScreen from "./screens/SignupScreen";
import { Provider } from "react-redux";
import Store from "./data/store";
import MoonText from "./components/MoonText";
const Stack = createStackNavigator();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);
  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();
        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
          moon: require("./assets/fonts/Moon2.0-Regular.otf"),
          "reenie-beanie": require("./assets/fonts/ReenieBeanie.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setTimeout(() => {
          setLoadingComplete(true);
        }, 1000);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#B84BFF",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={
          {
            fontSize:22,
            color:"white"
          }
        }>S'il vous plaît, attendez</Text>
          
      </View>
    );
  } else {
    return (
      <Provider store={Store}>
        <View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          <NavigationContainer
            ref={containerRef}
            initialState={initialNavigationState}
          >
            <Stack.Navigator>
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="Root"
                component={HomeScreen}
              />
              <Stack.Screen
                name="App"
                options={{
                  headerTintColor: "white",
                }}
                component={BottomTabNavigator}
              />
              <Stack.Screen
                options={{
                  headerTintColor: "white",
                  headerBackground: () => (
                    <LinearGradient
                      colors={["#B84BFF", "#72B5FE"]}
                      style={{ flex: 1 }}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                    />
                  ),
                  headerTitleStyle: { color: "#fff" },
                }}
                name="Login"
                component={LoginScreen}
              />
              <Stack.Screen
                options={{
                  headerTintColor: "white",
                  headerBackground: () => (
                    <LinearGradient
                      colors={["#B84BFF", "#72B5FE"]}
                      style={{ flex: 1 }}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                    />
                  ),
                  headerTitleStyle: { color: "#fff" },
                }}
                name="Hotel"
                component={SingleHotelScreen}
              />
              <Stack.Screen
                options={{
                  headerTintColor: "white",
                  headerBackground: () => (
                    <LinearGradient
                      colors={["#B84BFF", "#72B5FE"]}
                      style={{ flex: 1 }}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                    />
                  ),
                  headerTitleStyle: { color: "#fff" },
                }}
                name="Ratting"
                component={RattingScreen}
              />
              <Stack.Screen
                options={{
                  headerTintColor: "white",
                  headerBackground: () => (
                    <LinearGradient
                      colors={["#B84BFF", "#72B5FE"]}
                      style={{ flex: 1 }}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                    />
                  ),
                  headerTitleStyle: { color: "#fff" },
                }}
                name="Signup"
                component={SignupScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
