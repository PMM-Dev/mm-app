import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import Theme from "../../../style/Theme";
import {ActivityIndicator} from "react-native-paper";
import constants from "../../../constants";

const SearchTypeBar = ({searchType}) => {
    const [types, setTypes] = useState(["식당", "게시글", "유저"]);
    const [selectedType, setSelectedType] = useState();

    useEffect(() => {
            if (searchType === "Home") {
                setTypes(["식당", "게시글", "유저"]);
                setSelectedType("식당")
            } else if (searchType === "Res") {
                setTypes("식당");
                setSelectedType("식당")
            }
    }, [searchType]);

    return (
        <Bar>
            {types ? types.map((type) => <Menu key={type} length={types.length} isSelected={type === selectedType}
                                               onPress={() => setSelectedType(type)}><Title>{type}</Title></Menu>) :
                <ActivityIndicator color={Theme.fontBlack} size={"large"}/>}
        </Bar>
    )
}

const Bar = styled.View`
  width: 100%;
  height: 5%;
  flex-direction: row;
`
const Menu = styled.TouchableOpacity`
  width: ${(props) => constants.vw(100 / props.length)};
  height: 100%;
  justify-content: center;
  align-items: center;
  border-bottom-width: 2px;
  border-bottom-color: ${(props) => props.isSelected ? props.theme.hlOrange : props.theme.backgroundWhite};
`

const Title = styled.Text``

export default SearchTypeBar;