import axios from "axios";
import { API_URL } from "@env";

export const getRestaurantsByGenre = async (genre) => {
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

export const getRestaurantComments = async (id) => {
  try {
    const response = await axios.get(
      API_URL + "/api/restaurant/" + id + "/review"
    );
    return response.data;
  } catch (e) {
    console.log("[AppApi][Exception] " + e);
    return [];
  }
};

export const postRestaurantComment = async (review, userEmail, id) => {
  try {
    const response = await axios.post(
      API_URL + "/api/restaurant/" + id + "/review",
      {
        authorEmail: userEmail,
        description: review,
        grade: 4,
      }
    );
    return response;
  } catch (e) {
    console.log("[AppApi][Exception] " + e);
    return [];
  }
};
