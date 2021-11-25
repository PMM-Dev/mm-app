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
            <MoreButton onPress={() => {
                navigation.navigate("PostList")
            }}>
                <MoreButtonText>더보기 +</MoreButtonText>
            </MoreButton>
            <Header>
                <Title>자유게시판</Title>
            </Header>
            <Content>
                {posts.map((element, key) => (
                    <PostListCard key={key} route={route} data={element} navigation={navigation}/>
                ))}
            </Content>
        </HomePart>
    );
};

const HomePart = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${constants.vh(2)}px ${constants.vw(4)}px;

  background-color: ${(props) => props.theme.backgroundWhite};
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.fontGray};
  margin-bottom: ${constants.vh(2)}px;
`;

const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 4%;
`;

const Title = styled.Text`
  ${(props) => props.theme.NanumSquareEBFont};
  font-size: ${constants.vw(5)}px;;
`;

const MoreButton = styled.TouchableOpacity`
  position: absolute;
  z-index: 1;
  top: ${constants.vh(2)}px;
  right: ${constants.vw(4)}px;
`;

const MoreButtonText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  font-size: ${constants.vw(3.3)}px;
  color: ${(props) => props.theme.hlOrange};
`;

const Content = styled.View`
  width: 100%;
  border-radius: ${constants.vw(1)}px;
  padding-bottom: 2%;
`;

export default PostPart;
