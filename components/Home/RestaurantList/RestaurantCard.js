import React from "react";
import styled from "styled-components";
import {FULLHEART, FULLSTAR} from "../../../image";
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
                    <InfoView>
                        <TitleView>
                            <Title>{data.name}</Title>
                            <TagList>
                                {data.themes && data.themes.map((list, index) => (
                                    <Tag key={index}>
                                        #{list.theme}
                                    </Tag>
                                ))
                                }
                            </TagList>
                        </TitleView>
                        <ContentList>
                            <Content>{Converter(data.location)} · </Content>
                            <Content>{Converter(data.type)} · </Content>
                            <Content>{Converter(data.price)}</Content>
                        </ContentList>
                    </InfoView>
                    <RestaurantNavigateText>
                        더 자세히 보러가기 +
                    </RestaurantNavigateText>
                    <GradeList>
                        <AverageGradeView>
                            <GradeIcon source={FULLSTAR} bottom={1}/>
                            <GradeText>{data?.averageGrade === 0 ? "-" : data?.averageGrade}</GradeText>
                        </AverageGradeView>
                        <LikeView>
                            <GradeIcon source={FULLHEART}/>
                            <GradeText>{data?.likeCount}</GradeText>
                        </LikeView>
                    </GradeList>
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
  justify-content: space-between;

  padding-top: ${constants.vh(1.5)}px;
  padding-bottom: ${constants.vh(1.2)}px;
  padding-left: ${constants.vw(0.5)}px;;
`;

const TagList = styled.View`
  flex-direction: row;
`;

const Tag = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  color: ${(props) => props.theme.fontBlue};
  font-size: ${constants.vh(1.6)}px;
  margin-right: ${constants.vw(2.3)}px;
`;

const RestaurantNavigateText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  font-size: ${constants.vh(1.4)}px;
  color: ${(props) => props.theme.fontBlackGray};
`;

const InfoView = styled.View``

const TitleView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${constants.vh(1)}px;
`

const Title = styled.Text`
  ${(props) => props.theme.NanumSquareBFont}
  font-size: ${constants.vh(2.6)}px;
  margin-right: ${constants.vw(3)}px;
`;

const ContentList = styled.View`
  flex-direction: row;
  align-items: center;
`

const Content = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  font-size: ${constants.vh(1.6)}px;
  color: ${(props) => props.theme.fontBlackGray};
`;


const GradeList = styled.View`
  position: absolute;
  bottom: ${constants.vh(0.5)}px;
  right: 0px;
  flex-direction: row;
  margin-bottom: ${constants.vh(0.5)}px;
`;

const AverageGradeView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: ${constants.vw(3)}px;
`;

const LikeView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const GradeIcon = styled.Image`
  width: ${constants.vh(1.6)}px;
  height: ${constants.vh(1.6)}px;
  margin-right: ${constants.vw(1)}px;
  padding-bottom: ${(props) => props.bottom ? props.bottom : 0}%;
`;

const GradeText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  font-size: ${constants.vh(1.6)}px;
  color: ${(props) => props.theme.fontBlack};
`;

export default RestaurantCard;
