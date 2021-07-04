import React from "react";
import styled from "styled-components";
import Theme from "../style/Theme";
import RestaurantMenu from "../components/Home/RestaurantMenu";
import logo_text from "../assets/logo_text.png";
import ButtonPart from "../components/Home/ButtonPart";
import SearchbarPart from "../components/Home/SearchbarPart";
import LogoPart from "../components/Home/LogoPart";
import PostPart from "../components/PostPart";
import NoticePart from "../components/Home/NoticePart";
import { ScrollView, KeyboardAvoidingView } from "react-native";
import constants from "../constants";

const StringScreen = [
  { screen: "KoreanList" },
  { screen: "WesternList" },
  { screen: "FlourList" },
  { screen: "JapaneseList" },
  { screen: "FastfoodList" },
  { screen: "AsianList" },
  { screen: "DessertList" },
];

const Home = () => {
  return (
    <Screen>
      <Scroll>
        <Wrapper>
          <LogoPart />
          <Foodlist>
            <SearchbarPart />
            <ButtonPart />
          </Foodlist>
          <PostNotice>
            <PostPart />
            <NoticePart />
          </PostNotice>
          <WhiteSpace />
        </Wrapper>
      </Scroll>
    </Screen>
  );
};

export default Home;

const Wrapper = styled.View`
  height: ${constants.height};
`;

const Scroll = styled.ScrollView`
  width: 100%;
`;

const WhiteSpace = styled.View`
  width: 100%;
  height: 5%;
`;

const Screen = styled.View`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
`;

const Foodlist = styled.View`
  width: 100%;
  height: 28%;
  background-color: #eff0f4;
`;

const PostNotice = styled.View`
  width: 100%;
  height: 53%;
  justify-content: center;
  align-items: center;
`;
