import React from "react";
import styled from "styled-components";
import { IMG_ICON, SHARE_BT, LIKE_BT} from "../../../image";
import constants from "../../../constants";

const PostCard = ({data, image}) => {
    return (
        <PostCardView>
            <PostContent >
                <PostCardImageAndTitle>
                    {data.image !== undefined ?
                        <PostCardImage source = {IMG_ICON}/>: <></> }
                    <PostCardTitle>{data.Title}</PostCardTitle>
                </PostCardImageAndTitle>
                <PostCardExplanation>
                    <PostCardExplanationText>{data.ID} | 조회수 : {data.visitNum} | 추천 : {data.recommendNum}</PostCardExplanationText>
                    <PostCardExplanationDate>{data.date}</PostCardExplanationDate>
                </PostCardExplanation>
            </PostContent>
            <ImageWrapper>
                {image.map((element, key) => (
                    <PostImage source={element} key = {key}/>
                ))}</ImageWrapper>
            <ButtonList>
                <ShareButton>
                    <ShareButtonImage source = {SHARE_BT}/>
                </ShareButton>
                <LikeButton>
                    <LikeButtonImage source = {LIKE_BT}/>
                </LikeButton>
            </ButtonList>
        </PostCardView>
    );
};


const ButtonList = styled.View`
  flex-direction: row;
  background-color: ${(props) => props.theme.backgroundWhite};
  padding-top: ${constants.vh(3)}px;
  margin-bottom : ${constants.vh(2)}px;
`;

const ShareButton = styled.TouchableOpacity`
`;

const LikeButton = styled.TouchableOpacity`
  margin-left: ${constants.vw(2)}px;
`;

const ShareButtonImage = styled.Image`
  height : ${constants.vw(5)}px;
  width : ${constants.vw(12)}px;
  border-radius: ${constants.vw(1)}px;;
`;

const LikeButtonImage = styled.Image`
  height : ${constants.vw(5)}px;
  width : ${constants.vw(12)}px;
  border-radius: ${constants.vw(1)}px;;
`;

const ImageWrapper = styled.View`
  padding-top: ${constants.vh(2)}px;
`;


const PostImage = styled.Image`
  width: ${constants.vw(50)}px;
  height: ${constants.vw(50)}px;
  margin-top:${constants.vh(1)}px ;
`;

const PostCardExplanationDate = styled.Text`
  ${(props) => props.theme.NanumGothicBoldFont};
  font-size: ${constants.vw(2.5)}px;
`;

const PostCardExplanationText = styled.Text`
  ${(props) => props.theme.NanumGothicBoldFont};
  font-size: ${constants.vw(2.5)}px;
  width : 90%;
`;

const PostCardExplanation = styled.View`
  flex-direction: row;
  margin-top: ${constants.vh(1)}px;
`;

const PostCardTitle = styled.Text`
  ${(props) => props.theme.NanumGothicBoldFont};
  font-size: ${constants.vw(4)}px;
`;

const PostContent = styled.View`
  margin-top: ${constants.vh(1)}px; 
  width : 90%;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundWhite};
`

const PostCardView = styled.View`
  width : 100%;
  margin-top: ${constants.vh(1)}px; 
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundWhite};
  padding-left : 5%;
`;

const PostCardImageAndTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;

const PostCardImage = styled.Image`
  height: ${constants.vw(4)}px;
  width : ${constants.vw(5)}px;
`;

export default PostCard;
