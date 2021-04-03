import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import { Card } from "react-native-paper";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Theme from "../style/Theme";
import RestaurantMenu from "../components/Home/RestaurantMenu";
import PostMenu from "../components/Home/PostMenu";

// 안쓰는 import 문이나, styled components의 css들 삭제해서 깔끔이 관리 부탁. 가독성을 위해...
// 특히 styled componsnt css 같은 경우, 너가 작성할떄 깔끔히 정리 안해두면 나중에 지우고 추가할때 다시 확인하는데만 하루내 걸림.
// 컴포넌트 내에서 hooks, return, 객체, 함수 막 들어가서 복잡해지기 시작하면 공백줄 넣어서 구별 부탁.
// 폴더도 이제 추가해서 정리 부탁함. 급한건 내가 옮겼는데, 너가 상황봐서 옮겨주셈
// ** 파일 위치 옮길때 import 문 자동으로 수정되는 거 있고 안되는 거 있으니, 조심하셈 **
// 그 외에는 내가 리뷰 남긴거 읽으면 될듯. Map 은 안봤음. 작동을 위한 코드도 길고, 아직 확정된게 크게 없어서, 후순위로 일단은

const StringScreen = [
  { screen: "KoreanList" },
  { screen: "WesternList" },
  { screen: "FlourList" },
  { screen: "JapaneseList" },
  { screen: "FastfoodList" },
  { screen: "AsianList" },
  { screen: "DessertList" },
];

const Dummy = [
  {
    title: "♚♚이더리움 비트☆코인♚♚가입시$$전원 0.01코인 지급☜☜100%증정",
    like: 98766,
  },
  {
    title: "ddffddff",
    like: 1,
  },
];

const Home = () => {
  // 컴포넌트 안에는 해당 컴포넌트와 관련된 것만
  // Dummy 나 스크린 리스트와 같은 것은 Home 컴포넌트 밖에 다시 const 새로 선언

  // ScreenList, PostList 와 같이 분리한 컴포넌트가 사소한 버튼 수즌을 넘어가면 별도의 파일로 분리해야 함.
  // 컴포넌트는 보통 UI 별로 분리함. 하지만 이들은 뭔가 모순적임. 실질적인 UI 부분은 Button 뿐인데, 단순히 map 때문에 List 마냥 취급 받는 중.
  // 1. Map 같은 코드적인 부분은 Home 의 return () 안에서 사용하고, 버튼을 별도 의 파일로 만들거나
  // 2. 식당 리스트 한 파트, 게시글 리스트 한 파트의 컴포넌트를 통째로 분리해야함. (<CustomCard></CustomCard> 이 파트 전체)
  // 디자인이 확정이 아니고, 식당 리스트와 게시글의 기본 형태도 워낙 달라서, 2번. 그리고 CustomCard를 재활용하지 않고, 각각으로 분리.
  // 슬슬 스크린과 컴포넌트가 많아지니 폴더를 분리
  // ScreenList > RestaurantMenu // PostList > Postenu

  return (
    <Screen>
      <RestaurantMenu restaurantTypeList={StringScreen} />
      <PostMenu postPreviewList={Dummy} />

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
