import React from "react";
import styled from "styled-components";
import constants from "../../constants";
import {FULLHEART} from "../../image";

const SmallBoardPreviews = ({preview, navigate}) => {
    return (
        <Card>
            <PreviewButton
                onPress={navigate}
            >
                <Title  numberOfLines={1}>{preview.content}</Title>
                <LikeView>
                    <GradeIcon source={FULLHEART}/>
                    <GradeText>{preview.likeCount}</GradeText>
                </LikeView>
            </PreviewButton>
        </Card>
    );
};

const Card = styled.View`
  width: 100%;
  padding: 0 5%;
`;

const PreviewButton = styled.TouchableOpacity`
flex-direction: row;
  justify-content: space-between;
`

const Title = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  font-size: ${constants.vw(3)}px;
  color: ${(props) => props.theme.fontBlack};
  max-width: 75%;
`;

const LikeView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const GradeIcon = styled.Image`
  width: ${constants.vh(1.6)}px;
  height: ${constants.vh(1.6)}px;
  margin-right: ${constants.vw(1.5)}px;
  padding-bottom: ${(props) => props.bottom ? props.bottom : 0}%;
`;

const GradeText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  font-size: ${constants.vh(1.6)}px;
`;

export default SmallBoardPreviews;
