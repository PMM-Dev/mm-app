import React from "react";
import styled from "styled-components";
import {FULLHEART, RESTAURANT_IMAGE, FULLSTAR, IMG_ICON} from "../../../image";
import constants from "../../../constants";
import {getPostById, getPostComment} from "../../Api/AppPostApi";
import ResponseStatusEnum from "../../../ResponseStatusEnum";

const PostListCard = ({data, navigation}) => {

    const cardClick = () => {
        async function requestPostById(postId) {
            const {data, status} = await getPostById(postId);
            if (status >= ResponseStatusEnum.BAD_REQUEST) {
                alert("삭제된 글입니다.")
                return;
            }

            if (status === ResponseStatusEnum.NO_DATA) {
                alert("삭제된 글입니다.")
                return;
            }

            navigation.navigate("Post", {postId: data.id,});
        }
        requestPostById(data.id)
    };

    return (
        <Card onPress={()=>{
            cardClick();
        }}>
            <CardImageAndTitle>
                <CardTitle>{data.title}</CardTitle>
                {data.existImage === true ?
                    <CardImage source = {IMG_ICON}/>: <></> }
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
  margin-left : ${constants.vw(2)}px;
`;

const CardExplanationDate = styled.Text`
  ${(props) => props.theme.NanumSquareEBFont};
  font-size: ${constants.vw(2.5)}px;
  color: ${(props) => props.theme.fontBlackGray};
`;

const CardExplanationText = styled.Text`
  ${(props) => props.theme.NanumSquareEBFont};
  font-size: ${constants.vw(2.5)}px;
  width : 70%;
`;

const CardExplanation = styled.View`
  flex-direction: row;
  margin-top: ${constants.vh(1)}px;
`;

const CardTitle = styled.Text`
  ${(props) => props.theme.NanumSquareEBFont};
  font-size: ${constants.vw(4)}px;
`;

const Card = styled.TouchableOpacity`
  height : ${constants.vh(7)}px;
  justify-content: center;
  border-bottom-width: 0.5px;
  border-bottom-color: ${(props) => props.theme.borderGray};
`

export default PostListCard;
