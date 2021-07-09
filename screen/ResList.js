import React from "react";
import styled from "styled-components";
import Theme from "../style/Theme";
import logo_text from "../assets/logo_text.png";
import ButtonPart from "../components/Home/ButtonPart";
import SearchbarPart from "../components/Home/SearchbarPart";
import LogoPart from "../components/Home/LogoPart";
import constants from "../constants";

const ht = Math.floor(constants.height) - 120;

const ResList = ({ route, navigation }) => {
  const genre = route.params.param.genre;
  console.log(genre);
  return (
    <Screen>
      <Scroll contentContainerStyle={{ flex: 1 }}>
        <Wrapper>
          <LogoPart />
          <Foodlist>
            <SearchbarPart />
            <ButtonPart navigation={navigation} />
          </Foodlist>
          <WhiteSpace>
            <ResScroll contentContainerStyle={{ flex: 1 }}>
              <FilterView></FilterView>
              <ResPageView></ResPageView>
            </ResScroll>
          </WhiteSpace>
        </Wrapper>
      </Scroll>
    </Screen>
  );
};

export default ResList;

const ResScroll = styled.ScrollView`
  width: 100%;
  height: 100%;
  border: black 1px;
`;

const FilterView = styled.View`
  width: 100%;
  height: 6%;
  border: black 1px;
`;

const ResPageView = styled.View`
  width: 100%;
  height: 94%;
  border: black 1px;
`;

const WhiteSpace = styled.View`
  width: 100%;
  height: 58%;
`;

const Wrapper = styled.View`
  height: ${ht};
`;

const Scroll = styled.ScrollView`
  width: 100%;
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
