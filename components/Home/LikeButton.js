import React, {useState} from 'react';
import styled from "styled-components";
import {EMPTYHEART, FULLHEART} from "../../image";
import constants from "../../constants";
import {appendLikeRestaurant, subtractLikeRestaurant} from "../Api/AppUserApi";

const LikeButton = ({email, restaurantId, size}) => {
    const [isLike, setIsLike] = useState(false);

    const pressLike = async () => {
        if (isLike) {
            setIsLike(false);
            await subtractLikeRestaurant(email, restaurantId);
        } else {
            setIsLike(true);
            await appendLikeRestaurant(email, restaurantId);
        }
    }

    return (
        <Button onPress={pressLike} size={size}>
            {
                isLike ? (
                    <Icon source={FULLHEART}/>
                ) : (
                    <Icon source={EMPTYHEART}/>
                )
            }
        </Button>
    )
}

const Button = styled.TouchableOpacity`
  width: ${(props) => props.size ? constants.vw(size) : constants.vw(9)}px;
  height: ${(props) => props.size ? constants.vw(size) : constants.vw(9)}px;
  justify-content: center;
  align-items: center;
`

const Icon = styled.Image`
  width: 100%;
  resize-mode: contain;
`

export default LikeButton;