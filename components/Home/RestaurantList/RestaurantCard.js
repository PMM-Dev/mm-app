import React from "react";
import styled from "styled-components";
import {FULLHEART, RESTAURANT_IMAGE, FULLSTAR} from "../../../image";
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
                    {data.themes && (
                        <TagList>
                            {data.themes.map((list, index) => (
                                <Tag key={index}>
                                    #{list.theme}
                                </Tag>
                            ))}
                        </TagList>
                    )}
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

const TagList = styled.View`
  flex-direction: row;
`;

const Tag = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  color: ${(props) => props.theme.hlRed};
  font-size: ${constants.vh(1.6)}px
`;

const RestaurantNavigateText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  font-size: ${constants.vh(1.4)}px;
  color: ${(props) => props.theme.fontBlackGray};
  margin-top: 2%;
`;

const Title = styled.Text`
  ${(props) => props.theme.NanumSquareBFont}
  font-size: ${constants.vh(2)}px;
`;

const Picture = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: ${constants.vh(1.3)}px;
  resize-mode: cover;
`;

const PictureView = styled.View`
  height: ${constants.vh(11)}px;
  width: ${constants.vh(11)}px;
  margin-right: 3%;
`;

const InfoView = styled.View``;

const GradeList = styled.View`
  flex-direction: row;
  margin-bottom: ${constants.vh(0.5)}px;
`;

const AverageGradeView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: ${constants.vw(2.4)}px;
`;

const LikeView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const GradeIcon = styled.Image`
  width: ${constants.vh(1.6)}px;
  height: ${constants.vh(1.6)}px;
  margin-right: ${constants.vw(0.6)}px;
  padding-bottom: ${(props) => props.bottom ? props.bottom : 0}%;
`;

const GradeText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  font-size: ${constants.vh(1.6)}px;
`;

const ContentList = styled.View`
  flex-direction: row;
  align-items: center;
`

const Content = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  font-size: ${constants.vh(1.75)}px;
  color: ${(props) => props.theme.fontBlackGray};
  margin-bottom: ${constants.vh(0.5)}px;
`;

export default RestaurantCard;
