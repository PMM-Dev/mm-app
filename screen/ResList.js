import React from "react";
import styled from "styled-components";
import Theme from "../style/Theme";
import logo_text from "../assets/logo_text.png";
import ButtonPart from "../components/Home/ButtonPart";
import SearchbarPart from "../components/Home/SearchbarPart";
import LogoPart from "../components/Home/LogoPart";
import constants from "../constants";
import { LinearGradient } from "expo-linear-gradient";
import ResCard from "../components/Home/ResList/ResCard";
import axios from "axios";
import { API_URL, API_TOKEN } from "@env";
import { useState, useEffect } from "react";

const ht = Math.floor(constants.height) - 120;

const ResList = ({ route, navigation }) => {
  const genre = route.params.param.genre;
  const [list, setlist] = useState("");
  console.log(genre);
  useEffect(() => {
    axios
      .get(API_URL + "/api/restaurant/condition" + "?type=" + genre)
      .then(function (response) {
        setlist(response.data);
        console.log(list);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

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
            <LinearGradient
              colors={[Theme.hlRed, Theme.hlOrange]}
              style={{ width: "100%", height: "6%" }}
            >
              <FilterView>
                <FilterView1>
                  <Wtext>영업중</Wtext>
                </FilterView1>
                <FilterView2>
                  <Wtext>심야</Wtext>
                </FilterView2>
                <FilterView3>
                  <Wtext>가격낮은순</Wtext>
                </FilterView3>
                <FilterView4>
                  <Wtext>후기많은순</Wtext>
                </FilterView4>
                <FilterView5>
                  <Wtext last={true}>관심많은순</Wtext>
                </FilterView5>
              </FilterView>
            </LinearGradient>
            <ResScroll>
              {list == "" ? (
                <></>
              ) : (
                list.map((data, index) => (
                  <ResView key={index}>
                    <ResCard data={data} />
                  </ResView>
                ))
              )}
            </ResScroll>
          </WhiteSpace>
        </Wrapper>
      </Scroll>
    </Screen>
  );
};

export default ResList;

const NOTYET = styled.View``;

const ResView = styled.View`
  height: 140px;
  width: 100%;
  align-items: center;
`;

const Wtext = styled.Text`
  font-size: 11px;
  color: #ffffff;
  text-align: center;
  font-family: "NanumSquare";
  font-weight: bold;
  ${(props) => (props.last ? "" : "border-right-width: 1.5px;")};
  border-right-color: ${(props) => props.theme.backgroundWhite};
`;

const FilterView1 = styled.TouchableOpacity`
  height: 100%;
  width: 15%;
  justify-content: center;
  align-content: center;
`;

const FilterView2 = styled.TouchableOpacity`
  height: 100%;
  width: 17%;
  justify-content: center;
  align-content: center;
`;

const FilterView3 = styled.TouchableOpacity`
  height: 100%;
  width: 22%;
  justify-content: center;
  align-content: center;
`;

const FilterView4 = styled.TouchableOpacity`
  height: 100%;
  width: 22%;
  justify-content: center;
  align-content: center;
`;

const FilterView5 = styled.TouchableOpacity`
  height: 100%;
  width: 22%;
  justify-content: center;
  align-content: center;
`;

const ResScroll = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

const FilterView = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
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
