import React, {useState, useEffect} from "react";
import {Keyboard} from "react-native";
import styled from "styled-components";
import constants from "../../../constants";
import {SearchConverter} from "../../Converter";

const SearchTypeBar = ({clearResult, searchType, changeType, changePressed}) => {
    const [types, setTypes] = useState([]);
    const [selectedType, setSelectedType] = useState("");

    useEffect(() => {
        if (searchType === "Home") {
            setTypes(["restaurant", "post", "member"]);
            setSelectedType("restaurant");
        } else if (searchType === "RestaurantList" || searchType === "Map") {
            setTypes(["restaurant"]);
            setSelectedType("restaurant");
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
                        if (selectedType !== type) {
                            setSelectedType(type);
                            changeType(type);
                            changePressed(false);
                            clearResult();
                        }

                        Keyboard.dismiss();
                    }}
                >
                    <Title>{SearchConverter(type)}</Title>
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
