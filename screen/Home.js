import React from "react";
import styled from "styled-components";
import Theme from "../style/Theme";
import ButtonPart from "../components/Home/ButtonPart";
import SearchbarPart from "../components/Home/SearchbarPart";
import LogoPart from "../components/Home/LogoPart";
import PostPart from "../components/Home/PostPart";
import NoticePart from "../components/Home/NoticePart";
import constants from "../constants";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <Screen>
      <Scroll contentContainerStyle={{ flex: 1 }}>
        <Wrapper>
          <LogoPart />
          <Foodlist>
            <SearchbarPart />
            <ButtonPart navigation={navigation} />
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
  height: ${constants.pureheight};
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
  background-color: ${(props) => props.theme.backgroundWhite};
`;

const Foodlist = styled.View`
  width: 100%;
  height: 28%;
  background-color: ${(props) => props.theme.backgroundGray};
`;

const PostNotice = styled.View`
  width: 100%;
  height: 53%;
  justify-content: center;
  align-items: center;
`;
