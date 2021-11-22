import React, {createContext, useContext, useState} from "react";
import * as Google from "expo-google-app-auth";
import * as Apple from 'expo-apple-authentication';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    ANDROID_INEXPO_GOOGLE_CLIENT_ID,
    IOS_INEXPO_GOOGLE_CLIENT_ID,
    ANDROID_GOOGLE_CLIENT_ID,
    IOS_GOOGLE_CLIENT_ID
} from "@env";
import {getJwtTokenBySocialToken, loginByJwtToken, register} from "./Api/AuthApi";
import {getMyMemberInfo} from "./Api/AppMemberApi";
import ResponseStatusEnum from "../ResponseStatusEnum";

export const ROLE_ADMIN = "ROLE_ADMIN";
export const ROLE_USER = "ROLE_USER";

export const USER_EXIST = "LOGIN_USER_EXIST";
export const USER_NOT_EXIST = "LOGIN_USER_NOT_EXIST";
export const USER_CANCEL = "LOGIN_CANCEL";
export const USER_FAILED = "LOGIN_FAILED";

export const AuthContext = createContext();

export const AuthProvider = ({isLoggedIn: initIsLoggedIn, children}) => {
    const [isAdminMode, setIsAdminMode] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(initIsLoggedIn);
    const [profile, setProfile] = useState({
        id: 0,
        email: "",
        name: "",
        picture: "",
        role: ""
    });


    const loginByGoogle = async () => {
        try {
            const result = await Google.logInAsync({
                iosClientId: IOS_INEXPO_GOOGLE_CLIENT_ID,
                iosStandaloneAppClientId: IOS_GOOGLE_CLIENT_ID,
                androidClientId: ANDROID_INEXPO_GOOGLE_CLIENT_ID,
                androidStandaloneAppClientId: ANDROID_GOOGLE_CLIENT_ID,
                scopes: ["email", "profile"],
            });
            if (result.type === "cancel") {
                return {state: USER_CANCEL};
            }

            if (result.type === "success") {
                const memberRequestDto = {
                    email: result.user.email,
                    name: result.user.name,
                    picture: result.user.photoUrl,
                    role: isAdminMode ? "ROLE_ADMIN" : "ROLE_USER",
                    socialToken: result.accessToken,
                    socialTokenType: "GOOGLE"
                }
                const response = await getJwtToken(memberRequestDto);
                if (response.state === USER_FAILED) {
                    throw 'Saving App token failed';

                } else if (response.state === USER_NOT_EXIST) {
                    return {
                        state: USER_NOT_EXIST,
                        memberRequestDto
                    }

                } else if (response.state === USER_EXIST) {
                    return {state: USER_EXIST};

                } else {
                    return {state: USER_FAILED};
                }

            }
        } catch (e) {
            console.error("[Catch] Google login failed : " + e);
            return {state: USER_FAILED};
        }
    }

    const loginByApple = async () => {
        try {
            const result = await Apple.signInAsync();

            const memberRequestDto = {
                email: "",
                name: "",
                picture: "",
                role: isAdminMode ? "ROLE_ADMIN" : "ROLE_USER",
                socialToken: result.identityToken,
                socialTokenType: "APPLE"
            }
            const {state} = await getJwtToken(memberRequestDto);
            if (state === USER_FAILED) {
                throw 'Saving App token failed';

            } else if (state === USER_NOT_EXIST) {
                return {
                    state: USER_NOT_EXIST,
                    memberRequestDto
                }

            } else if (state === USER_EXIST) {
                return {state: USER_EXIST};

            } else {
                return {state: USER_FAILED};
            }

        } catch (e) {
            if (e.code !== 'ERR_CANCELED') {
                console.error("[Catch] Apple login failed : " + e);
            }
        }
    }

    const registerUser = async (memberRequestDto) => {
        try {
            const response = await register(memberRequestDto);
            if (response.status >= ResponseStatusEnum.BAD_REQUEST) {
                throw 'register process failed';
            }

            const {status, jwtToken} = await getJwtTokenBySocialToken(memberRequestDto);
            if (status >= ResponseStatusEnum.BAD_REQUEST) {
                throw 'getting jwt token failed';
            }

            await AsyncStorage.setItem("@jwtAccessToken", jwtToken.accessToken);
            await AsyncStorage.setItem("@jwtRefreshToken", jwtToken.refreshToken);
            await AsyncStorage.setItem("@jwtTokenExpiresIn", JSON.stringify(jwtToken.accessTokenExpiresIn));

            return jwtToken.accessToken;
        } catch (e) {
            console.error("[Catch] Register failed : " + e);
            return undefined;
        }
    }

    const getJwtToken = async (memberRequestDto) => {
        const {status, jwtToken} = await getJwtTokenBySocialToken(memberRequestDto);
        if (status === ResponseStatusEnum.NO_DATA) {
            return {state: USER_NOT_EXIST};
        } else if (status >= ResponseStatusEnum.BAD_REQUEST) {
            return {state: USER_FAILED};
        }

        await AsyncStorage.setItem("@jwtAccessToken", jwtToken.accessToken);
        await AsyncStorage.setItem("@jwtRefreshToken", jwtToken.refreshToken);
        await AsyncStorage.setItem("@jwtTokenExpiresIn", jwtToken.accessTokenExpiresIn.toString());
        return {state: USER_EXIST}
    };

    const saveProfileData = async () => {
        try {
            const {data, status} = await getMyMemberInfo();
            if (status === ResponseStatusEnum.ILLEGAL_ARGUMENT) {
                throw 'MyMemberInfo is undefined';
            }

            const {id, email, name, picture, role} = data;
            setProfile({id, email, name, picture, role});

            // 초기 로딩 + 로그인 과정에서 호출된 후, 로그인 상태 세팅을 위함
            setIsLoggedIn(true);
            return data;
        } catch (e) {
            console.error("[Catch] Saving profile data failed : " + e);
            return undefined;
        }
    }

    const logOut = async () => {
        try {
            await AsyncStorage.setItem("@jwtAccessToken", "");
            await AsyncStorage.setItem("@jwtRefreshToken", "");
            await AsyncStorage.setItem("@jwtTokenExpiresIn", "");

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
                loginByApple,
                registerUser,
                getJwtToken,
                saveProfileData,
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

export const useLoginInByApple = () => {
    const {loginByApple} = useContext(AuthContext);
    return loginByApple;
}

export const useRegisterUser = () => {
    const {registerUser} = useContext(AuthContext);
    return registerUser;
}

export const useGetJwtToken = () => {
    const {getJwtToken} = useContext(AuthContext);
    return getJwtToken;
};

export const useSaveProfileData = () => {
    const {saveProfileData} = useContext(AuthContext);
    return saveProfileData;
}

export const useLogOut = () => {
    const {logOut} = useContext(AuthContext);
    return logOut;
};
