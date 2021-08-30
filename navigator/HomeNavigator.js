import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "../screen/Home/Home";
import RestaurantList from "../screen/Home/RestaurantList";
import Restaurant from "../screen/Home/Restaurant";
import Search from "../screen/Search";
import Theme from "../style/Theme";

const Stack = createStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={Home} options={{title: "홈"}}/>
            <Stack.Screen name="Search" component={Search} options={{title: "검색"}}/>
            <Stack.Screen
                name="RestaurantList"
                component={RestaurantList}
                options={{title: "리스트"}}
            />
            <Stack.Screen name="Restaurant" component={Restaurant} options={{title: "음식점"}}/>
        </Stack.Navigator>
    );
};

export default HomeNavigator;
