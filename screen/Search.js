import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {MAGNIFY_ICON} from "../image";
import constants from "../constants";
import SearchTypeBar from "../components/Home/Search/SearchTypeBar";
import SearchCard from "../components/Home/Search/SearchCard";
import BackButton from "../components/Header/BackButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Theme from "../style/Theme";
import {searchMemberByKeyword, searchPostByKeyword, searchRestaurantByKeyword} from "../components/Api/AppSearchApi";
import ResponseStatusEnum from "../ResponseStatusEnum";
import RestaurantCard from "../components/Home/RestaurantList/RestaurantCard";
import MemberCard from "../components/Home/Search/MemberCard";
import PostListCard from "../components/Home/PostList/PostListCard";

const Search = ({route, navigation}) => {
    const [curType, setCurType] = useState("restaurant");
    const [isSearchTextInputPressed, setIsSearchTextInputPressed] = useState(false);
    const [searchHistory, setSearchHistory] = useState([]);
    const [text, setText] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        getHistory();
    }, [curType]);

    const clearResult = () => {
        setResults([]);
    }

    const onSearchTextInput = async (value) => {
        setText(value)
        if (value === "") {
            setIsSearchTextInputPressed(false);
            return;
        } else {
            setIsSearchTextInputPressed(true);
        }

        let searchResult;
        if (curType === "restaurant") {
            searchResult = await searchRestaurantByKeyword(value);
        } else if (curType === "post") {
            searchResult = await searchPostByKeyword(value);
        } else if (curType === "member") {
            searchResult = await searchMemberByKeyword(value);
        }
        if (searchResult?.status >= ResponseStatusEnum.BAD_REQUEST) {
            return;
        }

        setResults(searchResult?.data);
    }

    const getHistory = async () => {
        try {
            const recentFindJson = await AsyncStorage.getItem("@" + curType);
            if (recentFindJson === null) {
                return [];
            }

            const parsedSearchHistory = JSON.parse(recentFindJson);
            setSearchHistory(parsedSearchHistory);
        } catch (e) {
            console.log(e);
        }
    };

    const addHistory = (newValue) => {
        const newSearchHistory = [...searchHistory, newValue];
        if (newSearchHistory.length >= 15) newSearchHistory.shift();
        setSearchHistory(newSearchHistory);
        return newSearchHistory;
    };

    const deleteHistory = (removeValue) => {
        let isRemoved = false;
        const removedHistory = searchHistory.filter((history) => {
          if (isRemoved) {
              return true;
          }

          if (history === removeValue) {
              isRemoved = true;
              return false;
          }
        })

        setSearchHistory(removedHistory);
        storeHistory(removedHistory);
    };

    const storeHistory = async (history) => {
        console.log(history);
        const searchHistoryJson = JSON.stringify(history);
        await AsyncStorage.setItem("@" + curType, searchHistoryJson);
    };

    const storeNewHistory = async (newValue) => {
        const newSearchHistory = addHistory(newValue);
        const searchHistoryJson = JSON.stringify(newSearchHistory);
        await AsyncStorage.setItem("@" + curType, searchHistoryJson);
    };

    return (
        <Screen>
            <InputBar>
                <BackButton goBack={() => navigation.goBack()}/>
                <SearchTextInput>
                    <IconHolder>
                        <Icon
                            source={MAGNIFY_ICON}
                            style={{tintColor: Theme.fontBlackGray}}
                        />
                    </IconHolder>
                    <Input
                        onChangeText={onSearchTextInput}
                        value={text}
                        placeholder="위치 / 음식 키워드로 검색해주세요"
                        placeholderTextColor={Theme.fontBlackGray}
                        underlineColorAndroid="rgba(0,0,0,0)"
                        onFocus={() => {
                            setIsSearchTextInputPressed(true);
                        }}
                        onSubmitEditing={() => {
                            if (text !== "") {
                                storeNewHistory(text);
                            }
                        }}
                    />
                </SearchTextInput>
            </InputBar>
            <SearchTypeBar
                clearResult={clearResult}
                searchType={route.params.param.searchType}
                changeType={setCurType}
                changePressed={setIsSearchTextInputPressed}
            />
            {isSearchTextInputPressed ? (
                <SearchResultListHolder>
                    {results && results.map((result, index) => {
                        if (curType === "restaurant") {
                            return <RestaurantCard key={index} data={result} navigation={navigation}/>
                        } else if (curType === "post") {
                            return <PostListCard key={index} data={result} navigation={navigation}/>
                        } else if (curType === "member") {
                            return <MemberCard key={index} data={result} navigation={navigation}/>
                        }
                    })}
                </SearchResultListHolder>
            ) : (
                <ContentRecent>
                    <Title>
                        <TitleText>최근 검색어</TitleText>
                    </Title>
                    <ScrollSize>
                        <Scroll>
                            {searchHistory &&
                            searchHistory
                                .slice(0)
                                .reverse()
                                .map((element, key) => (
                                    <SearchCard
                                        key={key}
                                        data={element}
                                        deleteHistory={deleteHistory}
                                        setIsSearchTextInputPressed={setIsSearchTextInputPressed}
                                        onSearchTextInput={onSearchTextInput}
                                    />
                                ))}
                        </Scroll>
                    </ScrollSize>
                </ContentRecent>
            )}
        </Screen>
    );
};

const SearchTextInput = styled.View`
  width: ${constants.vw(84)}px;
  height: 43%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Input = styled.TextInput`
  width: 83%;
  height: 100%;
  background-color: ${(props) => props.theme.backgroundGray};
  border-top-right-radius: ${constants.vh(1.5)}px;
  border-bottom-right-radius: ${constants.vh(1.5)}px;

  color: ${(props) => props.theme.fontBlack};
  font-size: ${constants.vh(1.5)}px;
`;

const IconHolder = styled.View`
  width: 17%;
  height: 101%;
  background-color: ${(props) => props.theme.backgroundGray};
  border-top-left-radius: ${constants.vh(1.5)}px;
  border-bottom-left-radius: ${constants.vh(1.5)}px;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.Image`
  height: 50%;
  resize-mode: contain;
`;

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

const SearchResultListHolder = styled.View`
  padding: ${constants.vh(1)}px ${constants.vw(5)}px;
`

const ScrollSize = styled.View`
  width: 100%;
  height: 88%;
`;

const Scroll = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

const Title = styled.View`
  margin-top: ${constants.vw(5)}px;
  margin-left: ${constants.vw(6)}px;
`;

const TitleText = styled.Text`
  ${(props) => props.theme.NanumGothicFont};
  font-size: ${constants.vw(5)}px;
`;

const ContentRecent = styled.View`
  width: 100%;
  height: 82%;
`;

export default Search;
