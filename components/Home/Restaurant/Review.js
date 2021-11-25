import React from "react";
import {COMMENT_PROFILE, SETTING_GUEST_PORTRAIT} from "../../../image";
import StarMaker from "../../StarMaker";
import styled from "styled-components";
import constants from "../../../constants";
import {useProfile} from "../../AuthContext";
import { API_URL } from "@env";

const Review = ({mine, review, selectImage}) => {
    return (
        <Holder mine={mine}>
            <InfoView>
                <Portrait>
                    <PortraitImage
                        source={
                            review.authorPicture === undefined
                                ? SETTING_GUEST_PORTRAIT
                                : {
                                    uri: review.authorPicture,
                                }
                        }
                        resizeMode={"cover"}
                    />
                </Portrait>
                <RightInfoView>
                    <TextInfoView>
                        <AuthorNameButton onPress={() => {}}>
                            <AuthorNameText>{review.authorName}</AuthorNameText>
                        </AuthorNameButton>
                        <DateText>{review.createdDate}</DateText>
                    </TextInfoView>
                    <StarMaker grade={review.grade} size={constants.vw(5)}/>
                </RightInfoView>
            </InfoView>
            <ContentText>{review.description}</ContentText>
            {
                review.existImage === true ?
                    review.id === -1 ? <ReviewImage source={{uri : selectImage}}/>
                        : <ReviewImage source={{uri : `${API_URL}/image/restaurant/review/${review.id}`}}/>
                    :
                <></>
            }

        </Holder>
    );
};

const ReviewImage = styled.Image`
  width: ${constants.vw(84)}px;
  height: ${constants.vw(84)}px;
  margin-top:${constants.vh(1)}px ;
  resize-mode : contain;
`;

const Holder = styled.View`
  width: 100%;
  margin-bottom: ${(props) => props.mine ? constants.vw(4) : constants.vw(7)}px;
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

const Portrait = styled.View`
  height: ${constants.vw(11.3)}px;
  width: ${constants.vw(11.3)}px;
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

export default Review;
