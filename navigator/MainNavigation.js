import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Setting from "../screen/Setting";
import HomeNavigator from "./HomeNavigator";
import RandomboxScreen from "../screen/RandomboxScreen";
import MapScreen from "../screen/MapScreen";
import NavIcon from "../components/NavIcon";
import theme from "../style/Theme";

const BottomTab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        tabBarOptions={{
          style: { height: 55, paddingBottom: 5, paddingTop: 3 },
          activeTintColor: theme.hlColor,
        }}
      >
        <BottomTab.Screen
          name="HomeNavigator"
          component={HomeNavigator}
          options={{
            title: "뭐먹",
            tabBarIcon: ({ focused }) => (
              <NavIcon type="AntDesign" name="home" focused={focused} />
            ),
          }}
        />
        <BottomTab.Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            title: "주위먹",
            tabBarIcon: ({ focused }) => (
              <NavIcon type="Feather" name="map-pin" focused={focused} />
            ),
          }}
        />
        <BottomTab.Screen
          name="RandomboxScreen"
          component={RandomboxScreen}
          options={{
            title: "뽑아먹",
            tabBarIcon: ({ focused }) => (
              <NavIcon
                type="MaterialCommunityIcons"
                name="slot-machine-outline"
                focused={focused}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Setting"
          component={Setting}
          options={{
            title: "설정",
            tabBarIcon: ({ focused }) => (
              <NavIcon type="AntDesign" name="setting" focused={focused} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
