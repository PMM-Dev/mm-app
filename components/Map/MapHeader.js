import React from "react";
import styled from "styled-components";
import {MAP_WHITE_BAR_ICON, MAP_FILTER_ICON} from "../../image";
import constants from "../../constants";

const MapHeader = ({routeName, navigation}) => {
    return (
        <Header>
            <SearchBar onPress={() =>
                navigation.navigate("Search", {
                    param: {searchType: routeName},
                })}
                       activeOpacity={1}
            >
                <SearchBarImage source={MAP_WHITE_BAR_ICON}>
                    <SearchBarText>
                        위치 / 음식 키워드로 검색해주세요
                    </SearchBarText>
                </SearchBarImage>
            </SearchBar>
            <FilterButton onPress={() => console.log("pressed")}>
                <Icon source={MAP_FILTER_ICON}/>
            </FilterButton>
        </Header>
    );
};

const Header = styled.View`
  position: absolute;
  width: 100%;
  height: 6%;
  top: 7%;
  flex-direction: row;
  justify-content: center;
`;


const SearchBar = styled.TouchableOpacity`
  width: 80%;
  height: 100%;
  
  margin-right: ${constants.vw(1)}px;
`

const SearchBarImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  padding-left: ${constants.vw(5)}px;
  justify-content: center;
`

const SearchBarText = styled.Text`
  ${(props) => props.theme.NanumSquareFont}
  color: ${(props) => props.theme.fontGray};
  font-size: ${constants.vw(3.5)}px;
`

const FilterButton = styled.TouchableOpacity`
  width: 13%;
  height: 100%;
`;


const Icon = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: contain;
`

export default MapHeader;
