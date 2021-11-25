import React from "react";
import styled from "styled-components";
import { IMG_ICON, SHARE_BT, LIKE_BT} from "../../../image";
import constants from "../../../constants";
import {appendLikePost, subtractLikePost} from "../../Api/AppPostApi";
import LikeButton from "../LikeButton";
import {useState} from "react";
import { API_URL } from "@env";

const PostCard = ({data}) => {
    const [likeNum,setLikeNum] = useState(data.likeCount)
    return (
        <PostCardView>
            <PostContent >
                <PostCardImageAndTitle>
                    <PostCardTitle>{data.title}</PostCardTitle>
                    {data.existImage === true ?
                        <PostCardImage source = {IMG_ICON}/>: <></> }
                </PostCardImageAndTitle>
                <PostCardExplanation>
                    <PostCardExplanationText>{data.authorName} | 조회수 : {data.viewCount} | 추천 : {likeNum}</PostCardExplanationText>
                    <PostCardExplanationDate>{data.createDate}</PostCardExplanationDate>
                </PostCardExplanation>
                <PostContentContent>{data.content}</PostContentContent>
            </PostContent>
            <ImageWrapper>
                {[...Array(data.imagesCount)].map((num, key) =>
                    <PostImage source={{uri : `${API_URL}/image/post/${data.id}/${key}`}} key = {key}/>
                )}
            </ImageWrapper>
            <ButtonList>
                {/*<ShareButton>
                    <ShareButtonImage source = {SHARE_BT}/>
                </ShareButton>*/}
                <LikeButton
                    targetId={data.id}
                    isLikeButtonPressed={data.didLike}
                    setLikeNum={setLikeNum}
                    size={10}
                    iconSizeRatio={60}
                    appendLikeRequest={appendLikePost}
                    subtractLikeRequest={subtractLikePost}
                />
            </ButtonList>
        </PostCardView>
    );
};

const PostContentContent = styled.Text`
  margin-top: ${constants.vh(5)}px;
  width : 100%;
  background-color: ${(props) => props.theme.backgroundWhite};
  ${(props) => props.theme.NanumGothicBoldFont};
  font-size: ${constants.vw(3.3)}px;
`;

const ButtonList = styled.View`
  flex-direction: row;
  background-color: ${(props) => props.theme.backgroundWhite};
  padding-top: ${constants.vh(3)}px;
  margin-bottom : ${constants.vh(2)}px;
  margin-left : 45%;
`;

const ShareButton = styled.TouchableOpacity`
`;

const ShareButtonImage = styled.Image`
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
  resize-mode : contain;
`;

const PostCardExplanationDate = styled.Text`
  ${(props) => props.theme.NanumGothicBoldFont};
  font-size: ${constants.vw(2.5)}px;
`;

const PostCardExplanationText = styled.Text`
  ${(props) => props.theme.NanumGothicBoldFont};
  font-size: ${constants.vw(2.5)}px;
  width : 80%;
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
  margin-left : ${constants.vw(2)}px;
`;

export default PostCard;
