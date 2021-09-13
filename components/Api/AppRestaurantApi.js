import axios from "axios";
import {API_URL} from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getRestaurants = async () => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const response = await axios.get(API_URL + "/restaurant/list", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (e) {
        console.error("[AppApi][Exception] failed getRestaurants() " + e);
        return [];
    }
};

export const getRestaurantsByGenre = async (genre) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const response = await axios.get(
            API_URL + "/restaurant/condition" + "?type=" + genre,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        return response.data;
    } catch (e) {
        console.error("[AppApi][Exception] " + e);
        return [];
    }
};

export const getRestaurantByGacha = async (type, price, location) => {
    let conditionUrl = "?";
    if (type !== undefined) {
        conditionUrl += "type=" + type + "&";
    }
    if (price !== undefined) {
        conditionUrl += "price=" + price + "&";
    }
    if (location !== undefined) {
        conditionUrl += "location=" + location + "&";
    }

    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const response = await axios.get(API_URL + "/restaurant/condition" + conditionUrl,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

        return response.data;
    } catch (e) {
        console.error("[AppApi][Exception] getRestaurantByGacha()" + e);
        return undefined;
    }
}

export const getRestaurantsById = async (id) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const response = await axios.get(API_URL + "/restaurant/" + id, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (e) {
        console.error("[AppApi][Exception] " + e);
        return [];
    }
};

export const getRestaurantReviews = async (id) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const response = await axios.get(
            API_URL + "/restaurant/" + id + "/review",
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        return response.data;
    } catch (e) {
        console.error("[AppApi][Exception] " + e);
        return [];
    }
};

export const postReview = async (userEmail, content, grade, restaurantId) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const response = await axios.post(
            API_URL + "/restaurant/" + restaurantId + "/review",
            {
                authorEmail: userEmail,
                description: content,
                grade: grade,
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        return response.data;
    } catch (e) {
        console.error("[AppApi][Exception] " + e);
        return undefined;
    }
};
