import React, {useState} from "react";
import styled from "styled-components";
import {EMPTYHEART, FULLHEART} from "../../image";
import constants from "../../constants";

const LikeButton = ({
                        targetId,
                        isLikeButtonPressed,
                        setLikeNum,
                        appendLikeRequest,
                        subtractLikeRequest,
                        size,
                        iconSizeRatio
                    }) => {
    const [isLike, setIsLike] = useState(isLikeButtonPressed);

    const pressLike = async () => {
        if (isLike) {
            setIsLike(false);
            setLikeNum((prev) => prev - 1);
            await subtractLikeRequest(targetId);
        } else {
            setIsLike(true);
            await appendLikeRequest(targetId);
            setLikeNum((prev) => prev + 1);
        }
    };

    return (
        <Button onPress={pressLike} size={size}>
            {isLike ? <Icon source={FULLHEART} iconSizeRatio={iconSizeRatio}/> :
                <Icon source={EMPTYHEART} iconSizeRatio={iconSizeRatio}/>}
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
  height: ${(props) => props.iconSizeRatio ? props.iconSizeRatio : 100}%;
  width: ${(props) => props.iconSizeRatio ? props.iconSizeRatio : 100}%;
  resize-mode: contain;
`;

export default LikeButton;
