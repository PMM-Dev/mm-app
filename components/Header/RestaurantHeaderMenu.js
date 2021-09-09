import React from "react";
import BackButton from "./BackButton";
import LikeButton from "../Home/LikeButton";

const RestaurantHeaderMenu = ({
  navigation,
  restaurantId,
  isLikeButtonPressed,
}) => {
  return (
    <>
      <BackButton goBack={() => navigation.goBack()} />
      <LikeButton
        restaurantId={restaurantId}
        isLikeButtonPressed={isLikeButtonPressed}
      />
    </>
  );
};

export default RestaurantHeaderMenu;
