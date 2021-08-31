import React from "react";
import styled from "styled-components";
import constants from '../../constants'
import BackButton from "./BackButton";

const WriteReviewHeader = ({ navigation, onPressRightButton }) => {

    return (
        <>
            <BackButton goBack={() => navigation.goBack()} />
            <PostButton onPress={() => {
                onPressRightButton();
                navigation.goBack();
            }}>
                <WriteText>완료</WriteText>
            </PostButton>
        </>
    );
};

const PostButton = styled.TouchableOpacity`
  width: ${constants.vw(9)}px;
  height: ${constants.vw(9)}px;
  justify-content: center;
  align-items: center;
  padding-bottom: ${constants.vh(0.5)}px;;
`

const WriteText = styled.Text``

export default WriteReviewHeader;
