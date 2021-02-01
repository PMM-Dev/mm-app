import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screen/Profile";
import DatalistScreen from "../screen/DatalistScreen";
import RandomboxScreen from "../screen/RandomboxScreen";
import MapScreen from "../screen/MapScreen";

const Main = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Main.Navigator>
        <Main.Screen name="Profile" component={Profile} />
        <Main.Screen name="DatalistScreen" component={DatalistScreen} />
        <Main.Screen name="MapScreen" component={MapScreen} />
        <Main.Screen name="RandomboxScreen" component={RandomboxScreen} />
      </Main.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
