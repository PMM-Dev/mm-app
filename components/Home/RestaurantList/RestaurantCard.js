import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {FULLHEART, EMPTYHEART, RESTAURANT_IMAGE, FULLSTAR} from "../../../image";
import constants from "../../../constants";
import {Converter} from "../../Converter";

const RestaurantCard = ({data, navigation}) => {

    return (
        <Holder>
            <RestaurantNavigateButton
                onPress={() =>
                    navigation.navigate("Restaurant", {
                        restaurantId: data.id,
                    })
                }
                activeOpacity={1}
            >
                <PictureView>
                    <Picture source={RESTAURANT_IMAGE}/>
                </PictureView>
                <InfoView>
                    <Title>{data.name}</Title>
                    {data.themes && (
                        <TagList>
                            {data.themes.map((list, index) => (
                                <Tag key={index}>
                                    #{list.theme}
                                </Tag>
                            ))}
                        </TagList>
                    )}
                    <GradeList>
                        <AverageGradeView>
                            <GradeIcon source={FULLSTAR} bottom={1}/>
                            <GradeText>{data.averageGrade}</GradeText>
                        </AverageGradeView>
                        <LikeView>
                            <GradeIcon source={FULLHEART}/>
                            <GradeText>{data.likeCount}</GradeText>
                        </LikeView>
                    </GradeList>
                    <ContentList>
                        <Content>{Converter(data.location)} · </Content>
                        <Content>{Converter(data.type)} · </Content>
                        <Content>{Converter(data.price)}</Content>
                    </ContentList>
                    <RestaurantNavigateText>
                        더 자세히 보러가기 +
                    </RestaurantNavigateText>
                </InfoView>
            </RestaurantNavigateButton>
        </Holder>
    );
};

const Holder = styled.View`
  width: 100%;
  height: ${constants.vh(13)}px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.borderGray2};
`;

const RestaurantNavigateButton = styled.TouchableOpacity`
  height: 100%;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

const Tag = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  color: ${(props) => props.theme.hlRed};
  font-size: ${constants.vw(2.2)}px;
`;

const RestaurantNavigateText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  font-size: ${constants.vw(2.6)}px;
  color: ${(props) => props.theme.fontBlackGray};
`;

const TagList = styled.View`
  margin-top: 3px;
  flex-direction: row;
`;

const Title = styled.Text`
  ${(props) => props.theme.NanumSquareBFont}
  font-size: ${constants.vw(4.5)}px;
`;

const Picture = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 15px;
  resize-mode: cover;
`;

const PictureView = styled.View`
  height: ${constants.vw(24)}px;
  width: ${constants.vw(24)}px;
  margin-right: ${constants.vw(2.8)}px;
`;

const InfoView = styled.View``;

const GradeList = styled.View`
  flex-direction: row;
  margin-bottom: ${constants.vh(0.5)}px;
`;

const AverageGradeView = styled.View`
  flex-direction: row;
  margin-right: ${constants.vw(2)}px;
`;

const LikeView = styled.View`
  flex-direction: row;
`;

const GradeIcon = styled.Image`
  width: ${constants.vw(3.5)}px;
  height: ${constants.vw(3.5)}px;
  margin-right: ${constants.vw(0.3)}px;
  padding-bottom: ${(props) => props.bottom ? props.bottom : 0}%;
`;

const GradeText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
`;

const ContentList = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${constants.vh(0.5)}px;
`

const Content = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  font-size: ${constants.vw(3.3)}px;
  color: ${(props) => props.theme.fontBlackGray};
  margin-bottom: ${constants.vh(0.5)}px;
`;

export default RestaurantCard;
