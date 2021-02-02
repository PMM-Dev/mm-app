import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthProvider, checkTokenAvailable } from "./components/AuthContext";
import { ActivityIndicator, Colors } from "react-native-paper";
import NavController from "./components/NavController";
import { View } from "react-native";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const preLoad = async () => {
    try {
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
        <AuthProvider isLoggedIn={isLoggedIn}>
          <NavController />
        </AuthProvider>
      )}
    </>
  );
}
