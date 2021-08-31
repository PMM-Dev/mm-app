import React from "react";
import styled from "styled-components";
import constants from '../../constants'
import BackButton from "./BackButton";

const WriteReviewHeader = ({ navigation, email, restaurantId }) => {
    return (
        <>
            <BackButton goBack={() => navigation.goBack()} />
            <WriteButton onPress={() => {}}>
                <WriteText>완료</WriteText>
            </WriteButton>
        </>
    );
};

const WriteButton = styled.TouchableOpacity`
  width: ${constants.vw(9)}px;
  height: ${constants.vw(9)}px;
  justify-content: center;
  align-items: center;
  padding-bottom: ${constants.vh(0.5)}px;;
`

const WriteText = styled.Text``

export default WriteReviewHeader;
