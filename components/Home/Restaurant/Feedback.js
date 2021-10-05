import React from "react";
import { COMMENT_PROFILE } from "../../../image";
import StarMaker from "../../StarMaker";
import styled from "styled-components";
import constants from "../../../constants";

const Feedback = ({ feedback }) => {
  return (
    <Content>
      <ReviewInfo>
        <ProfileImage source={COMMENT_PROFILE} />
        <NameAndGradeView>
          <AuthorNameText>{feedback.authorName}</AuthorNameText>
          <CreatedDateText>{feedback.createdDate}</CreatedDateText>
        </NameAndGradeView>
      </ReviewInfo>
      <ReviewText>{feedback.content}</ReviewText>
    </Content>
  );
};

const Content = styled.View`
  width: 100%;
  margin-bottom: ${constants.vw(7)}px;
`;

const ReviewInfo = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: ${constants.vw(3)}px;
`;

const NameAndGradeView = styled.View`
  justify-content: center;
  margin-left: ${constants.vw(3.5)}px;
`;

const CreatedDateText = styled.Text`
  margin-top: ${constants.vw(2)}px;
  ${(props) => props.theme.NanumSquareBFont}
  color: ${(props) => props.theme.fontBlack};
  font-size: ${constants.vw(2.8)}px;
`;

const AuthorNameText = styled.Text`
  ${(props) => props.theme.NanumSquareBFont}
  color: ${(props) => props.theme.fontBlack};
  font-size: ${constants.vw(3.5)}px;
`;

const ProfileImage = styled.Image`
  height: ${constants.vw(12)}px;
  width: ${constants.vw(12)}px;
`;

const ReviewText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  color: ${(props) => props.theme.fontBlack};
  font-size: ${constants.vw(4)}px;
`;

export default Feedback;
