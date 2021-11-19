import React from "react";
import styled from "styled-components";
import {
    SETTING_GUEST_PORTRAIT
} from "../../../image";
import constants from "../../../constants";

const PostComment = ({data}) => {
    return (
        <SingleComment>
            <InfoView>
                <Portrait>
                    <PortraitImage
                        source={
                            data.authorPicture === undefined
                                ? SETTING_GUEST_PORTRAIT
                                : {
                                    uri: data.authorPicture,
                                }
                        }
                        resizeMode={"cover"}
                    />
                </Portrait>
                <RightInfoView>
                    <TextInfoView>
                        <AuthorNameButton onPress={() => {}}>
                            <AuthorNameText>{data.ID}</AuthorNameText>
                        </AuthorNameButton>
                    </TextInfoView>
                    <CommentButtons>
                        <ModifyButton>
                            <ModifyButtonText>수정</ModifyButtonText>
                        </ModifyButton>
                        <DeleteButton>
                            <DeleteButtonText>삭제</DeleteButtonText>
                        </DeleteButton>
                    </CommentButtons>
                </RightInfoView>
            </InfoView>
            <ContentText>{data.Title}</ContentText>
            <DateText>{data.date}</DateText>
        </ SingleComment>
    );
};


const InfoView = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: 3%;
`;

const RightInfoView = styled.View`
  margin-left: 2.2%;
  flex-direction: row;
  align-items: center;
  width: ${constants.vw(80)}px;
`;

const TextInfoView = styled.View`
  margin-left: 2%;
`;

const CommentButtons = styled.View`
  position: absolute;
  right : 0%;
  flex-direction: row;
`;

const ModifyButton = styled.TouchableOpacity`
  border : 1px;
  border-color : ${(props) => props.theme.backgroundDarkerGray};
  width: ${constants.vw(12)}px;
  height: ${constants.vh(3)}px;
`;

const DeleteButton = styled.TouchableOpacity`
  border : 1px;
  border-color : ${(props) => props.theme.backgroundDarkerGray};
  width: ${constants.vw(12)}px;
  height: ${constants.vh(3)}px;
`;

const ModifyButtonText = styled.Text`
  ${(props) => props.theme.NanumSquareBFont}
  color: ${(props) => props.theme.fontBlack};
  font-size: ${constants.vw(3.5)}px;
  text-align: center;
  line-height : ${constants.vh(3)}px;
`;

const DeleteButtonText = styled.Text`
  ${(props) => props.theme.NanumSquareBFont}
  color: ${(props) => props.theme.fontBlack};
  font-size: ${constants.vw(3.5)}px;
  text-align: center;
  line-height : ${constants.vh(3)}px;
`;

const AuthorNameButton = styled.TouchableOpacity`
  margin-right: 4%;
`;

const AuthorNameText = styled.Text`
  ${(props) => props.theme.NanumSquareBFont}
  color: ${(props) => props.theme.fontBlack};
  font-size: ${constants.vw(3.5)}px;
  height: ${constants.vw(4)}px;
  line-height : ${constants.vw(4)}px;
`;

const DateText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  color: ${(props) => props.theme.fontBlack};
  font-size: ${constants.vw(2.5)}px;
  margin-top : ${constants.vh(2)}px;
`

const Portrait = styled.View`
  height: ${constants.vw(10)}px;
  width: ${constants.vw(10)}px;
  border-radius: 1000px;
`;

const PortraitImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 1000px;
`;


const ContentText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  color: ${(props) => props.theme.fontBlack};
  font-size: ${constants.vw(3.5)}px;
  padding: 0px ${constants.vw(1)}px;
`;


const SingleComment = styled.View`
  margin-top : ${constants.vh(2)}px;
`;

export default PostComment;
