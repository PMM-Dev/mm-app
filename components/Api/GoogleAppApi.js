import axios from "axios";

export const korLocationAPI = async (data) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${data.latitude},${data.longitude}&key=AIzaSyAct8xhJo8qFy1biCWJ1gscUATnNnKxVQ0&language=ko`
    );
    return response.data.results[0].formatted_address;
  } catch (e) {
    console.log("[AppApi][Exception] " + e);
    return [];
  }
};
