import React from "react";
import BackButton from "./BackButton";
import LikeButton from "../Home/LikeButton";

const RestaurantHeaderMenu = ({navigation, email, restaurantId}) => {
    return (
        <>
            <BackButton goBack={() => navigation.goBack()}/>
            <LikeButton email={email} restaurantId={restaurantId}/>
        </>
    );
};

export default RestaurantHeaderMenu;
