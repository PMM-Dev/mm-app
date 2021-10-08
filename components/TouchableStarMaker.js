import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {EMPTYSTAR, FULLSTAR, HALFSTAR} from "../image";

const TouchableStarMaker = ({grade, setGrade, size, iconSizeRatio}) => {

    const [currentGrade, setCurrentGrade] = useState(0);

    const handleStarSource = (standard) => {
        const gap = currentGrade - standard;
        if (gap >= 1) {
            return FULLSTAR;
        } else if (gap === 0.5) {
            return HALFSTAR;
        } else {
            return EMPTYSTAR;
        }
    }

    const handleStarPress = (curGrade) => {
        setCurrentGrade(curGrade);
        setGrade(curGrade);
    }

    useEffect(() => {
        if (grade === undefined) {
            return;
        }

        setCurrentGrade(grade);
    }, [grade])

    return (
        <Stars>
            <StarWrapper size={size}>
                <Star source={handleStarSource(0)} iconSizeRatio={iconSizeRatio}/>
                <StarLeftPartButton onPress={() => handleStarPress(0.5)} />
                <StarRightPartButton onPress={() => handleStarPress(1)} />
            </StarWrapper>
            <StarWrapper size={size}>
                <Star source={handleStarSource(1)} iconSizeRatio={iconSizeRatio}/>
                <StarLeftPartButton onPress={() => handleStarPress(1.5)} />
                <StarRightPartButton onPress={() => handleStarPress(2)} />
            </StarWrapper>
            <StarWrapper size={size}>
                <Star source={handleStarSource(2)} iconSizeRatio={iconSizeRatio}/>
                <StarLeftPartButton onPress={() => handleStarPress(2.5)} />
                <StarRightPartButton onPress={() => handleStarPress(3)} />
            </StarWrapper>
            <StarWrapper size={size}>
                <Star source={handleStarSource(3)} iconSizeRatio={iconSizeRatio}/>
                <StarLeftPartButton onPress={() => handleStarPress(3.5)} />
                <StarRightPartButton onPress={() => handleStarPress(4)} />
            </StarWrapper>
            <StarWrapper size={size}>
                <Star source={handleStarSource(4)} iconSizeRatio={iconSizeRatio}/>
                <StarLeftPartButton onPress={() => handleStarPress(4.5)} />
                <StarRightPartButton onPress={() => handleStarPress(5)} />
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

const StarLeftPartButton = styled.TouchableOpacity`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 50%;
`

const StarRightPartButton = styled.TouchableOpacity`
  position: absolute;
  top: 0px;
  right: 0px;
  height: 100%;
  width: 50%;
`

export default TouchableStarMaker;
