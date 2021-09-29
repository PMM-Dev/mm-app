import axios from "axios";
import {API_URL} from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getRestaurants = async () => {
  try {
    const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
    const response = await axios.get(API_URL + "/restaurant/location/list", {
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
    const response = await axios.get(API_URL + "/restaurant/type/" + genre, {
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

export const getRestaurantByGacha = async (typeList, priceList, locationList) => {
    let conditionUrl = "?";
    if (typeList.length !== 0) {
        conditionUrl += "type=" + typeList.join() + "&";
    }
    if (priceList.length !== 0) {
        conditionUrl += "price=" + priceList.join() + "&";
    }
    if (locationList.length !== 0) {
        conditionUrl += "location=" + locationList.join();
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

export const postReview = async (content, grade, restaurantId) => {
  try {
    console.log(content);
    console.log(grade);
    const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
    console.log(API_URL + "/restaurant/" + restaurantId + "/review");
    const response = await axios.post(
      API_URL + "/restaurant/" + restaurantId + "/review",
      {
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
