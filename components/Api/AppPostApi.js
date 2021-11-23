import axios from "axios";
import { API_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getPost = async () => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const {data, status} = await axios.get(API_URL + "/post", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return {data, status};
    } catch (e) {
        console.error("[AppApi][Exception] " + e);
        return [];
    }
};

export const getPostById = async (id) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const {data, status} = await axios.get(API_URL + "/post/" + id, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return {data, status};
    } catch (e) {
        console.error("[AppApi][Exception] " + e);
        return [];
    }
};

export const getPostPreview = async () => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const {data, status} = await axios.get(API_URL + "/post", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return {data, status};
    } catch (e) {
        console.error("[AppApi][Exception] " + e);
        return [];
    }
};

export const getPostComment = async (ID) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const {data, status} = await axios.get(API_URL + "/post/" + ID + "/comment", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return {data, status};
    } catch (e) {
        console.error("[AppApi][Exception] " + e);
        return [];
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
        const {data, status} = await axios.post(API_URL + "/post/" + id + "/comment",
            {
                "content": content
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
        return {data, status};
    } catch (e) {
        console.error("[AppApi][Exception] postComment() : " + e);
        return undefined;
    }
};