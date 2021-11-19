import React, {useState, useEffect, useRef} from "react";
import {useProfile} from "../../components/AuthContext";
import styled from "styled-components";
import constants from "../../constants";
import Header from "../../components/Header/Header";
import {TMP, SHARE_BT, LIKE_BT, SETTING_GUEST_PORTRAIT, IMG_ICON} from "../../image"


const PostWrite = ({route, navigation}) => {
    const {name: myName, picture: myPicture, email: myEmail} = useProfile();
    const [writingReviewContent, setWritingReviewContent] = useState("");
    return (
        <Screen>
            <Header
                route={route}
                navigation={navigation}
                title="게시물 작성"
            />
            <Content>
                <ReviewTextInput
                    value={writingReviewContent}
                    onChangeText={(text) => setWritingReviewContent(text)}
                    multiline={true}
                    placeholder="내용"
                ></ReviewTextInput>
            </Content>
        </Screen>
    );
};

const ReviewTextInput = styled.TextInput`
  width: 100%;
  height: 100%;
  text-align-vertical: top;
  font-size: ${constants.vh(1.75)}px;
  padding: 5% 5%;
`;

const Content = styled.View`
  width : 90%;
  border-top-color : ${(props) => props.theme.borderGray};
  border-top-width: 1px;
`;

const Screen = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.backgroundWhite};
`;


export default PostWrite;
