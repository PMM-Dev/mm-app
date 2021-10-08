import React from "react";
import BackButton from "./BackButton";
import LikeButton from "../Home/LikeButton";
import {appendLikeRestaurant, subtractLikeRestaurant} from "../Api/AppMemberApi";

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
        targetId={restaurantId}
        isLikeButtonPressed={isLikeButtonPressed}
        appendLikeRequest={appendLikeRestaurant}
        subtractLikeRequest={subtractLikeRestaurant}
        setLikeNum={setLikeNum}
        size={10}
        iconSizeRatio={60}
      />
    </>
  );
};

export default RestaurantHeaderMenu;
