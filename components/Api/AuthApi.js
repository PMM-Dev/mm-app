import axios from "axios";
import { API_URL } from "@env";

export const getJwtTokenBySocialToken = async (socialToken) => {
  try {
    const response = await axios.get(API_URL + "/api/auth/" + socialToken);
    return response.data;
  } catch (e) {
    console.log("[AuthApi][Exception] failed getJwtTokenBySocialToken() " + e);
    return undefined;
  }
};

export const loginByJwtToken = async (jwtToken) => {
  try {
    const response = await axios.get(API_URL + "/api/login/" + jwtToken);
    return response.data;
  } catch (e) {
    console.error("[AuthApi][Exception] failed loginByJwtToken() " + e);
    return undefined;
  }
};

export const register = async (userSaveDto) => {
  try {
    const response = await axios.post(API_URL + "/api/register", userSaveDto);
    return response.data;
  } catch (e) {
    console.error("[AuthApi][Exception] failed register() " + e);
    return undefined;
  }
};
