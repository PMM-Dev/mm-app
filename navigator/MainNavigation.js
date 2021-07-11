import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

import HomeNavigator from "./HomeNavigator";
import Randombox from "../screen/Randombox";
import Mapping from "../screen/Mapping";
import Theme from "../style/Theme";
import SettingNavigator from "./SettingNavigator";

const BottomTab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        tabBarOptions={{
          style: { height: 90, paddingBottom: 5, paddingTop: 3 },
          labelStyle: { fontSize: 13 },
          activeTintColor: Theme.hlColor,
        }}
      >
        <BottomTab.Screen
          name="HomeNavigator"
          component={HomeNavigator}
          options={{
            title: "홈",
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={require("../assets/NavigatorIcon/home.png")}
                  style={{ width: 60, height: 60 }}
                />
              );
            },
          }}
        />
        <BottomTab.Screen
          name="Mapping"
          component={Mapping}
          options={{
            title: "위치",
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={require("../assets/NavigatorIcon/map.png")}
                  style={{ width: 60, height: 60 }}
                />
              );
            },
          }}
        />
        <BottomTab.Screen
          name="Theme"
          component={Randombox}
          options={{
            title: "테마",
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={require("../assets/NavigatorIcon/theme.png")}
                  style={{ width: 60, height: 60 }}
                />
              );
            },
          }}
        />
        <BottomTab.Screen
          name="Randombox"
          component={Randombox}
          options={{
            title: "뽑기",
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={require("../assets/NavigatorIcon/game.png")}
                  style={{ width: 60, height: 60 }}
                />
              );
            },
          }}
        />
        <BottomTab.Screen
          name="SettingNavigator"
          component={SettingNavigator}
          options={{
            title: "설정",
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={require("../assets/NavigatorIcon/setting.png")}
                  style={{ width: 60, height: 60 }}
                />
              );
            },
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
