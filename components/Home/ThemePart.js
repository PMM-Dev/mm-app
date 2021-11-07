import React from "react";
import styled from "styled-components";
import constants from "../../constants";
import {TMP} from "../../image"
import Review from "./Restaurant/Review";

const dummy = [{image : TMP, name : "카페1", position : "후문", genre: "일식", price : "FLEX"},
    {image : TMP, name : "카페1", position : "후문", genre: "일식", price : "FLEX"},
    {image : TMP, name : "카페1", position : "후문", genre: "일식", price : "FLEX"}];


const ThemePart = ({title}) => {
    return (
        <Holder>
            <Header>
                <Title>{title}</Title>
            </Header>
            <Content>
                {dummy.map((data, index)=>
                    <Card last key = {index} >
                        <Image source = {data.image}/>
                        <CardBlock>
                            <CardName>{data.name}</CardName>
                            <CardButton>
                                <CardButtonText>></CardButtonText>
                            </CardButton>
                        </CardBlock>
                        <CardExplanation>{data.position} | {data.genre} | {data.price}</CardExplanation>
                    </Card>)}
            </Content>
        </Holder>
    );
};
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
`;

const CardName = styled.Text`
  ${(props) => props.theme.NanumGothicBoldFont};
  font-size: ${constants.vw(4)}px;
  width : 90%;
`

const Card = styled.View`
  width : 33%;
  margin-right : ${constants.vw(2)}px;
`;

const Image = styled.Image`
  height: 70%;
  width : 100%;
`;

const Holder = styled.View`
  height: ${constants.vh(30)}px;;
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
  left : 5%;
  height: 76%;
  border-radius: ${constants.vw(1)}px;
  flex-direction: row;
`;


export default ThemePart;
