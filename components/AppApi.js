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

// export const korLocationAPI = async (data) => {
//   try {
//     const response = await axios.get(
//       `https://maps.googleapis.com/maps/api/geocode/json?latlng=${data.latitude},${data.longitude}&key=AIzaSyAct8xhJo8qFy1biCWJ1gscUATnNnKxVQ0&language=ko`
//     );
//     return response.data.results[0].formatted_address;
//   } catch (e) {
//     console.log("[AppApi][Exception] " + e);
//     return [];
//   }
// };
