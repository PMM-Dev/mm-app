import React, {useState, useEffect} from "react";
import styled from "styled-components";
import constants from "../../constants";
import {TMP} from "../../image"
import Review from "./Restaurant/Review";
import {getRestaurantByTheme} from "../Api/AppRestaurantApi";
import ResponseStatusEnum from "../../ResponseStatusEnum";
import {Converter, ThemeConverter} from "../Converter";

const ThemePart = ({title, restaurant, navigation}) => {

    return (
        <Holder>
            <Header>
                <Title>{ThemeConverter(title)}</Title>
            </Header>
            <Scroll
                horizontal={true}
            >
                {restaurant !== undefined ? <Content>
                    {restaurant.map((data, index) =>
                        <Card last key={index} onPress={() => {
                            navigation.navigate("Restaurant", {restaurantId: data.id})
                        }}>
                            {/*<Image source = {data.image}/>*/}
                            <TitleHolder>
                                <TitleText>{data.name}</TitleText>
                                <ArrowText>></ArrowText>
                            </TitleHolder>
                            <InfoText>{Converter(data.location)} | {Converter(data.type)} | {Converter(data.price)}</InfoText>
                        </Card>)}
                </Content> : <></>}
            </Scroll>
        </Holder>
    );
};

const Scroll = styled.ScrollView``;

const ArrowText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont};
  font-size: ${constants.vw(4)}px;
  color: ${(props) => props.theme.fontBlackGray};
`

const TitleText = styled.Text`
  ${(props) => props.theme.NanumSquareBFont};
  font-size: ${constants.vw(4)}px;
`

const TitleHolder = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${constants.vw(1)}px;;
`

const InfoText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont};
  font-size: ${constants.vw(3)}px;
  color: ${(props) => props.theme.fontBlackGray};
`;

const Card = styled.TouchableOpacity`
  width: ${constants.vw(30)}px;
  margin-right: ${constants.vw(4)}px;
  
`;

const Image = styled.Image`
  height: 70%;
  width: 100%;
  resize-mode: contain;
`;

const Holder = styled.View`
  width: 100%;
  justify-content: center;
  padding: ${constants.vh(2)}px ${constants.vw(4)}px;

  background-color: ${(props) => props.theme.backgroundWhite};
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.fontGray};
  margin-bottom: ${constants.vh(2)}px;
`;

const Header = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: ${constants.vh(2.5)}px;
`;

const Title = styled.Text`
  ${(props) => props.theme.NanumSquareEBFont};
  font-size: ${constants.vw(5)}px;;
`;

const Content = styled.View`
  width: 95%;
  left: ${constants.vw(1)}px;
  height: 76%;
  border-radius: ${constants.vw(1)}px;
  flex-direction: row;
`;


export default ThemePart;
