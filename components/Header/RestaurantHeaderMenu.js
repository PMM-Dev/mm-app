import React from "react";
import BackButton from "./BackButton";
import LikeButton from "../Home/LikeButton";

const RestaurantHeaderMenu = ({
  navigation,
  restaurantId,
  isLikeButtonPressed,
  setLikeNum,
}) => {
  return (
    <>
      <BackButton goBack={() => navigation.goBack()} />
      <LikeButton
        restaurantId={restaurantId}
        isLikeButtonPressed={isLikeButtonPressed}
        setLikeNum={setLikeNum}
        size={10}
        iconSizeRatio={60}
      />
    </>
  );
};

export default RestaurantHeaderMenu;
