import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screen/Profile";
import Datalist from "../screen/Datalist";

const Main = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Main.Navigator>
        {/* <Main.Screen name="Profile" component={Profile} /> */}
        <Main.Screen name="Datalist" component={Datalist} />
      </Main.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
