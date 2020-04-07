import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LinearGradient } from 'expo-linear-gradient';
import TabBarIcon from "../components/TabBarIcon";

import Colors from "../constants/Colors";

import SearchScreen from "../screens/SearchScreen";
import AllHotelsScreen from "../screens/AllHotelsScreen"

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Search";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({
    headerTitle: getHeaderTitle(route),
    headerBackground:()=>(
        <LinearGradient
            colors={["#B84BFF","#72B5FE"]}
            style={{ flex: 1 }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
        />
    ),
    headerTitleStyle: { color: '#fff' },
  });

  return (
    <BottomTab.Navigator tabBarOptions={{
          activeTintColor: Colors.tabIconSelected,
          inactiveTintColor: Colors.tabIconDefault,
          
        }} initialRouteName={INITIAL_ROUTE_NAME}

        >
      {/*<BottomTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Get Started',
                    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="md-code-working"/>,
                }}
            />*/}
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: "Trouver un hotel",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-search" />
          ),
          
        }}
      />
      <BottomTab.Screen
        name="AllHotels"
        component={AllHotelsScreen}
        options={{
          title: "Maroc, Agadir",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-book" />
          ),
          
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Search":
      return "Trouver un hotel";
  }
}
