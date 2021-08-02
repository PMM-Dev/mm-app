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

const StringScreen = [
    {genre: "KOREAN"},
    {genre: "FLOUR"},
    {genre: "WESTERN"},
    {genre: "ASIAN"},
    {genre: "JAPANESE"},
    {genre: "DESSERT"},
    {genre: "FASTFOOD"},
];

const ButtonPart = ({navigation}) => {
    return (
        <Buttons>
            <ButtonsFirstRow>
                <EachButton
                    onPress={() =>
                        navigation.navigate("ResList", {
                            param: StringScreen[0],
                        })
                    }
                >
                    <Img source={HOME_FOOD_ICON_KOREAN}/>
                </EachButton>
                <EachButton
                    onPress={() =>
                        navigation.navigate("ResList", {
                            param: StringScreen[1],
                        })
                    }
                >
                    <Img source={HOME_FOOD_ICON_FLOUR}/>
                </EachButton>
                <EachButton>
                    <Img source={HOME_FOOD_ICON_WESTERN}/>
                </EachButton>
                <EachButton>
                    <Img source={HOME_FOOD_ICON_ASIAN}/>
                </EachButton>
                <EachButton>
                    <Img source={HOME_FOOD_ICON_JAPANESE}/>
                </EachButton>
            </ButtonsFirstRow>
            <ButtonsSecondRow>
                <EachButton>
                    <Img source={HOME_FOOD_ICON_DESSERT}/>
                </EachButton>
                <EachButton>
                    <Img source={HOME_FOOD_ICON_NIGHTFOOD}/>
                </EachButton>
                <EachButton>
                    <Img source={HOME_FOOD_ICON_FASTFOOD}/>
                </EachButton>
                <EachButton>
                    <Img source={HOME_FOOD_ICON_DELIEVERY}/>
                </EachButton>
                <EachButton>
                    <Img source={HOME_FOOD_ICON_RANKING}/>
                </EachButton>
            </ButtonsSecondRow>
        </Buttons>
    );
};

const Img = styled.Image`
  width: 98%;
  height: 100%;
  border-radius: 10px;
`;

const Buttons = styled.View`
  top: 2%;
  width: 100%;
  height: 72%;
  align-items: center;
`;

const ButtonsFirstRow = styled.View`
  width: 90%;
  height: 45%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const EachButton = styled.TouchableOpacity`
  width: 20%;
  margin: 0px;
`;

const ButtonsSecondRow = styled.View`
  width: 90%;
  height: 45%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  top: 3px;
`;

export default ButtonPart;
