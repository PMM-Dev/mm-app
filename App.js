import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { ThemeProvider } from "styled-components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Font from "expo-font";
import { ActivityIndicator, Colors } from "react-native-paper";
import { AuthProvider, checkTokenAvailable } from "./components/AuthContext";
import NavController from "./components/NavController";
import Theme from "./style/Theme";
// 성능 향상을 위해 이 코드 추가하라네, 알아만 둬
// https://reactnavigation.org/docs/react-native-screens/
import { enableScreens } from "react-native-screens";
enableScreens();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const preLoad = async () => {
    try {
      await Font.loadAsync({
        DoHyeon: require("./assets/fonts/DoHyeon.ttf"),
      });
      await Font.loadAsync({
        NanumSquare: require("./assets/fonts/NanumSquare.ttf"),
      });

      const savedToken = await AsyncStorage.getItem("@savedToken");
      if (savedToken === null || savedToken !== "") {
        const check = await checkTokenAvailable(savedToken);
        if (check) setIsLoggedIn(true);
      }

      setIsLoading(false);
    } catch (e) {
      console.log("[Error] Init eror : " + e);
    }
  };

  useEffect(() => {
    preLoad();
  }, []);

  return (
    <>
      {isLoading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
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
            <NavController />
          </AuthProvider>
        </ThemeProvider>
      )}
    </>
  );
}
