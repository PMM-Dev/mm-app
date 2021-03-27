import React from "react";
import { View, ScrollView, SectionList } from "react-native";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { Button, Card } from "react-native-paper";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Theme from "../style/Theme";
import PostPreview from "../components/PostPreview";
import RestaurantTypeCard from "../components/RestaurantTypeCard";
import CustomCard from "../components/CustomCard";
import {TouchableOpacity} from "react-native";
import PostCard from "../components/PostCard";
import { useState, useEffect } from "react"

const Home = () => {
  const navigation = useNavigation();
  const [count, setCount] = useState([]);
  const Dummy = [
    {
      title : "♚♚이더리움 비트☆코인♚♚가입시$$전원 0.01코인 지급☜☜100%증정",
      like : 98766,
      writer : "yunsu",
      description : "비트코인드림",
      time : {
        year : 21,
        month : 3,
        day : 27,
        hour : 16,
        minute : 26,
      }
    },
    {
      title : "♥",
      like : 3,
      writer : "yunsu",
      description : "비af림",
      time : {
        year : 21,
        month : 3,
        day : 27,
        hour : 16,
        minute : 26,
      }
    },
  ];
  const StringScreen = [
    {screen:"KoreanList"},
    {screen:"WesternList"},
    {screen:"FlourList"},
    {screen:"JapaneseList"},
    {screen:"FastfoodList"},
    {screen:"AsianList"},
    {screen:"DessertList"},
  ];
  useEffect(()=>{
    setCount(Dummy)
  },[]);
  const ScreenList = StringScreen.map((element,key) => 
  <TouchableOpacity
    key={key}
    activeOpacity={0.8}
    onPress={() => navigation.navigate(element.screen.toString())} >
    <RestaurantTypeCard index={key} />
  </TouchableOpacity>
  );
  const PostList = count.map((element,key)=>
    <TouchableOpacity
    key={key}
    activeOpacity={0.8}
    onPress={() => navigation.navigate("Post",{data : element})}>
      <PostCard
        description = {element.title}
        like = {element.like}
        writer = {element.writer}
      ></PostCard>
    </TouchableOpacity>
  )
  return (
    <Screen>
      <CustomCard
        title="식당 리스트"
        moreButtonTitle="전체 보기"
        onMoreClick={() => navigation.navigate("RestaurantList")}
        flex={4}
      >
        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          {ScreenList}
        </ScrollView>
      </CustomCard>
      <CustomCard
        title="게시글"
        moreButtonTitle="더 보기"
        onMoreClick={() => navigation.navigate("PostList")}
        flex={3.5}
      >
        {PostList}
      </CustomCard>
      <Card style={{ marginTop: 15, flex: 0 }}>
        <Card.Content>
          <CardContentWrapper>
            <View
              style={{
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Title>공지</Title>
              <Content>게시판</Content>
            </View>
            <MaterialIcons
              name="fiber-new"
              size={20}
              color={Theme.hlColor}
              style={{ marginRight: 5 }}
            />
          </CardContentWrapper>
        </Card.Content>
      </Card>
      <EmptySpace />
    </Screen>
  );
};

export default Home;

const EmptySpace = styled.View`
  flex: 1;
`;

const RecentPostHolder = styled.View``;

const Title = styled.Text`
  font-size: 15px;
  margin-left: 5px;
  margin-right: 10px;
`;

const Content = styled.Text`
  font-size: 13px;
  opacity: 0.65;
`;

const CardContentWrapper = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;

const Screen = styled.View`
  flex: 1;
`;
