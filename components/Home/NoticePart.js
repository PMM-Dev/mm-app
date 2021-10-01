import React from "react";
import styled from "styled-components";
import constants from "../../constants";
import NotPreparedAnnouncement from "../NotPreparedAnnouncement";

const NoticePart = () => {
  return (
    <HomePart>
      <NotPreparedAnnouncement />
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
  height: ${constants.vh(8.5)}px;
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
  margin-bottom: 2.5%;
`;

const Title = styled.Text`
  ${(props) => props.theme.NanumGothicBoldFont};
  font-size: ${constants.vw(5)}px;;
`;

const MoreButton = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  font-size: ${constants.vw(3.3)}px;
  color: ${(props) => props.theme.hlOrange};
`;

const Content = styled.View`
  width: 90%;
  height: 30%;
  border: 0.5px;
  border-radius: ${constants.vw(1)}px;
`;


export default NoticePart;
