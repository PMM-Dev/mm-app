import React, {useState, useEffect} from "react";
import styled from "styled-components";
import constants from "../../constants";
import {TMP} from "../../image"
import Review from "./Restaurant/Review";
import { getRestaurantByTheme} from "../Api/AppRestaurantApi";
import ResponseStatusEnum from "../../ResponseStatusEnum";
import {Converter, ThemeConverter} from "../Converter";

const ThemePart = ({title, restaurant, navigation}) => {

    return (
        <Holder>
            <Header>
                <Title>{title}</Title>{/*여기  ThemeConverter(theme) 써서 변경*/}
            </Header>
            <Scroll
                horizontal ={true}
            >
                {restaurant !== undefined ? <Content>
                    {restaurant.map((data, index)=>
                        <Card last key = {index} onPress={()=>{navigation.navigate("Restaurant", {restaurantId: data.id})}}>
                            {/*<Image source = {data.image}/>*/}
                            <CardBlock>
                                <CardName>{data.name}</CardName>
                            </CardBlock>
                            <CardExplanation>{Converter(data.location)} | {Converter(data.type)} | {Converter(data.price)}</CardExplanation>
                        </Card>)}
                </Content> : <></> }
            </Scroll>
        </Holder>
    );
};

const Scroll = styled.ScrollView``;

const CardButtonText = styled.Text`${(props) => props.theme.NanumGothicBoldFont};
  font-size: ${constants.vw(3)}px;
`;

const CardButton = styled.TouchableOpacity`
  width : 120%;
  height : 120%;
`;

const CardBlock = styled.View`
  flex-direction : row;
  margin-top : ${constants.vw(3)}px;
  margin-bottom: ${constants.vw(2)}px;
`;

const CardExplanation = styled.Text`
  ${(props) => props.theme.NanumGothicBoldFont};
  font-size: ${constants.vw(3)}px;
  text-align : center;
`;

const CardName = styled.Text`
  ${(props) => props.theme.NanumGothicBoldFont};
  font-size: ${constants.vw(4)}px;
  width : 90%;
  text-align : center;
`

const Card = styled.TouchableOpacity`
  width : ${constants.vw(30)}px;
  margin-right : ${constants.vw(2)}px;
`;

const Image = styled.Image`
  height: 70%;
  width : 100%;
  resize-mode : contain;
`;

const Holder = styled.View`
  height: ${constants.vh(15)}px;;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundWhite};
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.fontGray};
  margin-bottom: ${constants.vh(2)}px;
`;

const Header = styled.View`
  left : 5%;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2.5%;
`;

const Title = styled.Text`
  ${(props) => props.theme.NanumGothicBoldFont};
  font-size: ${constants.vw(5)}px;;
`;

const Content = styled.View`
  width: 95%;
  left :  ${constants.vw(1)}px;
  height: 76%;
  border-radius: ${constants.vw(1)}px;
  flex-direction: row;
`;


export default ThemePart;
