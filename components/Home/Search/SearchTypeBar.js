import React, { useState, useEffect } from "react";
import { Keyboard } from "react-native";
import styled from "styled-components";
import constants from "../../../constants";

const SearchTypeBar = ({ searchType, changeType, changePressed }) => {
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  useEffect(() => {
    if (searchType === "Home") {
      setTypes(["식당", "게시글", "유저"]);
      setSelectedType("식당");
    } else if (searchType === "RestaurantList" || searchType === "Map") {
      setTypes(["식당"]);
      setSelectedType("식당");
    }
  }, [searchType]);

  return (
    <Bar>
      {types.map((type) => (
        <Menu
          key={type}
          length={types.length}
          isSelected={type === selectedType}
          onPress={() => {
            setSelectedType(type);
            changeType(type);
            changePressed(false);
            Keyboard.dismiss();
          }}
        >
          <Title>{type}</Title>
        </Menu>
      ))}
    </Bar>
  );
};

const Bar = styled.View`
  width: 100%;
  height: 5%;
  flex-direction: row;
`;
const Menu = styled.TouchableOpacity`
  width: ${(props) => constants.vw(100 / props.length)}px;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-bottom-width: 2px;
  border-bottom-color: ${(props) =>
    props.isSelected ? props.theme.hlOrange : props.theme.backgroundWhite};
`;

const Title = styled.Text``;

export default SearchTypeBar;
