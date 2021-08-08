import axios from "axios";
import { API_URL } from "@env";

export const getRestaurantList = async (genre) => {
  try {
    const response = await axios.get(
      API_URL + "/api/restaurant/condition" + "?type=" + genre
    );
    return response.data;
  } catch (e) {
    console.log("[AppApi][Exception] " + e);
    return [];
  }
};

export const getRestaurantComment = async (id) => {
  try {
    const response = await axios.get(
      API_URL + "/api/restaurant/" + id + "/review/list"
    );
    return response.data;
  } catch (e) {
    console.log("[AppApi][Exception] " + e);
    return [];
  }
};
