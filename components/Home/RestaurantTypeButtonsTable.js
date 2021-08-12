import React from "react";
import styled from "styled-components";
import {
    HOME_FOOD_ICON_ASIAN,
    HOME_FOOD_ICON_DELIEVERY,
    HOME_FOOD_ICON_DESSERT,
    HOME_FOOD_ICON_FASTFOOD,
    HOME_FOOD_ICON_FLOUR,
    HOME_FOOD_ICON_JAPANESE,
    HOME_FOOD_ICON_KOREAN,
    HOME_FOOD_ICON_NIGHTFOOD,
    HOME_FOOD_ICON_RANKING,
    HOME_FOOD_ICON_WESTERN,
} from "../../image";
import constants from "../../constants";

const StringScreen = [
    {genre: "KOREAN"},
    {genre: "FLOUR"},
    {genre: "WESTERN"},
    {genre: "ASIAN"},
    {genre: "JAPANESE"},
    {genre: "DESSERT"},
    {genre: "FASTFOOD"},
];

const RestaurantTypeButtonsTable = ({navigation}) => {
    return (
        <ButtonsTable>
            <ButtonsRow>
                <Button
                    onPress={() =>
                        navigation.navigate("ResList", {
                            param: StringScreen[0],
                        })
                    }
                >
                    <Img source={HOME_FOOD_ICON_KOREAN}/>
                </Button>
                <Button
                    onPress={() =>
                        navigation.navigate("ResList", {
                            param: StringScreen[1],
                        })
                    }
                >
                    <Img source={HOME_FOOD_ICON_FLOUR}/>
                </Button>
                <Button>
                    <Img source={HOME_FOOD_ICON_WESTERN}/>
                </Button>
                <Button>
                    <Img source={HOME_FOOD_ICON_ASIAN}/>
                </Button>
                <Button>
                    <Img source={HOME_FOOD_ICON_JAPANESE}/>
                </Button>
            </ButtonsRow>
            <ButtonsRow>
                <Button>
                    <Img source={HOME_FOOD_ICON_DESSERT}/>
                </Button>
                <Button>
                    <Img source={HOME_FOOD_ICON_NIGHTFOOD}/>
                </Button>
                <Button>
                    <Img source={HOME_FOOD_ICON_FASTFOOD}/>
                </Button>
                <Button>
                    <Img source={HOME_FOOD_ICON_DELIEVERY}/>
                </Button>
                <Button>
                    <Img source={HOME_FOOD_ICON_RANKING}/>
                </Button>
            </ButtonsRow>
        </ButtonsTable>
    );
};

const ButtonsTable = styled.View`
  padding-bottom: ${constants.vh(1.5)}px;
  background-color: ${(props) => props.theme.backgroundWhite};
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.fontGray};
  margin-bottom: ${constants.vh(2)}px;
`;

const ButtonsRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  width: ${constants.vw(17)}px;
  height: ${constants.vw(17)}px;;
  margin-right: ${constants.vw(1.5)}px;;;
  margin-bottom: ${constants.vw(1.5)}px;;;
`;

const Img = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;


export default RestaurantTypeButtonsTable;
