import "react-native-gesture-handler";
import React, {useEffect, useState} from "react";
import {View} from "react-native";
import {ThemeProvider} from "styled-components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Font from "expo-font";
import {ActivityIndicator, Colors} from "react-native-paper";
import {AuthProvider, isAvailableToken} from "./components/AuthContext";
import NavController from "./components/NavController";
import Theme from "./style/Theme";
// 성능 향상을 위해 이 코드 추가하라네, 알아만 둬
// https://reactnavigation.org/docs/react-native-screens/
import {enableScreens} from "react-native-screens";

enableScreens();

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isSystemLoading, setIsSystemLoading] = useState(true);
    const [isAuthLoading, setIsAuthLoading] = useState(true);

    const preLoadSystem = async () => {
        try {
            await Font.loadAsync({
                DoHyeon: require("./assets/fonts/DoHyeon.ttf"),
                NanumSquare: require("./assets/fonts/NanumSquare.ttf"),
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
            // if (jwtToken !== null || jwtToken !== "") {
            //     const isAvailable = await isAvailableToken(jwtToken);
            //     if (isAvailable) {
            //         setIsLoggedIn(true);
            //     }
            // }
            setIsAuthLoading(false);
        } catch (e) {
            console.log("[Error] Failed to preload the auth data : " + e);
        }
    }

    useEffect(() => {
        preLoadSystem();
        preLoadAuth()
    }, []);

    return (
        <>
            {(isSystemLoading || isAuthLoading) ? (
                <View
                    style={{flex: 1, justifyContent: "center", alignContent: "center"}}
                >
                    <ActivityIndicator
                        animating={true}
                        size="large"
                        color={Colors.red800}
                    />
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
