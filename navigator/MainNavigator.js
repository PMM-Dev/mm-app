import React, {useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Image} from "react-native";

import HomeNavigator from "./HomeNavigator";
import Gacha from "../screen/Gacha/Gacha";
import Theme from "../style/Theme";
import SettingNavigator from "./SettingNavigator";
import {
    NAVIGATOR_GACHA_UNSELECTED,
    NAVIGATOR_HOME_UNSELECTED,
    NAVIGATOR_THEME_UNSELECTED,
    NAVIGATOR_MAP_UNSELECTED,
    NAVIGATOR_SETTING_UNSELECTED,
    NAVIGATOR_HOME_SELECTED,
    NAVIGATOR_MAP_SELECTED,
    NAVIGATOR_THEME_SELECTED,
    NAVIGATOR_GACHA_SELECTED,
    NAVIGATOR_SETTING_SELECTED,
} from "../image";
import constants from "../constants";
import MapNavigator from "./MapNavigator";
import {useSaveJwtToken, useSaveProfileData} from "../components/AuthContext";
import {getMyMemberInfo} from "../components/Api/AppMemberApi";
import GachaNavigator from "./GachaNavigator";

const BottomTab = createBottomTabNavigator();

const MainNavigator = () => {

    const saveProfileData = useSaveProfileData();

    useEffect(() => {
        async function initProfile() {
            const response = await saveProfileData();
            if (!response) {
                alert("프로필 정보를 불러오는 과정에서 문제가 생겼습니다.")
            }
        }

        initProfile();
    }, [])

    const navigatorHeight = constants.vh(8);
    const navigatorIconSize = constants.vh(3.5);
    const navigatorSmallIconSize = constants.vh(4);
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
                                focused ? <Image
                                        source={NAVIGATOR_HOME_SELECTED}
                                        style={{width: navigatorIconSize, height: navigatorIconSize}}
                                    /> :
                                    <Image
                                        source={NAVIGATOR_HOME_UNSELECTED}
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
                                focused ? <Image
                                    source={NAVIGATOR_MAP_SELECTED}
                                    style={{width: navigatorIconSize, height: navigatorIconSize}}
                                /> : <Image
                                    source={NAVIGATOR_MAP_UNSELECTED}
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
                                focused ? <Image
                                    source={NAVIGATOR_THEME_SELECTED}
                                    style={{width: navigatorIconSize, height: navigatorIconSize}}
                                /> : <Image
                                    source={NAVIGATOR_THEME_UNSELECTED}
                                    style={{width: navigatorIconSize, height: navigatorIconSize}}
                                />
                            );
                        },
                    }}
                />
                <BottomTab.Screen
                    name="Gacha"
                    component={GachaNavigator}
                    options={{
                        title: "뽑기",
                        tabBarIcon: ({focused}) => {
                            return (
                                focused ? <Image
                                    source={NAVIGATOR_GACHA_SELECTED}
                                    style={{width: navigatorSmallIconSize, height: navigatorSmallIconSize}}
                                /> : <Image
                                    source={NAVIGATOR_GACHA_UNSELECTED}
                                    style={{width: navigatorSmallIconSize, height: navigatorSmallIconSize}}
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
                                focused ? <Image
                                    source={NAVIGATOR_SETTING_SELECTED}
                                    style={{width: navigatorIconSize, height: navigatorIconSize}}
                                /> : <Image
                                    source={NAVIGATOR_SETTING_UNSELECTED}
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
