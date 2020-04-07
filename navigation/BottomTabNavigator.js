import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
import TabBarIcon from "../components/TabBarIcon";

import Colors from "../constants/Colors";

import SearchScreen from "../screens/SearchScreen";
import AllHotelsScreen from "../screens/AllHotelsScreen";
import { NavigationRedux } from "../data/connect";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Search";

function BottomTabNavigator({ navigation, route,...props }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({
    headerTitle: getHeaderTitle(route,props.pageTitles),
    headerBackground: () => (
      <LinearGradient
        colors={["#B84BFF", "#72B5FE"]}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      />
    ),
    headerTitleStyle: { color: "#fff" },
  });
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.tabIconSelected,
        inactiveTintColor: Colors.tabIconDefault,
      }}
      initialRouteName={INITIAL_ROUTE_NAME}
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
          title: "Trouver un hôtel",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-search" />
          ),
        }}
      />
      <BottomTab.Screen
        name="AllHotels"
        component={AllHotelsScreen}
        options={{
          title: "Les hôtels",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-book" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route,pageTitles) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  return pageTitles[routeName] || routeName
  /*switch (routeName) {
    case "Search":
      return "Trouver un hotel";
    case "AllHotels":
      return "Tous les hôtel";
  }*/
}
export default NavigationRedux(BottomTabNavigator)