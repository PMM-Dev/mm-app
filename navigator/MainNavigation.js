import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Image} from "react-native";

import HomeNavigator from "./HomeNavigator";
import Gacha from "../screen/Gacha/Gacha";
import Map from "../screen/Map";
import Theme from "../style/Theme";
import SettingNavigator from "./SettingNavigator";
import {NAVIGATOR_GAME, NAVIGATOR_HOME, NAVIGATOR_MAP, NAVIGATOR_SETTING, NAVIGATOR_THEME,} from "../image";

const BottomTab = createBottomTabNavigator();

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <BottomTab.Navigator
                tabBarOptions={{
                    style: {height: 90, paddingBottom: 5, paddingTop: 3},
                    labelStyle: {fontSize: 13},
                    activeTintColor: Theme.hlColor,
                }}
            >
                <BottomTab.Screen
                    name="HomeNavigator"
                    component={HomeNavigator}
                    options={{
                        title: "홈",
                        tabBarIcon: ({focused}) => {
                            return (
                                <Image
                                    source={NAVIGATOR_HOME}
                                    style={{width: 60, height: 60}}
                                />
                            );
                        },
                    }}
                />
                <BottomTab.Screen
                    name="Map"
                    component={Map}
                    options={{
                        title: "위치",
                        tabBarIcon: ({focused}) => {
                            return (
                                <Image
                                    source={NAVIGATOR_MAP}
                                    style={{width: 60, height: 60}}
                                />
                            );
                        },
                    }}
                />
                <BottomTab.Screen
                    name="Theme"
                    component={Gacha}
                    options={{
                        title: "테마",
                        tabBarIcon: ({focused}) => {
                            return (
                                <Image
                                    source={NAVIGATOR_THEME}
                                    style={{width: 60, height: 60}}
                                />
                            );
                        },
                    }}
                />
                <BottomTab.Screen
                    name="Gacha"
                    component={Gacha}
                    options={{
                        title: "뽑기",
                        tabBarIcon: ({focused}) => {
                            return (
                                <Image
                                    source={NAVIGATOR_GAME}
                                    style={{width: 60, height: 60}}
                                />
                            );
                        },
                    }}
                />
                <BottomTab.Screen
                    name="SettingNavigator"
                    component={SettingNavigator}
                    options={{
                        title: "설정",
                        tabBarIcon: ({focused}) => {
                            return (
                                <Image
                                    source={NAVIGATOR_SETTING}
                                    style={{width: 60, height: 60}}
                                />
                            );
                        },
                    }}
                />
            </BottomTab.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigation;
