import React, { useState } from "react";
import styled from "styled-components";
import { EMPTYHEART, FULLHEART } from "../../image";
import constants from "../../constants";
import {
  appendLikeRestaurant,
  subtractLikeRestaurant,
} from "../Api/AppMemberApi";
import { useProfile } from "../AuthContext";

const LikeButton = ({
  restaurantId,
  size,
  isLikeButtonPressed,
  setLikeNum,
}) => {
  const [isLike, setIsLike] = useState(isLikeButtonPressed);

  const pressLike = async () => {
    if (isLike) {
      setIsLike(false);
      setLikeNum((prev) => prev - 1);
      await subtractLikeRestaurant(restaurantId);
    } else {
      setIsLike(true);
      await appendLikeRestaurant(restaurantId);
      setLikeNum((prev) => prev + 1);
    }
  };

  return (
    <Button onPress={pressLike} size={size}>
      {isLike ? <Icon source={FULLHEART} /> : <Icon source={EMPTYHEART} />}
    </Button>
  );
};

const Button = styled.TouchableOpacity`
  width: ${(props) => (props.size ? constants.vw(props.size) : constants.vw(7))}px;
  height: ${(props) => (props.size ? constants.vw(props.size) : constants.vw(7))}px;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: contain;
`;

export default LikeButton;
