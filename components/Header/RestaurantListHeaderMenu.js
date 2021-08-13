import React from 'react';
import styled from "styled-components";
import {MAGNIFY_ICON} from "../../image";
import constants from "../../constants";
import BackButton from "../../screen/Home/BackButton";

const RestaurantListHeaderMenu = ({navigation, routeName}) => {
    return (
        <>
            <BackButton goBack={() => navigation.goBack()}/>
            <Button onPress={() =>
                navigation.navigate("Search", {
                    param: {searchType: routeName},
                })
            }>
                <Icon source={MAGNIFY_ICON} style={{tintColor: "#000000"}}/>
            </Button>
        </>
    )
}

const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: ${constants.vw(8.5)}px;
  height: ${constants.vw(8.5)}px;
  border-radius: 1000px;
  background-color: ${(props) => props.theme.backgroundDarkerGray};
  margin-right: ${constants.vw(2)}px;
  margin-bottom: ${constants.vw(2)}px;
`

const Icon = styled.Image`
  width: ${constants.vw(5.5)}px;
  height: ${constants.vw(5.5)}px;
`
export default RestaurantListHeaderMenu;