import axios from "axios";
import { API_URL, API_TOKEN } from "@env";

export const getRestaurantList = async (genre) => {
  try {
    const response = await axios.get(
      API_URL + "/api/restaurant/condition" + "?type=" + genre
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return [];
  }
};
