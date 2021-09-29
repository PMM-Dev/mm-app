import React, {useState, useEffect} from "react";
import styled from "styled-components";
import constants from "../constants";
import SearchTypeBar from "../components/Home/Search/SearchTypeBar";
import SearchCard from "../components/Home/Search/SearchCard";
import SearchTextInput from "../components/Home/SearchTextInput";
import BackButton from "../components/Header/BackButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NotPreparedAnnouncement from "../components/NotPreparedAnnouncement";

const Search = ({route, navigation}) => {
    const [curType, setcurType] = useState("식당");
    const [pressed, setPressed] = useState(false);
    const [searchHistory, setSearchHistory] = useState([]);

    const getData = async () => {
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

    const refreshData = () => {
        const newSearchHistory = [...searchHistory];
        setSearchHistory(newSearchHistory);
        return newSearchHistory;
    };

    const addData = (newValue) => {
        const newSearchHistory = [...searchHistory, newValue];
        if (newSearchHistory.length >= 15) newSearchHistory.shift();
        setSearchHistory(newSearchHistory);
        return newSearchHistory;
    };

    const storeData = async (newValue) => {
        try {
            const newSearchHistory =
                newValue === "" ? refreshData() : addData(newValue);
            const searchHistoryJson = JSON.stringify(newSearchHistory);
            await AsyncStorage.setItem("@" + curType, searchHistoryJson);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getData();
    }, [curType]);

    useEffect(() => {
        console.log("save");
        console.log(searchHistory);
    }, [searchHistory]);
    return (
        <Screen>
            <InputBar>
                <BackButton goBack={() => navigation.goBack()}/>
                <SearchTextInput changePressed={setPressed} storeData={storeData}/>
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
                    <NotPreparedAnnouncement/>
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
                                        storedData={searchHistory}
                                        storeData={storeData}
                                        setPressed={setPressed}
                                    />
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
