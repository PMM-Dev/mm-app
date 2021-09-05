import React from "react";
import { COMMENT_PROFILE } from "../../../image";
import StarMaker from "../../Map/StarMaker";
import styled from "styled-components";
import constants from "../../../constants";

const Review = ({ review }) => {
  return (
    <Content>
      <ReviewInfo>
        <ProfileImage source={COMMENT_PROFILE} />
        <NameAndGradeView>
          <AuthorNameButton onPress={() => {}}>
            <AuthorNameText>{review.authorEmail}</AuthorNameText>
          </AuthorNameButton>
          <StarMaker grade={review.grade} size={constants.vw(5)} />
        </NameAndGradeView>
      </ReviewInfo>
      <ReviewText>{review.description}</ReviewText>
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

const AuthorNameButton = styled.TouchableOpacity``;

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

export default Review;
