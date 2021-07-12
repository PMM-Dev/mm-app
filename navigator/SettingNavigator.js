import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Setting from "../screen/setting/Setting";
import Bookmark from "../screen/setting/Bookmark";
import Credit from "../screen/setting/Credit";

const Stack = createStackNavigator();

const SettingNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{ title: "설정", headerShown: false }}
      />
      <Stack.Screen
        name="Bookmark"
        component={Bookmark}
        options={{ title: "북마크" }}
      />
      <Stack.Screen
        name="Credit"
        component={Credit}
        options={{ title: "서비스 정보" }}
      />
    </Stack.Navigator>
  );
};

export default SettingNavigator;
