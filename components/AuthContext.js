import React from "react";
import { createContext, useContext, useState } from "react";
import * as Google from "expo-google-app-auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const GOOLGE_ID =
  "255552505547-cqontmt71i4itsctd7l6aa39qajbmnq5.apps.googleusercontent.com";

export const AuthContext = createContext();

export const AuthProvider = ({ isLoggedIn: initIsLoggedIn, children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(initIsLoggedIn);
  const [profile, setProfile] = useState({
    email: "",
    name: "",
    picture: undefined,
  });

  const googleLogin = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: GOOLGE_ID,
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        await AsyncStorage.setItem("@savedToken", result.accessToken);
        setProfile({
          email: result.email,
          name: result.name,
          picture: result.picture,
        });
        setIsLoggedIn(true);
      } else {
        console.log("[Event] Google login canceled");
      }
    } catch (e) {
      console.log("[Catch] Google login failed :  " + e);
    }
  };

  const guestLogin = async () => {
    try {
      await AsyncStorage.setItem("@savedToken", "GUEST");
      setProfile({
        email: undefined,
        name: "guest" + Math.floor(Math.random() * 10000000),
        picture: undefined,
      });
      setIsLoggedIn(true);
    } catch (e) {
      console.log("[Catch] Guest login failed :  " + e);
    }
  };

  const loadProfile = async () => {
    // This is temp functions with google api data
    // This must be changed as Spring server data
    try {
      const accessToken = await AsyncStorage.getItem("@savedToken");

      if (accessToken === "GUEST") {
        loadGuestProfile();
      } else {
        await loadGoogleProfile(accessToken);
      }
    } catch (e) {
      console.log(e);
      setProfile({
        email: "failed",
        name: "failed",
        picture: "",
      });
    }
  };

  const loadGuestProfile = () => {
    setProfile({
      email: undefined,
      name: "guest" + Math.floor(Math.random() * 10000000),
      picture: undefined,
    });
  };

  const loadGoogleProfile = async (accessToken) => {
    const user = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const { email, name, picture } = await user.json();
    setProfile({ email, name, picture });
  };

  const logOut = async () => {
    try {
      const accessToken = await AsyncStorage.getItem("@savedToken");

      if (accessToken !== "GUEST") {
        await Google.logOutAsync({
          accessToken,
          androidClientId: GOOLGE_ID,
        });
      }
    } catch (e) {
      console.log("[Catch] logout failed :  " + e);
    } finally {
      await AsyncStorage.setItem("@savedToken", "");
      setIsLoggedIn(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        profile,
        loadProfile,
        googleLogin,
        guestLogin,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const checkTokenAvailable = async (accessToken) => {
  const user = await fetch("https://www.googleapis.com/userinfo/v2/me", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const { id } = await user.json();

  // Check whether there is id from db.

  if (id !== undefined) return true;
  else return false;
};

export const useIsLoggedIn = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn;
};

export const useProfile = () => {
  const { profile } = useContext(AuthContext);
  return profile;
};

export const useloadProfile = () => {
  const { loadProfile } = useContext(AuthContext);
  return loadProfile;
};

export const useGoogleLogIn = () => {
  const { googleLogin } = useContext(AuthContext);
  return googleLogin;
};

export const useGuestLogIn = () => {
  const { guestLogin } = useContext(AuthContext);
  return guestLogin;
};

export const useLogOut = () => {
  const { logOut } = useContext(AuthContext);
  return logOut;
};
