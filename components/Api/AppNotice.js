import axios from "axios";
import {API_URL} from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getLatestNotice = async () => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");

        const response = await axios.get(API_URL + "/notice",
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
        return response.data;
    } catch (e) {
        console.error("[AppApi][Exception] getLatestFeedbackPreview() : " + e);
        return undefined;
    }
}