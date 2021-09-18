import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Restaurant from "../screen/Home/Restaurant";
import Gacha from "../screen/Gacha/Gacha";

const Stack = createStackNavigator();

const GachaNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Gacha" component={Gacha} options={{ title: "뽑기" }} />
            <Stack.Screen
                name="Restaurant"
                component={Restaurant}
                options={{ title: "음식점" }}
            />
        </Stack.Navigator>
    );
};

export default GachaNavigator;
