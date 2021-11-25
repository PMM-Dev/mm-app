import React, {useEffect, useState} from "react";
import styled from "styled-components";
import PostNoticeMini from "./PostNoticeMini";
import constants from "../../constants";
import NotPreparedAnnouncement from "../NotPreparedAnnouncement";
import {getPost, getPostPreview} from "../Api/AppPostApi";
import ResponseStatusEnum from "../../ResponseStatusEnum";
import PostListCard from "./PostList/PostListCard";


const PostPart = ({navigation, route, posts}) => {
  return (
    <HomePart>
      <Header>
          <Title>자유게시판</Title>
          <MoreButton onPress={()=>{ navigation.navigate("PostList")}}>
            <MoreButtonText >더보기 +</MoreButtonText>
          </MoreButton>
      </Header>
      <Content>
          {posts.map((element, key) => (
            <PostListCard key = {key} route={route} data = {element} navigation={navigation} />
          ))}
      </Content>
    </HomePart>
  );
};

const HomePart = styled.View`
  width: 100%;
  height: ${constants.vh(30)}px;
  display: flex;
  flex-direction: column;
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
  margin-bottom: 4%;
`;

const Title = styled.Text`
${(props) => props.theme.NanumGothicBoldFont};
font-size: ${constants.vw(5)}px;;
`;

const MoreButton = styled.TouchableOpacity``;

const MoreButtonText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  font-size: ${constants.vw(3.3)}px;
  color: ${(props) => props.theme.hlOrange};
`;

const Content = styled.View`
  width: 90%;
  height: 72%;
  border-radius: ${constants.vw(1)}px;
  padding-bottom: 2%;
`;

export default PostPart;
