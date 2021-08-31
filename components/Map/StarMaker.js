import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {EMPTYSTAR, FULLSTAR, HALFSTAR} from "../../image";

const StarMaker = ({grade, size, starRatio}) => {

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
                <Star source={handleStarSource(0)} starRatio={starRatio}/>
            </StarWrapper>
            <StarWrapper size={size}>
                <Star source={handleStarSource(1)} starRatio={starRatio}/>
            </StarWrapper>
            <StarWrapper size={size}>
                <Star source={handleStarSource(2)} starRatio={starRatio}/>
            </StarWrapper>
            <StarWrapper size={size}>
                <Star source={handleStarSource(3)} starRatio={starRatio}/>
            </StarWrapper>
            <StarWrapper size={size}>
                <Star source={handleStarSource(4)} starRatio={starRatio}/>
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
  height: ${(props) => props.starRatio ? props.starRatio : 100}%;
  width: ${(props) => props.starRatio ? props.starRatio : 100}%;
`;

export default StarMaker;
