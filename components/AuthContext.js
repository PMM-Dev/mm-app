import React, {createContext, useContext, useState} from "react";
import * as Google from "expo-google-app-auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {ANDROID_INEXPO_GOOGLE_CLIENT_ID, IOS_INEXPO_GOOGLE_CLIENT_ID} from "@env";
import {getJwtTokenBySocialToken, loginByJwtToken, register} from "./Api/AuthApi";

export const ADMIN_MODE_PASSWORD = "mmadmin";
const ROLE_ADMIN = "ADMIN";
const ROLE_USER = "USER";

export const USER_EXIST = "LOGIN_USER_EXIST";
export const USER_NOT_EXIST = "LOGIN_USER_NOT_EXIST";
export const USER_CANCEL = "LOGIN_CANCEL";
export const USER_FAILED = "LOGIN_FAILED";

const GUEST_TOKEN = "GUEST";

export const AuthContext = createContext();

export const AuthProvider = ({isLoggedIn: initIsLoggedIn, children}) => {
    const [isAdminMode, setIsAdminMode] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(initIsLoggedIn);
    const [profile, setProfile] = useState({
        email: "",
        name: "",
        picture: "",
        role: ""
    });


    const loginByGoogle = async () => {
        try {
            const result = await Google.logInAsync({
                iosClientId: IOS_INEXPO_GOOGLE_CLIENT_ID,
                // iosStandaloneAppClientId: IOS_GOOGLE_CLIENT_ID,
                androidClientId: ANDROID_INEXPO_GOOGLE_CLIENT_ID,
                // androidStandaloneAppClientId: ANDROID_GOOGLE_CLIENT_ID,
                scopes: ["email", "profile"],
            });
            if (result.type === "cancel") {
                return { state : USER_CANCEL };
            }

            if (result.type === "success") {
                const jwtToken = await getJwtTokenBySocialToken(result.accessToken);
                if (!jwtToken) {
                    return {
                        state: USER_NOT_EXIST,
                        data: {
                            email: result.user.email,
                            name: result.user.name,
                            picture: result.user.photoUrl,
                            socialToken: result.accessToken
                        }
                    };
                }

                await AsyncStorage.setItem("@jwtToken", jwtToken);
                return {state: USER_EXIST};
            }
        } catch (e) {
            console.error("[Catch] Google login failed : " + e);
            return {state: USER_FAILED};
        }
    };

    const loginByGuest = async () => {
        // try {
        //     await AsyncStorage.setItem("@savedToken", GUEST_TOKEN);
        //     setProfile({
        //         email: undefined,
        //         name: "guest" + Math.floor(Math.random() * 10000000),
        //         picture: undefined,
        //     });
        //     setIsLoggedIn(true);
        // } catch (e) {
        //     console.error("[Catch] Guest login failed : " + e);
        // }
    };

    const registerUser = async ({email, name, picture, socialToken}) => {
        try {
            const role = isAdminMode ? ROLE_ADMIN : ROLE_USER;
            const response = await register({email, name, picture, role});
            if (!response) {
                throw 'register process failed';
            }

            const jwtToken = await getJwtTokenBySocialToken(socialToken);
            if (!jwtToken) {
                throw 'getting jwt token failed';
            }

            await AsyncStorage.setItem("@jwtToken", jwtToken);
            return jwtToken;
        } catch (e) {
            console.error("[Catch] Register failed : " + e);
            return undefined;
        }
    }

    const loadProfileData = async () => {
        try {
            const jwtToken = await AsyncStorage.getItem("@jwtToken");

            if (jwtToken === GUEST_TOKEN) {
                loadGuestProfile();
            } else {
                const profile = await loginByJwtToken(jwtToken);
                if (!profile) {
                    throw 'Failed during requesting to server';
                }

                setProfile(profile);
            }

            setIsLoggedIn(true);
        } catch (e) {
            console.error("[Catch] Profile date load failed : " + e);
            setIsLoggedIn(false);
            return undefined;
        }
    };

    const loadGuestProfile = () => {
        // setProfile({
        //     email: undefined,
        //     name: "guest" + Math.floor(Math.random() * 10000000),
        //     picture: undefined,
        // });
    };

    const logOut = async () => {
        try {
            await AsyncStorage.setItem("@jwtToken", "");

            setIsLoggedIn(false);
        } catch (e) {
            console.error("[Catch] logout failed :  " + e);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                profile,
                isAdminMode,
                setIsAdminMode,
                loginByGoogle,
                loginByGuest,
                registerUser,
                loadProfileData,
                logOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
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

export const useIsAdminMode = () => {
    const {isAdminMode} = useContext(AuthContext);
    return isAdminMode;
}

export const useSetIsAdminMode = () => {
    const {setIsAdminMode} = useContext(AuthContext);
    return setIsAdminMode;
}

export const useLogInByGoogle = () => {
    const {loginByGoogle} = useContext(AuthContext);
    return loginByGoogle;
};

export const useLogInByGuest = () => {
    const {loginByGuest} = useContext(AuthContext);
    return loginByGuest;
};

export const useRegisterUser = () => {
    const {registerUser} = useContext(AuthContext);
    return registerUser;
}

export const useLogOut = () => {
    const {logOut} = useContext(AuthContext);
    return logOut;
};
