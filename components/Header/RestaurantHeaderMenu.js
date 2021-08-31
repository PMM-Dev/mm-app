import React from "react";
import BackButton from "./BackButton";
import LikeButton from "../Home/LikeButton";

const RestaurantHeaderMenu = ({navigation, restaurantId}) => {
    return (
        <>
            <BackButton goBack={() => navigation.goBack()}/>
            <LikeButton restaurantId={restaurantId}/>
        </>
    );
};

export default RestaurantHeaderMenu;
