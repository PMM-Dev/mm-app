import "react-native-gesture-handler";
import React, {useEffect, useState} from "react";
import {View} from "react-native";
import {enableScreens} from "react-native-screens";
import {loginByJwtToken} from "./components/Api/AuthApi";
import {ThemeProvider} from "styled-components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Font from "expo-font";
import {ActivityIndicator, Text} from "react-native-paper";

import {AuthProvider} from "./components/AuthContext";
import NavController from "./components/NavController";
import Theme from "./style/Theme";

enableScreens();
export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isSystemLoading, setIsSystemLoading] = useState(true);
    const [isAuthLoading, setIsAuthLoading] = useState(true);

    const preLoadSystem = async () => {
        try {
            await Font.loadAsync({
                DoHyeon: require("./assets/fonts/DoHyeon.ttf"),
                NanumSquareR: require("./assets/fonts/NanumSquareR.ttf"),
                NanumSquareL: require("./assets/fonts/NanumSquareL.ttf"),
                NanumSquareB: require("./assets/fonts/NanumSquareB.ttf"),
                NanumSquareEB: require("./assets/fonts/NanumSquareEB.ttf"),
                NanumBarunGothic: require("./assets/fonts/NanumBarunGothic.ttf"),
                NanumBarunGothicBold: require("./assets/fonts/NanumBarunGothicBold.ttf"),
            });
            setIsSystemLoading(false);
        } catch (e) {
            console.log("[Error] Failed to preload the system resource : " + e);
        }
    };

    const preLoadAuth = async () => {
        try {
            const jwtToken = await AsyncStorage.getItem("@jwtToken");
            if (jwtToken === undefined || jwtToken === null || jwtToken === "") {
                setIsAuthLoading(false);
                return;
            }

            const response = await loginByJwtToken(jwtToken);
            if (!response) {
                throw 'Fail to load profile data';
            }

            setIsLoggedIn(true);
            setIsAuthLoading(false);
        } catch (e) {
            console.log("[Error] Failed to preload the auth data : " + e);
            await AsyncStorage.setItem("@jwtToken", "");
            setIsLoggedIn(false);
        }
    }

    useEffect(() => {
        preLoadSystem();
        preLoadAuth();
    }, []);

    return (
        <>
            {(isSystemLoading || isAuthLoading) ? (
                <View
                    style={{flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center"}}
                >
                    <ActivityIndicator
                        animating={true}
                        size="large"
                        color={Theme.hlOrange}
                    />
                    <Text style={{marginTop: 20}}>앱 초기 로딩 중</Text>
                </View>
            ) : (
                <ThemeProvider theme={Theme}>
                    <AuthProvider isLoggedIn={isLoggedIn}>
                        <NavController/>
                    </AuthProvider>
                </ThemeProvider>
            )}
        </>
    );
}
