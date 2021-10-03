import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Map from "../screen/Map";
import Search from "../screen/Search";
import Restaurant from "../screen/Home/Restaurant";

const Stack = createStackNavigator();

const MapNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Map" component={Map} options={{title: "홈"}}/>
            <Stack.Screen name="Search" component={Search} options={{title: "검색"}}/>
            <Stack.Screen
                name="Restaurant"
                component={Restaurant}
                options={{ title: "음식점" }}
            />
        </Stack.Navigator>
    );
};

export default MapNavigator;
