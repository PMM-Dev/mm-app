import React from "react";
import { createContext, useContext, useState } from "react";
import * as Google from "expo-google-app-auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ isLoggedIn: initIsLoggedIn, children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(initIsLoggedIn);
  const GOOLGE_ID =
    "255552505547-cqontmt71i4itsctd7l6aa39qajbmnq5.apps.googleusercontent.com";

  const logIn = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: GOOLGE_ID,
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        const user = await fetch("https://www.googleapis.com/userinfo/v2/me", {
          headers: { Authorization: `Bearer ${result.accessToken}` },
        });

        await AsyncStorage.setItem("@googleToken", result.accessToken);

        const { email, family_name, given_name } = await user.json();

        setIsLoggedIn(true);
      } else {
        console.log("[Event] Google login cancel");
      }
    } catch (e) {
      console.log("[Event] Google login error :  " + e);
    }
  };

  const logOut = async () => {
    const accessToken = AsyncStorage.getItem("@googleToken");
    await Google.logOutAsync({
      accessToken,
      androidClientId: GOOLGE_ID,
    });

    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useIsLoggedIn = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn;
};

export const useLogIn = () => {
  const { logIn } = useContext(AuthContext);
  return logIn;
};

export const useLogOut = () => {
  const { logOut } = useContext(AuthContext);
  return logOut;
};
