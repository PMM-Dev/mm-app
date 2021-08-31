import axios from "axios";
import { API_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getRestaurants = async () => {
  try {
    const token = await AsyncStorage.getItem("@jwtToken");
    const response = await axios.get(API_URL + "/api/restaurant", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (e) {
    console.error("[AppApi][Exception] " + e);
    return [];
  }
};

export const getRestaurantsByGenre = async (genre) => {
  try {
    const token = await AsyncStorage.getItem("@jwtToken");
    const response = await axios.get(
      API_URL + "/api/restaurant/condition" + "?type=" + genre,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (e) {
    console.error("[AppApi][Exception] " + e);
    return [];
  }
};

export const getRestaurantsById = async (id) => {
    try {
        const token = await AsyncStorage.getItem("@jwtToken");
        const response = await axios.get(
            API_URL + "/api/restaurant/" + id,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        return response.data;
    } catch (e) {
        console.error("[AppApi][Exception] " + e);
        return [];
    }
}

export const getRestaurantReviews = async (id) => {
    try {
        const token = await AsyncStorage.getItem("@jwtToken");
        const response = await axios.get(
            API_URL + "/api/restaurant/" + id + "/review",
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
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
        const token = await AsyncStorage.getItem("@jwtToken");
        const response = await axios.post(
            API_URL + "/api/restaurant/" + restaurantId + "/review",
            {
                authorEmail: userEmail,
                description: content,
                grade: grade,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        return response.data;
    } catch (e) {
        console.error("[AppApi][Exception] " + e);
        return undefined;
    }
};
