import axios from "axios";
import {API_URL} from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const appendLikeRestaurant = async (email, restaurantId) => {
    try {
        const token = await AsyncStorage.getItem("@jwtToken");
        await axios.put(
            API_URL + "/api/user/" + email + "/like/" + restaurantId,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
    } catch (e) {
        console.error("[AppApi][Exception] " + e);
    }
}

export const subtractLikeRestaurant = async (email, restaurantId) => {
    try {
        const token = await AsyncStorage.getItem("@jwtToken");
        await axios.delete(
            API_URL + "/api/user/" + email + "/like/" + restaurantId,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
    } catch (e) {
        console.error("[AppApi][Exception] " + e);
    }
}