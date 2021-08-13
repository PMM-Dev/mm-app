import React from "react";
import styled from "styled-components";
import constants from "../../constants";
import SearchTypeBar from "../../components/Home/Search/SearchTypeBar";
import SearchTextInput from "../../components/Home/SearchTextInput";
import BackButton from "../../components/Header/BackButton";

const Search = ({route, navigation}) => {
    return (
        <Screen>
            <InputBar>
                <BackButton goBack={() => navigation.goBack()}/>
                <SearchTextInput/>
            </InputBar>
            <SearchTypeBar searchType={route.params.param.searchType}/>
            <Scroll contentContainerStyle={{flex: 1}}>
                <Content>
                </Content>
            </Scroll>
        </Screen>
    )
}

const Screen = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.backgroundWhite};
`;

const InputBar = styled.View`
  width: 100%;
  height: 13%;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: ${constants.vh(1)}px;
`

const Scroll = styled.ScrollView`
  width: 100%;
`;

const Content = styled.View`
  width: 100%;
  background-color: blue;
`

export default Search;