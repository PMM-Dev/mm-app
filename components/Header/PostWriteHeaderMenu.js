import React from "react";
import BackButton from "./BackButton";
import SearchButton from "./SearchButton";
import styled from "styled-components"
import {DOT_BT} from "../../image";
import constants from "../../constants";

const PostWriteHeaderMenu = ({ navigation, routeName,writePost, isModify }) => {
    return (
        <>
            <BackButton goBack={() => navigation.goBack()} />
            <SendTextButton onPress={() => {
                writePost();
                //navigation.goBack();
            }}>
                {isModify ? <SendText>수정하기</SendText> : <SendText>작성하기</SendText>}
                </SendTextButton>
        </>
    );
};

const SendTextButton = styled.TouchableOpacity`
`;

const SendText = styled.Text`
  ${(props) => props.theme.NanumGothicBoldFont};
  font-size: ${constants.vw(4)}px;
  margin-bottom: ${constants.vw(2)}px;
`;

export default PostWriteHeaderMenu;
