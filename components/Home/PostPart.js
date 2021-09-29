import React from "react";
import styled from "styled-components";
import PostNoticeMini from "./PostNoticeMini";
import constants from "../../constants";
import NotPreparedAnnouncement from "../NotPreparedAnnouncement";

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

const PostPart = () => {
  return (
    <HomePart>
      <NotPreparedAnnouncement />
      <Header>
          <Title>게시글</Title>
          <MoreButton>더보기 +</MoreButton>
      </Header>
      <Content>
          {Dummy.map((element, key) => (
            <PostNoticeMini
              description={element.title}
              year={element.year}
              month={element.month}
              day={element.day}
              key={key}
            />
          ))}
      </Content>
    </HomePart>
  );
};

const HomePart = styled.View`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.backgroundWhite};
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.fontGray};
  margin-bottom: ${constants.vh(1)}px;
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
  ${(props) => props.theme.NanumSquareRFont}
  font-size: ${constants.vw(3.3)}px;
  color: ${(props) => props.theme.hlOrange};
`;

const Content = styled.View`
  width: 90%;
  height: 72%;
  border: 0.5px;
  border-radius: ${constants.vw(1)}px;
`;

export default PostPart;
