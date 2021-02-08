import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screen/Home";
import RestaurantList from "../screen/RestaurantList";
import Restaurant from "../screen/Restaurant";

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
    </Stack.Navigator>
  );
};

export default HomeNavigator;
