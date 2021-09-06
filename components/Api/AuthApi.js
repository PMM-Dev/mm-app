import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {API_URL} from "@env";

export const register = async (memberRequestDto) => {
    try {
        const response = await axios.post(API_URL + "/auth/register", {...memberRequestDto});
        return response.data;
    } catch (e) {
        console.error("[AuthApi][Exception] failed register() " + e);
        return undefined;
    }
};

export const getJwtTokenBySocialToken = async (memberRequestDto) => {
    try {
        const response = await axios.post(API_URL + "/auth/login",
            {
                ...memberRequestDto
            })
        return response.data;
    } catch (e) {
        console.log("[AuthApi][Exception] failed getJwtTokenBySocialToken() " + e);
        return undefined;
    }
};

export const reissueJwtAccessToken = async () => {
    try {
        const jwtAccessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const jwtRefreshToken = await AsyncStorage.getItem("@jwtRefreshToken");

        const response = await axios.post(API_URL + "/auth/reissue",
            {
                accessToken: jwtAccessToken,
                refreshToken: jwtRefreshToken
            });
        await AsyncStorage.setItem("@jwtAccessToken", response.accessToken);
        await AsyncStorage.setItem("@jwtRefreshToken", response.refreshToken)
        await AsyncStorage.setItem("@jwtTokenExpiresIn", JSON.stringify(response.accessTokenExpiresIn));

        return response.accessToken;
    } catch (e) {
        console.log("[AuthApi][Exception] failed reissueJwtAccessToken() " + e);
        return undefined;
    }
}