import React, { useState, useEffect } from "react";
import styled from "styled-components";
import constants from "../constants";
import SearchTypeBar from "../components/Home/Search/SearchTypeBar";
import SearchCard from "../components/Home/Search/SearchCard";
import SearchTextInput from "../components/Home/SearchTextInput";
import BackButton from "../components/Header/BackButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Dummy = ["김치찌개 마요네즈 김밥김치찌개 황금나침판", "엽떡", "x"];

const Search = ({ route, navigation }) => {
  const [curType, setcurType] = useState("식당");
  const [pressed, setPressed] = useState(false);
  const [recentFindData, setRecentFindData] = useState([]);
  //AsyncStorage.clear();

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@" + curType, jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    try {
      const recentFindJson = await AsyncStorage.getItem("@" + curType);
      if (recentFindJson === null) {
        return [];
      }

      const parsedRecentFindData = JSON.parse(recentFindJson);
      console.log(parsedRecentFindData);
      return parsedRecentFindData;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const data = getData();
    setRecentFindData(data);
  }, []);

  useEffect(() => {
    console.log(recentFindData);
    storeData(recentFindData);
  }, [recentFindData]);

  return (
    <Screen>
      <InputBar>
        <BackButton goBack={() => navigation.goBack()} />
        <SearchTextInput
          changePressed={setPressed}
          setRecentFindData={setRecentFindData}
        />
      </InputBar>
      <SearchTypeBar
        searchType={route.params.param.searchType}
        changeType={setcurType}
        changePressed={setPressed}
      />
      {pressed ? (
        <></>
      ) : (
        <ContentRecent>
          <Title>
            <TitleText>최근 검색어</TitleText>
          </Title>
          <ScrollSize>
            <Scroll>
              {Dummy.map((element, key) => (
                <SearchCard key={key} data={element}></SearchCard>
              ))}
            </Scroll>
          </ScrollSize>
        </ContentRecent>
      )}
    </Screen>
  );
};

const Screen = styled.View`
  width: 100%;
  height: ${constants.pureheight};
  background-color: ${(props) => props.theme.backgroundWhite};
`;

const InputBar = styled.View`
  width: 100%;
  height: 13%;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: ${constants.vh(1)}px;
`;

const ScrollSize = styled.View`
  width: 100%;
  height: 88%;
`;

const Scroll = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

const Title = styled.View`
  width: 100%;
  height: ${constants.vh(8)}px;
  justify-content: center;
  border-bottom-width: 0.5px;
  border-bottom-color: black;
`;

const TitleText = styled.Text`
  ${(props) => props.theme.NanumGothicFont};
  font-size: ${constants.vw(5)}px;
  margin-left: ${constants.vw(5)}px;
`;

const ContentRecent = styled.View`
  width: 100%;
  height: 82%;
`;

export default Search;
