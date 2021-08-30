import React from "react";
import styled from "styled-components";
import constants from "../../constants";
import BackButton from "./BackButton";
import SearchButton from "./SearchButton";
import LikeButton from "../Home/LikeButton";

const RestaurantHeaderMenu = ({ navigation, email, restaurantId }) => {
  return (
    <>
      <BackButton goBack={() => navigation.goBack()} />
        <LikeButton email={email} restaurantId={restaurantId} />
    </>
  );
};

const HeartImg = styled.Image`
  height: 100%;
  width: 100%;
  resize-mode: cover;
`;
export default RestaurantHeaderMenu;
