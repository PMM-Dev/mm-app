import React from "react";
import styled from "styled-components";
import {FULLHEART, RESTAURANT_IMAGE, FULLSTAR, IMG_ICON} from "../../../image";
import constants from "../../../constants";

const PostListCard = ({data, navigation}) => {
    return (
        <Card onPress={()=>{ navigation.navigate("Post", {
            postId: data.id,
        })}}>
            <CardImageAndTitle>
                {data.existImage === true ?
                    <CardImage source = {IMG_ICON}/>: <></> }
                <CardTitle>{data.title}</CardTitle>
            </CardImageAndTitle>
            <CardExplanation>
                <CardExplanationText>{data.authorName} | 조회수 : {data.viewCount} | 추천 : {data.likeCount}</CardExplanationText>
                <CardExplanationDate>{data.createDate}</CardExplanationDate>
            </CardExplanation>
        </Card>
    );
};


const CardImageAndTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CardImage = styled.Image`
  height: ${constants.vw(4)}px;
  width : ${constants.vw(5)}px;
  margin-right : ${constants.vw(1)}px;
`;

const CardExplanationDate = styled.Text`
  ${(props) => props.theme.NanumGothicBoldFont};
  font-size: ${constants.vw(2.5)}px;
`;

const CardExplanationText = styled.Text`
  ${(props) => props.theme.NanumGothicBoldFont};
  font-size: ${constants.vw(2.5)}px;
  width : 90%;
`;

const CardExplanation = styled.View`
  flex-direction: row;
  margin-top: ${constants.vh(1)}px;
`;

const CardTitle = styled.Text`
  ${(props) => props.theme.NanumGothicBoldFont};
  font-size: ${constants.vw(4)}px;
`;

const Card = styled.TouchableOpacity`
  height : ${constants.vh(7)}px;
  justify-content: center;
  border-bottom-width: 0.5px;
  border-bottom-color: ${(props) => props.theme.borderGray};
`

export default PostListCard;
