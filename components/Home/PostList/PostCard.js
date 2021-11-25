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
                <ImageWrapper>
                    {[...Array(data.imagesCount)].map((num, key) =>
                        <PostImage source={{uri : `${API_URL}/image/post/${data.id}/${key}`}} key = {key}/>
                    )}
                </ImageWrapper>
            </PostContent>
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
  ${(props) => props.theme.NanumSquareRFont};
  width : 100%;
  margin-top: ${constants.vh(3)}px;
  background-color: ${(props) => props.theme.backgroundWhite};
  font-size: ${constants.vw(3.3)}px;
`;

const ButtonList = styled.View`
  flex-direction: row;
  background-color: ${(props) => props.theme.backgroundWhite};
  margin : ${constants.vh(0.7)}px 0px;
  margin-left : ${constants.vw(1)}px;
`;

const ShareButton = styled.TouchableOpacity`
`;

const ShareButtonImage = styled.Image`
  height : ${constants.vw(5)}px;
  width : ${constants.vw(12)}px;
  border-radius: ${constants.vw(1)}px;;
`;


const ImageWrapper = styled.View`
  width: 100%;
  align-items: center;
  margin-top: ${constants.vh(2)}px;
`;


const PostImage = styled.Image`
  width: ${constants.vw(95)}px;
  height: ${constants.vw(95)}px;
  resize-mode : contain;
`;

const PostCardExplanationDate = styled.Text`
  ${(props) => props.theme.NanumSquareRFont};
  font-size: ${constants.vw(2.5)}px;
  color: ${(props) => props.theme.fontBlackGray};
`;

const PostCardExplanationText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont};
  font-size: ${constants.vw(2.5)}px;
`;

const PostCardExplanation = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${constants.vh(1)}px;
`;

const PostCardTitle = styled.Text`
  ${(props) => props.theme.NanumSquareEBFont};
  font-size: ${constants.vw(4)}px;
`;

const PostContent = styled.View`
  margin-top: ${constants.vh(1)}px; 
  width : 100%;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundWhite};
  padding: 0px ${constants.vh(1.5)}px;;
`

const PostCardView = styled.View`
  width : 100%;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundWhite};
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
