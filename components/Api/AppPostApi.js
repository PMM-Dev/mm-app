import axios from "axios";
import { API_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getPost = async () => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const {data, status} = await axios.get(API_URL + "/post", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return {data, status};
    } catch (e) {
        console.error("[AppApi][Exception] " + e);
        return [];
    }
};

export const getPostById = async (id) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const {data, status} = await axios.get(API_URL + "/post/" + id, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return {data, status};
    } catch (e) {
        console.error("[AppApi][Exception] " + e);
        return [];
    }
};

export const getPostPreview = async () => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const {data, status} = await axios.get(API_URL + "/post", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return {data, status};
    } catch (e) {
        console.error("[AppApi][Exception] " + e);
        return [];
    }
};