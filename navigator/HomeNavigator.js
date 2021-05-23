import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screen/Home";
import Restaurant from "../screen/Restaurant";
import RestaurantList from "../screen/restaurantList/RestaurantList";
import FlourList from "../screen/restaurantList/FlourList";

import DessertList from "../screen/restaurantList/DessertList";
import FastfoodList from "../screen/restaurantList/FastfoodList";
import JapaneseList from "../screen/restaurantList/JapaneseList";
import KoreanList from "../screen/restaurantList/KoreanList";
import NightfoodList from "../screen/restaurantList/NightfoodList";
import WesternList from "../screen/restaurantList/WesternList";
import AsianList from "../screen/restaurantList/AsianList";
import Comment from "../screen/Comment";
import PostList from "../screen/PostList";
import Post from "../screen/Post";

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
        name="KoreanList"
        component={KoreanList}
        options={{ title: "한식" }}
      />
      <Stack.Screen
        name="FlourList"
        component={FlourList}
        options={{ title: "분식" }}
      />
      <Stack.Screen
        name="DessertList"
        component={DessertList}
        options={{ title: "카페 디저트" }}
      />
      <Stack.Screen
        name="JapaneseList"
        component={JapaneseList}
        options={{ title: "일식" }}
      />
      <Stack.Screen
        name="FastfoodList"
        component={FastfoodList}
        options={{ title: "패스트푸드" }}
      />
      <Stack.Screen
        name="WesternList"
        component={WesternList}
        options={{ title: "양식" }}
      />
      <Stack.Screen
        name="AsianList"
        component={AsianList}
        options={{ title: "중식 아시안식" }}
      />
      <Stack.Screen
        name="NightfoodList"
        component={NightfoodList}
        options={{ title: "야식" }}
      />
      <Stack.Screen
        name="Comment"
        component={Comment}
        options={{ title: "전체보기" }}
      />
      <Stack.Screen
        name="PostList"
        component={PostList}
        options={{ title: "게시글" }}
      />
      <Stack.Screen name="Post" component={Post} options={{ title: "" }} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
