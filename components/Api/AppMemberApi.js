import axios from "axios";
import { API_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getMyMemberInfo = async (savedAccesstoken) => {
  try {
    let accessToken;
    if (savedAccesstoken === undefined || savedAccesstoken === "") {
      accessToken = await AsyncStorage.getItem("@jwtAccessToken");
    } else {
      accessToken = savedAccesstoken;
    }

    const response = await axios.get(API_URL + "/member/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (e) {
    console.error("[AppApi][Exception] getMyMemberInfo : " + e);
    return undefined;
  }
};

export const appendLikeRestaurant = async (restaurantId) => {
  try {
    const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
    await axios.put(
      API_URL + "/member/like/" + restaurantId,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  } catch (e) {
    console.error("[AppApi][Exception] " + e);
  }
};

export const subtractLikeRestaurant = async (restaurantId) => {
  try {
    const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
    await axios.delete(API_URL + "/member/like/" + restaurantId, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (e) {
    console.error("[AppApi][Exception] " + e);
  }
};