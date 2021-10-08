import axios from "axios";
import {API_URL} from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getRestaurants = async () => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const response = await axios.get(API_URL + "/restaurant/location/list", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (e) {
        console.error("[AppApi][Exception] failed getRestaurants() " + e);
        return [];
    }
};

export const getRestaurantsByID = async (id) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const response = await axios.get(API_URL + "/restaurant/" + id, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (e) {
        console.error("[AppApi][Exception] failed getRestaurantsByType()" + e);
        return [];
    }
};

export const getRestaurantsByType = async (type) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const response = await axios.get(API_URL + "/restaurant/type/" + type, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (e) {
        console.error("[AppApi][Exception] failed getRestaurantsByType()" + e);
        return [];
    }
};

export const getRestaurantsByTypeOrderByPriceAsc = async (type) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const response = await axios.get(API_URL + "/restaurant/type/" + type + "/orderBy/priceAsc", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (e) {
        console.error("[AppApi][Exception] failed getRestaurantsByTypeOrderByPriceAsc()" + e);
        return [];
    }
}

export const getRestaurantsByTypeOrderByPriceDesc = async (type) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const response = await axios.get(API_URL + "/restaurant/type/" + type + "/orderBy/priceDesc", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (e) {
        console.error("[AppApi][Exception] failed getRestaurantsByTypeOrderByPriceDesc()" + e);
        return [];
    }
}

export const getRestaurantsByTypeOrderByAverageGradeDesc = async (type) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const response = await axios.get(API_URL + "/restaurant/type/" + type + "/orderBy/averageGradeDesc", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (e) {
        console.error("[AppApi][Exception] failed getRestaurantsByTypeOrderByReviewCountDesc()" + e);
        return [];
    }
}

export const getRestaurantsByTypeOrderByReviewCountDesc = async (type) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const response = await axios.get(API_URL + "/restaurant/type/" + type + "/orderBy/reviewCountDesc", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (e) {
        console.error("[AppApi][Exception] failed getRestaurantsByTypeOrderByReviewCountDesc()" + e);
        return [];
    }
}

export const getRestaurantsByTypeOrderByLikeCountDesc = async (type) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const response = await axios.get(API_URL + "/restaurant/type/" + type + "/orderBy/likeCountDesc", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (e) {
        console.error("[AppApi][Exception] failed getRestaurantsByTypeOrderByLikeCountDesc()" + e);
        return [];
    }
}

export const getRestaurantsByDeliverable = async (type) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const response = await axios.get(API_URL + "/restaurant/deliverable", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (e) {
        console.error("[AppApi][Exception] failed getRestaurantsByDeliverable()" + e);
        return [];
    }
};

export const getRestaurantsByRank = async (genre) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const response = await axios.get(API_URL + "/restaurant/rank", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (e) {
        console.error("[AppApi][Exception] failed getRestaurantsByRank()" + e);
        return [];
    }
};

export const getRestaurantByGacha = async (
    typeList,
    priceList,
    locationList
) => {
    let conditionUrl = "?";
    if (typeList.length !== 0) {
        conditionUrl += "type=" + typeList.join() + "&";
    }
    if (priceList.length !== 0) {
        conditionUrl += "price=" + priceList.join() + "&";
    }
    if (locationList.length !== 0) {
        conditionUrl += "location=" + locationList.join();
    }

    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const response = await axios.get(
            API_URL + "/restaurant/condition" + conditionUrl,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );

        return response.data;
    } catch (e) {
        console.error("[AppApi][Exception] getRestaurantByGacha()" + e);
        return undefined;
    }
};

export const getRestaurantsById = async (id) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const response = await axios.get(API_URL + "/restaurant/" + id, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (e) {
        console.error("[AppApi][Exception] " + e);
        return [];
    }
};

export const getRestaurantReviews = async (id) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const response = await axios.get(
            API_URL + "/restaurant/" + id + "/review",
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        return response.data;
    } catch (e) {
        console.error("[AppApi][Exception] " + e);
        return [];
    }
};

export const getRestaurantReviewsOrderByCreatedDateDesc = async (id) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const response = await axios.get(
            API_URL + "/restaurant/" + id + "/review/orderBy/dateDesc",
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        return response.data;
    } catch (e) {
        console.error("[AppApi][Exception] " + e);
        return [];
    }
};

export const getRestaurantReviewsOrderByAverageGradeDesc = async (id) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const response = await axios.get(
            API_URL + "/restaurant/" + id + "/review/orderBy/gradeDesc",
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        return response.data;
    } catch (e) {
        console.error("[AppApi][Exception] " + e);
        return [];
    }
};

export const getRestaurantReviewsOrderByAverageGradeAsc = async (id) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const response = await axios.get(
            API_URL + "/restaurant/" + id + "/review/orderBy/gradeAsc",
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        return response.data;
    } catch (e) {
        console.error("[AppApi][Exception] " + e);
        return [];
    }
};

export const uploadMyReviewByRestaurantId = async (content, grade, restaurantId) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const response = await axios.post(
            API_URL + "/restaurant/" + restaurantId + "/review/me",
            {
                description: content,
                grade: grade,
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        return response.data;
    } catch (e) {
        console.error("[AppApi][Exception] " + e);
        return undefined;
    }
};

export const getMyReviewByRestaurantId = async (restaurantId) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const response = await axios.get(
            API_URL + "/restaurant/" + restaurantId + "/review/me",
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        return response.data;
    } catch (e) {
        console.error("[AppApi][Exception] failed getRestaurantsByRank()" + e);
        return undefined;
    }
};

export const updateMyReviewByRestaurantId = async (content, grade, restaurantId) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const response = await axios.put(
            API_URL + "/restaurant/" + restaurantId + "/review/me",
            {
                description: content,
                grade: grade,
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        return response.data;
    } catch (e) {
        console.error("[AppApi][Exception] failed updateMyReviewByRestaurantId() " + e);
        return undefined;
    }
}

export const deleteMyReviewByRestaurantId = async (restaurantId) => {
    try {
        const accessToken = await AsyncStorage.getItem("@jwtAccessToken");
        const response = await axios.delete(
            API_URL + "/restaurant/" + restaurantId + "/review/me",
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        return response.data;
    } catch (e) {
        console.error("[AppApi][Exception] failed deleteMyReviewByRestaurantId()" + e);
        return undefined;
    }
}
