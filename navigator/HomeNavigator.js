import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screen/Home/Home";
import RestaurantList from "../screen/Home/RestaurantList";
import Restaurant from "../screen/Home/Restaurant";
import Search from "../screen/Search";
import FeedbackList from "../screen/Home/FeedbackList";
import PostList from "../screen/Home/PostList";
import Post from "../screen/Home/Post";

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
        name="Search"
        component={Search}
        options={{ title: "검색" }}
      />
      <Stack.Screen
        name="RestaurantList"
        component={RestaurantList}
        options={{ title: "리스트" }}
      />
      <Stack.Screen
        name="Restaurant"
        component={Restaurant}
        options={{ title: "음식점" }}
      />
      <Stack.Screen
        name="FeedbackList"
        component={FeedbackList}
        options={{ title: "피드백" }}
      />
      <Stack.Screen
          name="PostList"
          component={PostList}
          options={{ title: "자유게시판" }}
      />
      <Stack.Screen
          name="Post"
          component={Post}
          options={{ title: "자유게시판 상세" }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
