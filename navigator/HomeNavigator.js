import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screen/Home";
import RestaurantList from "../screen/restaurantList/RestaurantList";

import ResList from "../screen/ResList";

import PostList from "../screen/PostList";
import Post from "../screen/Post";
import Res from "../screen/Res";

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} options={{ title: "홈" }} />
      <Stack.Screen
        name="ResList"
        component={ResList}
        options={{ title: "리스트" }}
      />
      <Stack.Screen
        name="PostList"
        component={PostList}
        options={{ title: "게시글" }}
      />
      <Stack.Screen name="Res" component={Res} options={{ title: "음식점" }} />
      <Stack.Screen name="Post" component={Post} options={{ title: "" }} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
