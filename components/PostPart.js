import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import PostNoticeMini from "./Home/PostNoticeMini";

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
    <Post>
      <Post_Title>
        <Post_Title_Title>
          <Post_Title_Title_Text>게시글</Post_Title_Title_Text>
        </Post_Title_Title>
        <Post_Title_Button>
          <Post_Title_Button_Text>더보기+</Post_Title_Button_Text>
        </Post_Title_Button>
      </Post_Title>
      <Post_Content>
        <Post_Content_Content>
          {Dummy.map((element, key) => (
            <PostNoticeMini
              description={element.title}
              year={element.year}
              month={element.month}
              day={element.day}
              key={key}
            />
          ))}
        </Post_Content_Content>
      </Post_Content>
    </Post>
  );
};
const Post = styled.View`
  width: 100%;
  height: 50%;
  justify-content: center;
  align-items: center;
`;

const Post_Title = styled.View`
  width: 90%;
  height: 28%;
  flex-direction: row;
  bottom: 5px;
`;

const Post_Title_Title = styled.View`
  width: 80%;
  height: 100%;
  justify-content: flex-end;
  align-items: flex-start;
`;

const Post_Title_Button = styled.TouchableOpacity`
  width: 20%;
  height: 100%;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Post_Title_Title_Text = styled.Text`
  font-size: 18px;
`;

const Post_Title_Button_Text = styled.Text`
  font-size: 12px;
`;

const Post_Content = styled.View`
  width: 90%;
  height: 72%;
  border: 0.5px;
  justify-content: center;
  align-items: center;
`;

const Post_Content_Content = styled.View`
  width: 100%;
  height: 95%;
  justify-content: center;
  align-items: center;
`;

export default PostPart;
