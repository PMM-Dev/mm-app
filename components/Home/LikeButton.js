import React, { useState } from "react";
import styled from "styled-components";
import { EMPTYHEART, FULLHEART } from "../../image";
import constants from "../../constants";
import {
  appendLikeRestaurant,
  subtractLikeRestaurant,
} from "../Api/AppMemberApi";
import { useProfile } from "../AuthContext";

const LikeButton = ({ restaurantId, size, isLikeButtonPressed }) => {
  const { email } = useProfile();
  const [isLike, setIsLike] = useState(isLikeButtonPressed);

  const pressLike = async () => {
    if (isLike) {
      setIsLike(false);
      await subtractLikeRestaurant(restaurantId);
    } else {
      setIsLike(true);
      await appendLikeRestaurant(restaurantId);
    }
  };

  return (
    <Button onPress={pressLike} size={size}>
      {isLike ? <Icon source={FULLHEART} /> : <Icon source={EMPTYHEART} />}
    </Button>
  );
};

const Button = styled.TouchableOpacity`
  width: ${constants.vw(9)}px;
  height: ${constants.vw(9)}px;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.Image`
  width: ${(props) => (props.size ? constants.vw(size) : constants.vw(6))}px;
  height: ${(props) => (props.size ? constants.vw(size) : constants.vw(6))}px;
  resize-mode: contain;
`;

export default LikeButton;
