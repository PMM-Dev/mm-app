import axios from "axios";
import { API_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getPost = async () => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const response = await axios.get(API_URL + "/post", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return {data : response?.data, status : response?.status};
    } catch (e) {
        console.error("[AppApi][Exception] " + e);
        return {data : e.response?.data, status : e.response?.status};
    }
};

export const getPostById = async (id) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const response = await axios.get(API_URL + "/post/" + id, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return {data : response?.data, status : response?.status};
    } catch (e) {
        console.error("[AppApi][Exception] " + e);
        return {data : e.response?.data, status : e.response?.status};;
    }
};

export const getPostPreview = async () => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const response = await axios.get(API_URL + "/post/preview", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return {data : response?.data, status : response?.status};
    } catch (e) {
        console.error("[AppApi][Exception] " + e);
        return {data : e.response?.data, status : e.response?.status};
    }
};

export const getPostComment = async (ID) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const response = await axios.get(API_URL + "/post/" + ID + "/comment", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return {data : response?.data, status : response?.status};
    } catch (e) {
        console.error("[AppApi][Exception] " + e);
        return {data : e.response?.data, status : e.response?.status};
    }
};

export const deletePost = async (ID) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        await axios.delete(API_URL + "/post/" + ID, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
    } catch (e) {
        console.error("[AppApi][Exception] " + e);
    }
};

export const deletePostComment = async (ID) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        await axios.delete(API_URL + "/post/comment/" + ID, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
    } catch (e) {
        console.error("[AppApi][Exception] " + e);
    }
};

export const appendLikePost = async (Id) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const {data,status} = await axios.put(
            API_URL + "/post/" + Id + "/like",
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

export const subtractLikePost = async (Id) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        await axios.delete(API_URL + "/post/" + Id + "/like", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
    } catch (e) {
        console.error("[AppApi][Exception] " + e);
    }
};

export const getpostComment = async (content, id) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const response = await axios.post(API_URL + "/post/" + id + "/comment",
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
        console.error("[AppApi][Exception] postComment() : " + e);
        return {data : e.response?.data, status : e.response?.status};
    }
};

export const postPost = async (form) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const response = await axios.post(API_URL + "/post",
            form,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
        return {data : response?.data, status : response?.status};
    } catch (e) {
        console.error("[AppApi][Exception] postComment() : " + e);
        return {data : e.response?.data, status : e.response?.status};
    }
};


export const putPost = async (Id, form) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const response = await axios.put(API_URL + "/post/" + Id,
            form,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
        return {data : response?.data, status : response?.status};
    } catch (e) {
        console.error("[AppApi][Exception] " + e);
        return {data : e.response?.data, status : e.response?.status};
    }
};


export const postReport = async (postId) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");

        const response = await axios.post(API_URL + "/post/" + postId + "/report",
            {
                "postId": postId
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


export const getPostImageFileName = async (id, index) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const response = await axios.get(
            API_URL + "/image/post/" + id + "/" + index + "/fileName",
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        return {data : response?.data, status : response?.status};
    } catch (e) {
        console.error("[AppApi][Exception] failed getRestaurantReviewImageFileName()" + e);
        return {data : e.response?.data, status : e.response?.status};
    }
};