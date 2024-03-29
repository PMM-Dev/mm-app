import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Setting from "../screen/Setting/Setting";
import LikeHistory from "../screen/Setting/LikeHistory";
import ReviewHistory from "../screen/Setting/ReviewHistory";
import Credit from "../screen/Setting/Credit";
import Restaurant from "../screen/Home/Restaurant";
import EditProfile from "../screen/Setting/EditProfile";

const Stack = createStackNavigator();

const SettingNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{ title: "설정", headerShown: false }}
      />
      <Stack.Screen
        name="LikeHistory"
        component={LikeHistory}
        options={{ title: "좋아했던 식당들" }}
      />
      <Stack.Screen
        name="ReviewHistory"
        component={ReviewHistory}
        options={{ title: "남겼던 리뷰들" }}
      />
      <Stack.Screen
        name="Credit"
        component={Credit}
        options={{ title: "서비스 정보" }}
      />
      <Stack.Screen
        name="Restaurant"
        component={Restaurant}
        options={{ title: "음식점" }}
      />
      <Stack.Screen
          name="Edit"
          component={EditProfile}
          options={{ title: "편집" }}
      />
    </Stack.Navigator>
  );
};

export default SettingNavigator;
