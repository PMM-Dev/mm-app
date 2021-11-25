import React from "react";
import BackButton from "./BackButton";
import SearchButton from "./SearchButton";
import styled from "styled-components"
import {DOT_BT} from "../../image";
import constants from "../../constants";

const PostListHeaderMenu = ({ openOption, navigation, routeName }) => {
    return (
        <>
            <BackButton goBack={() => navigation.goBack()} />
            <DotButton onPress={()=> {
                openOption()
            }}><DotImage source={DOT_BT}/></DotButton>
        </>
    );
};

const DotButton = styled.TouchableOpacity`
`;

const DotImage = styled.Image`
  height : ${constants.vw(6)}px;
  width : ${constants.vw(1.5)}px;
  margin-right: ${constants.vw(3)}px;
  margin-bottom:  ${constants.vw(1)}px;
`;

export default PostListHeaderMenu;
