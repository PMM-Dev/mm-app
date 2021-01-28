import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screen/Profile";

const Main = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Main.Navigator>
        <Main.Screen name="Profile" component={Profile} />
      </Main.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
