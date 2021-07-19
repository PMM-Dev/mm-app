import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";

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
    <Notice>
      <Notice_Title>
        <Notice_Title_Title>
          <Notice_Title_Title_Text>공지사항</Notice_Title_Title_Text>
        </Notice_Title_Title>
        <Notice_Title_Button>
          <Notice_Title_Button_Text>더보기+</Notice_Title_Button_Text>
        </Notice_Title_Button>
      </Notice_Title>
      <Notice_Content></Notice_Content>
    </Notice>
  );
};

const Notice = styled.View`
  width: 100%;
  height: 50%;
  justify-content: center;
  align-items: center;
`;

const Notice_Title = styled.View`
  width: 90%;
  height: 28%;
  flex-direction: row;
  bottom: 5px;
`;

const Notice_Title_Title = styled.View`
  width: 80%;
  height: 100%;
  justify-content: flex-end;
  align-items: flex-start;
`;

const Notice_Title_Button = styled.TouchableOpacity`
  width: 20%;
  height: 100%;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Notice_Title_Title_Text = styled.Text`
  font-size: 18px;
`;

const Notice_Title_Button_Text = styled.Text`
  font-size: 12px;
`;

const Notice_Content = styled.View`
  width: 90%;
  height: 72%;
  border: 0.5px;
`;

export default NoticePart;
