import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API_URL } from "@env";

export const register = async (memberRequestDto) => {
  try {
    const response = await axios.post(API_URL + "/auth/register", {
      ...memberRequestDto,
    });
    return {
      status: response?.status,
    };
  } catch (e) {
    console.error("[AuthApi][Exception] failed register() " + e);
    return {
      status: e.response?.status,
    };
  }
};

export const getJwtTokenBySocialToken = async (memberRequestDto) => {
  try {
    const response = await axios.post(API_URL + "/auth/login", {
      ...memberRequestDto,
    });

    return {
      status: response?.status,
      jwtToken : response?.data
    };
  } catch (e) {
    console.log("[AuthApi][Exception] failed getJwtTokenBySocialToken() " + e);
    return {
      status: e.response?.status,
      jwtToken : e.response?.data
    };
  }
};

export const reissueJwtAccessToken = async () => {
  try {
    const jwtAccessToken = await AsyncStorage.getItem("@jwtAccessToken");
    const jwtRefreshToken = await AsyncStorage.getItem("@jwtRefreshToken");

    const {data, status} = await axios.post(API_URL + "/auth/reissue", {
      accessToken: jwtAccessToken,
      refreshToken: jwtRefreshToken,
    });
    await AsyncStorage.setItem("@jwtAccessToken", data.accessToken);
    await AsyncStorage.setItem("@jwtRefreshToken", data.refreshToken);
    await AsyncStorage.setItem("@jwtTokenExpiresIn", JSON.stringify(data.accessTokenExpiresIn));

    return status;
  } catch (e) {
    console.log("[AuthApi][Exception] failed reissueJwtAccessToken() " + e);
    return undefined;
  }
};
