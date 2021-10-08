import axios from "axios";
import {API_URL} from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getFeedbacksOrderByCreatedDateDesc = async () => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");

        const response = await axios.get(API_URL + "/report/orderBy/createdDateDesc",
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
        return response.data;
    } catch (e) {
        console.error("[AppApi][Exception] getFeedbacksOrderByCreatedDateDesc() : " + e);
        return undefined;
    }
};

export const getFeedbacksOrderByLikeCountDesc = async () => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");

        const response = await axios.get(API_URL + "/report/orderBy/likeCountDesc",
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
        return response.data;
    } catch (e) {
        console.error("[AppApi][Exception] getFeedbacksOrderByLikeCountDesc() : " + e);
        return undefined;
    }
};

export const postFeedback = async (content) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");

        const response = await axios.post(API_URL + "/report",
            {
                "content": content
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
        return response.data;
    } catch (e) {
        console.error("[AppApi][Exception] postFeedback() : " + e);
        return undefined;
    }
};

export const deleteFeedback = async (reportId) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");

        const response = await axios.delete(API_URL + "/report/" + reportId,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
        return response.data;
    } catch (e) {
        console.error("[AppApi][Exception] deleteFeedback() : " + e);
        return undefined;
    }
};