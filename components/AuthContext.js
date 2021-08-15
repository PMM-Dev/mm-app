import React, {createContext, useContext, useState} from "react";
import * as Google from "expo-google-app-auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {ANDROID_INEXPO_GOOGLE_CLIENT_ID, IOS_INEXPO_GOOGLE_CLIENT_ID} from "@env";

const guestToken = "GUEST";

export const AuthContext = createContext();

export const AuthProvider = ({isLoggedIn: initIsLoggedIn, children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(initIsLoggedIn);
    const [profile, setProfile] = useState({
        email: "",
        name: "",
        picture: undefined,
    });

    const googleLogin = async () => {
        try {
            const result = await Google.logInAsync({
                iosClientId: IOS_INEXPO_GOOGLE_CLIENT_ID,
                // iosStandaloneAppClientId: IOS_GOOGLE_CLIENT_ID,
                androidClientId: ANDROID_INEXPO_GOOGLE_CLIENT_ID,
                // androidStandaloneAppClientId: ANDROID_GOOGLE_CLIENT_ID,
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
            await AsyncStorage.setItem("@savedToken", guestToken);
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

    const loadProfileData = async () => {
        // This is temp functions with google api data
        // This must be changed as Spring server data
        try {
            const accessToken = await AsyncStorage.getItem("@savedToken");

            if (accessToken === guestToken) {
                loadGuestProfile();
            } else {
                await loadGoogleProfile(accessToken);
            }
        } catch (e) {
            console.log(e);
            setIsLoggedIn(false);
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
            headers: {Authorization: `Bearer ${accessToken}`},
        });
        const {email, name, picture} = await user.json();
        setProfile({email, name, picture});
    };

    const logOut = async () => {
        try {
            const accessToken = await AsyncStorage.getItem("@savedToken");

            if (accessToken !== guestToken) {
                await Google.logOutAsync({
                    accessToken,
                    iosClientId: IOS_INEXPO_GOOGLE_CLIENT_ID,
                    // iosStandaloneAppClientId: IOS_GOOGLE_CLIENT_ID,
                    androidClientId: ANDROID_INEXPO_GOOGLE_CLIENT_ID,
                    // androidStandaloneAppClientId: ANDROID_GOOGLE_CLIENT_ID,
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
                loadProfileData,
                googleLogin,
                guestLogin,
                logOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const isAvailableToken = async (accessToken) => {
    // Guest Login
    if (accessToken === guestToken) {
        return true;
    }

    // Access Token?JWT? 이 일치하는 유저가 있는지 DB에 확인
    // Google 코드 제거

    const user = await fetch("https://www.googleapis.com/userinfo/v2/me", {
        headers: {Authorization: `Bearer ${accessToken}`},
    });
    const {id} = await user.json();
    if (id !== undefined) {
        return true;
    }

    return false;
};

export const useIsLoggedIn = () => {
    const {isLoggedIn} = useContext(AuthContext);
    return isLoggedIn;
};

export const useProfile = () => {
    const {profile} = useContext(AuthContext);
    return profile;
};

export const useLoadProfileData = () => {
    const {loadProfileData} = useContext(AuthContext);
    return loadProfileData;
};

export const useGoogleLogIn = () => {
    const {googleLogin} = useContext(AuthContext);
    return googleLogin;
};

export const useGuestLogIn = () => {
    const {guestLogin} = useContext(AuthContext);
    return guestLogin;
};

export const useLogOut = () => {
    const {logOut} = useContext(AuthContext);
    return logOut;
};
