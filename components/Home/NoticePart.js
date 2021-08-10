import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import constants from "../../constants";
import PostNoticeMini from "./PostNoticeMini";

const Dummy = [
  {
    title: "테스트 게시글입니다1",
    year: 2021,
    month: 5,
    day: 17,
  },
  {
    title: "테스트 게시글입니다2",
    year: 2021,
    month: 10,
    day: 17,
  },
  {
    title: "테스트 게시글입니다3",
    year: 2021,
    month: 5,
    day: 17,
  },
  {
    title: "테스트 게시글입니다4",
    year: 2021,
    month: 5,
    day: 17,
  },
  {
    title: "테스트 게시글입니다5",
    year: 2021,
    month: 5,
    day: 17,
  },
  {
    title: "테스트 게시글입니다6",
    year: 2021,
    month: 5,
    day: 17,
  },
];

const NoticePart = () => {
  return (
    <HomePart>
      <Header>
        <Title>공지사항</Title>
        <MoreButton>더보기 +</MoreButton>
      </Header>
      <Content>
      </Content>
    </HomePart>
  );
};

const HomePart = styled.View`
  width: 100%;
  height: 30%;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.backgroundWhite};
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.fontGray};
  margin-bottom: ${constants.vh(2)}px;
`;
const Header = styled.View`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 10px;
`;

const Title = styled.Text`
  ${(props) => props.theme.NanumGothicBoldFont};
  font-size: ${constants.vw(5)}px;;
`;

const MoreButton = styled.Text`
  font-size: ${constants.vw(3.3)}px;
  color: ${(props) => props.theme.hlOrange};

`;

const Content = styled.View`
  width: 90%;
  height: 72%;
  border: 0.5px;
  border-radius: ${constants.vw(1)}px;
`;


export default NoticePart;
