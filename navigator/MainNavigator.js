import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Image} from "react-native";

import HomeNavigator from "./HomeNavigator";
import Gacha from "../screen/Gacha/Gacha";
import Theme from "../style/Theme";
import SettingNavigator from "./SettingNavigator";
import {NAVIGATOR_GAME, NAVIGATOR_HOME, NAVIGATOR_MAP, NAVIGATOR_SETTING, NAVIGATOR_THEME,} from "../image";
import constants from "../constants";
import MapNavigator from "./MapNavigator";

const BottomTab = createBottomTabNavigator();

const MainNavigator = () => {
    const navigatorHeight = constants.vh(8);
    const navigatorIconSize = constants.vh(6);
    const navigatorLabalSize = constants.vh(1.5);

    return (
        <NavigationContainer>
            <BottomTab.Navigator
                tabBarOptions={{
                    style: {height: navigatorHeight, paddingBottom: 5, paddingTop: 3},
                    labelStyle: {fontSize: navigatorLabalSize},
                    activeTintColor: Theme.hlOrange,
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
                                    style={{width: navigatorIconSize, height: navigatorIconSize}}
                                />
                            );
                        },
                    }}
                />
                <BottomTab.Screen
                    name="MapNavigator"
                    component={MapNavigator}
                    options={{
                        title: "위치",
                        tabBarIcon: ({focused}) => {
                            return (
                                <Image
                                    source={NAVIGATOR_MAP}
                                    style={{width: navigatorIconSize, height: navigatorIconSize}}
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
                                    style={{width: navigatorIconSize, height: navigatorIconSize}}
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
                                    style={{width: navigatorIconSize, height: navigatorIconSize}}
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
                                    style={{width: navigatorIconSize, height: navigatorIconSize}}
                                />
                            );
                        },
                    }}
                />

            </BottomTab.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigator;