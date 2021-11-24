import axios from "axios";
import {API_URL} from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getLatestFeedbackPreview = async () => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");

        const response = await axios.get(API_URL + "/feedback/preview",
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
        return {data : response?.data, status : response?.status};
    } catch (e) {
        console.error("[AppApi][Exception] getLatestFeedbackPreview() : " + e);
        return {data : e.response?.data, status : e.response?.status};
    }
}

export const getFeedbacksOrderByCreatedDateDesc = async () => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");

        const response = await axios.get(API_URL + "/feedback/orderBy/createdDateDesc",
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
        return {data : response?.data, status : response?.status};
    } catch (e) {
        console.error("[AppApi][Exception] getFeedbacksOrderByCreatedDateDesc() : " + e);
        return {data : e.response?.data, status : e.response?.status};
    }
};

export const getFeedbacksOrderByLikeCountDesc = async () => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");

        const response = await axios.get(API_URL + "/feedback/orderBy/likeCountDesc",
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
        return {data : response?.data, status : response?.status};
    } catch (e) {
        console.error("[AppApi][Exception] getFeedbacksOrderByLikeCountDesc() : " + e);
        return {data : e.response?.data, status : e.response?.status};
    }
};

export const postFeedback = async (content) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");

        const response = await axios.post(API_URL + "/feedback",
            {
                "content": content
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
        return {data : response?.data, status : response?.status};
    } catch (e) {
        console.error("[AppApi][Exception] postFeedback() : " + e);
        return {data : e.response?.data, status : e.response?.status};
    }
};

export const deleteFeedback = async (feedbackId) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");

        const response = await axios.delete(API_URL + "/feedback/" + feedbackId,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
        return {data : response?.data, status : response?.status};
    } catch (e) {
        console.error("[AppApi][Exception] deleteFeedback() : " + e);
        return {data : e.response?.data, status : e.response?.status};
    }
};