import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screen/Home";
import RestaurantList from "../screen/RestaurantList";
import Restaurant from "../screen/Restaurant";
import FlourScreen from "../screen/FlourScreen";
import DessertScreen from "../screen/DessertScreen";
import FastfoodScreen from "../screen/FastfoodScreen";
import JapaneseScreen from "../screen/JapaneseScreen";
import KoreanScreen from "../screen/KoreanScreen";
import NightfoodScreen from "../screen/NightfoodScreen";
import WesternScreen from "../screen/WesternScreen";
import AsianScreen from "../screen/AsianScreen";

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ title: "홈" }} />
      <Stack.Screen
        name="RestaurantList"
        component={RestaurantList}
        options={{ title: "리스트" }}
      />
      <Stack.Screen
        name="Restaurant"
        component={Restaurant}
        options={{ title: "식당" }}
      />
      <Stack.Screen
        name="KoreanScreen"
        component={KoreanScreen}
        options={{ title: "한식" }}
      />
      <Stack.Screen
        name="FlourScreen"
        component={FlourScreen}
        options={{ title: "분식" }}
      />
      <Stack.Screen
        name="DessertScreen"
        component={DessertScreen}
        options={{ title: "카페 디저트" }}
      />
      <Stack.Screen
        name="JapaneseScreen"
        component={JapaneseScreen}
        options={{ title: "일식" }}
      />
      <Stack.Screen
        name="FastfoodScreen"
        component={FastfoodScreen}
        options={{ title: "패스트푸드" }}
      />
      <Stack.Screen
        name="WesternScreen"
        component={WesternScreen}
        options={{ title: "양식" }}
      />
      <Stack.Screen
        name="AsianScreen"
        component={AsianScreen}
        options={{ title: "중식 아시안식" }}
      />
      <Stack.Screen
        name="NightfoodScreen"
        component={NightfoodScreen}
        options={{ title: "야식" }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
