import axios from "axios";
import {API_URL} from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const searchMemberByKeyword = async (keyword) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const response = await axios.get(API_URL + "/search/member?keyword=" + keyword, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        return {data: response?.data, status: response?.status};
    } catch (e) {
        console.error("[AppApi][Exception] " + e);
        return {data: e.response?.data, status: e.response?.status};
    }
}

export const searchRestaurantByKeyword = async (keyword) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const response = await axios.get(API_URL + "/search/restaurant?keyword="  + keyword, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        return {data: response.data, status: response.status};
    } catch (e) {
        console.error("[AppApi][Exception] " + e);
        return {data: e.response.data, status: e.response.status};
    }
}

export const searchPostByKeyword = async (keyword) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const response = await axios.get(API_URL + "/search/post?keyword=" + keyword, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        console.log(response.data);
        return {data: response?.data, status: response?.status};
    } catch (e) {
        console.error("[AppApi][Exception] " + e);
        return {data: e.response?.data, status: e.response?.status};
    }
}