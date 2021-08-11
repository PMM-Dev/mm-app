import React from "react";
import styled from "styled-components";
import constants from "../../constants";
import SearchTypeBar from "../../components/Home/Search/SearchTypeBar";
import SearchTextInput from "../../components/Home/SearchTextInput";
import {ARROW_LEFT_ICON} from "../../image";
import Theme from "../../style/Theme";

const Search = ({route, navigation}) => {
    return (
        <Screen>
            <InputBar>
                <BackButton onPress={() => navigation.goBack()}>
                    <Icon source={ARROW_LEFT_ICON} style={{tintColor: Theme.fontBlack}}/>
                </BackButton>
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
const BackButton = styled.TouchableOpacity`
  width: ${constants.vw(9)}px;
  height: ${constants.vw(9)}px;
  justify-content: center;
  align-items: flex-start;
  padding-right: ${constants.vw(1)}px;;
`

const Icon = styled.Image`
  width: 100%;
  resize-mode: contain;
`

const Scroll = styled.ScrollView`
  width: 100%;
`;

const Content = styled.View`
  width: 100%;
  background-color: blue;
`

export default Search;