import axios from "axios";
import {API_URL} from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getAuthHeader = async () => {
    const token = await AsyncStorage.getItem("@jwtToken");
    console.log(token);
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
};

export const getRestaurantsByGenre = async (genre) => {
    try {
        const authHeaderConfig = getAuthHeader();
        const response = await axios.get(
            API_URL + "/api/restaurant/condition" + "?type=" + genre,
            authHeaderConfig
        );
        return response.data;
    } catch (e) {
        console.error("[AppApi][Exception] " + e);
        return [];
    }
};

export const getRestaurantComments = async (id) => {
    try {
        const authHeaderConfig = getAuthHeader();
        const response = await axios.get(
            API_URL + "/api/restaurant/" + id + "/review",
            authHeaderConfig
        );
        return response.data;
    } catch (e) {
        console.error("[AppApi][Exception] " + e);
        return [];
    }
};

export const postRestaurantComment = async (review, userEmail, id) => {
    try {
        const authHeaderConfig = getAuthHeader();
        const response = await axios.post(
            API_URL + "/api/restaurant/" + id + "/review",
            authHeaderConfig,
            {
                authorEmail: userEmail,
                description: review,
                grade: 4,
            }
        );
        return response;
    } catch (e) {
        console.error("[AppApi][Exception] " + e);
        return [];
    }
};
