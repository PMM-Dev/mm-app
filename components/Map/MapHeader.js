import React from "react";
import styled from "styled-components";
import {FILTER} from "../../image";
import constants from "../../constants";

const MapHeader = ({routeName, navigation}) => {
    return (
        <Header>
            <SearchBarButton onPress={() =>
                navigation.navigate("Search", {
                    param: {searchType: routeName},
                })
            }>
                <SearchBarText>
                    위치 / 음식 키워드로 검색해주세요
                </SearchBarText>
            </SearchBarButton>
            <FilterButton onPress={() => console.log("pressed")}>
                <Icon source={FILTER}/>
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


const SearchBarButton = styled.TouchableOpacity`
  width: 80%;
  height: 100%;
  background-color: ${(props) => props.theme.backgroundWhite};
  border-radius: ${constants.vw(1.5)}px;
  padding-left: ${constants.vw(5)}px;
  justify-content: center;
  
  margin-right: ${constants.vw(2)}px;
`

const SearchBarText = styled.Text`
  ${(props) => props.theme.NanumSquareFont}
  color: ${(props) => props.theme.fontGray};
  font-size: ${constants.vw(3.5)}px;
`

const FilterButton = styled.TouchableOpacity`
  width: 11%;
  height: 100%;
`;


const Icon = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: contain;
`

export default MapHeader;
