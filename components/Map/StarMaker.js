import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {EMPTYSTAR, FULLSTAR, HALFSTAR} from "../../image";

const StarMaker = ({grade, size, starRatio}) => {
    const [starComponents, setStarComponents] = useState([]);
    useEffect(() => {
        const starStep = grade / 0.5;
        const fullStarCount = Math.floor(starStep / 2);
        let halfStarCount = 0;
        if (starStep % 2 === 1) {
            halfStarCount = 1;
        }
        const emptyStarCount = 5 - fullStarCount - halfStarCount;

        let stars = [];
        for (let i = 0; i < fullStarCount; i++) {
            stars.push(<Star source={FULLSTAR} starRatio={starRatio}/>)
        }
        for (let i = 0; i < halfStarCount; i++) {
            stars.push(<Star source={HALFSTAR} starRatio={starRatio}/>)
        }
        for (let i = 0; i < emptyStarCount; i++) {
            stars.push(<Star source={EMPTYSTAR} starRatio={starRatio}/>)
        }
        setStarComponents(stars);
    }, [])

    return (
        <Stars>
            {starComponents && starComponents.map((starComponent, key) =>
                <StarWrapper size={size}>
                    {starComponent}
                </StarWrapper>)}
        </Stars>
    )
};

const Stars = styled.View`
  width: 100%;
  height: 100%;
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
