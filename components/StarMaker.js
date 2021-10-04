import React from "react";
import styled from "styled-components";
import {EMPTYSTAR, FULLSTAR, HALFSTAR} from "../image";

const StarMaker = ({grade, size, iconSizeRatio}) => {

    const handleStarSource = (standard) => {
        const gap = grade - standard;
        if (gap >= 1) {
            return FULLSTAR;
        } else if (gap === 0.5) {
            return HALFSTAR;
        } else {
            return EMPTYSTAR;
        }
    }

    return (
        <Stars>
            <StarWrapper size={size}>
                <Star source={handleStarSource(0)} iconSizeRatio={iconSizeRatio}/>
            </StarWrapper>
            <StarWrapper size={size}>
                <Star source={handleStarSource(1)} iconSizeRatio={iconSizeRatio}/>
            </StarWrapper>
            <StarWrapper size={size}>
                <Star source={handleStarSource(2)} iconSizeRatio={iconSizeRatio}/>
            </StarWrapper>
            <StarWrapper size={size}>
                <Star source={handleStarSource(3)} iconSizeRatio={iconSizeRatio}/>
            </StarWrapper>
            <StarWrapper size={size}>
                <Star source={handleStarSource(4)} iconSizeRatio={iconSizeRatio}/>
            </StarWrapper>
        </Stars>
    )
};

const Stars = styled.View`
  flex-direction: row;
`;

const StarWrapper = styled.View`
  width: ${(props) => props.size ? props.size : 30}px;
  height: ${(props) => props.size ? props.size : 30}px;
  justify-content: center;
`;

const Star = styled.Image`
  height: ${(props) => props.iconSizeRatio ? props.iconSizeRatio : 100}%;
  width: ${(props) => props.iconSizeRatio ? props.iconSizeRatio : 100}%;
`;

export default StarMaker;
