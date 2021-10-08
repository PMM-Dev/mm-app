import React from "react";
import { COMMENT_PROFILE } from "../../../image";
import StarMaker from "../../StarMaker";
import styled from "styled-components";
import constants from "../../../constants";
import { useProfile } from "../../AuthContext";

const Review = ({ mine, review }) => {
  return (
    <Holder mine={mine}>
      <InfoView>
        <ProfileImage source={COMMENT_PROFILE} />
        <RightInfoView>
            <TextInfoView>
          <AuthorNameButton onPress={() => {}}>
            <AuthorNameText>{review.authorName}</AuthorNameText>
          </AuthorNameButton>
            <DateText>{review.createdDate}</DateText>
            </TextInfoView>
          <StarMaker grade={review.grade} size={constants.vw(5)} />
        </RightInfoView>
      </InfoView>
      <ContentText>{review.description}</ContentText>
    </Holder>
  );
};

const Holder = styled.View`
  width: 100%;
  margin-bottom: ${(props) => props.mine ? constants.vw(4): constants.vw(7)}px;
`;

const InfoView = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: 3%;
`;

const RightInfoView = styled.View`
  justify-content: center;
  margin-left: 2.2%;
`;

const TextInfoView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 2%;
  margin-bottom: 1.8%;
`;

const AuthorNameButton = styled.TouchableOpacity`
  margin-right: 4%;
`;

const AuthorNameText = styled.Text`
  ${(props) => props.theme.NanumSquareBFont}
  color: ${(props) => props.theme.fontBlack};
  font-size: ${constants.vw(3.5)}px;
`;

const DateText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  color: ${(props) => props.theme.fontBlack};
  font-size: ${constants.vw(2.5)}px;
`

const ProfileImage = styled.Image`
  height: ${constants.vw(12)}px;
  width: ${constants.vw(12)}px;
`;

const ContentText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  color: ${(props) => props.theme.fontBlack};
  font-size: ${constants.vw(3.5)}px;
`;

export default Review;
