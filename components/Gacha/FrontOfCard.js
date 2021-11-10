import React, {useEffect, useState} from "react";
import styled from "styled-components";
import constants from "../../constants";
import {
    GACHA_CARD_FRONT_ASIAN,
    GACHA_CARD_FRONT_DESSERT, GACHA_CARD_FRONT_FASTFOOD,
    GACHA_CARD_FRONT_FLOUR, GACHA_CARD_FRONT_JAPANESE,
    GACHA_CARD_FRONT_KOREAN, GACHA_CARD_FRONT_WESTERN
} from "../../image";
import {Converter} from "../Converter";
import RestaurantEnum from "../../RestaurantEnum";

const FrontOfCard = ({id, title, type, price, location, navigation}) => {
    const [cardImage, setCardImage] = useState(<CardImage source={GACHA_CARD_FRONT_KOREAN}/>);
    const [titleColor, setTitleColor] = useState("#000000");
    const [contentColor, setContentColor] = useState("#000000");

    const convertCardImage = () => {
        switch (type) {
            case RestaurantEnum.KOREAN:
                setCardImage(<CardImage source={GACHA_CARD_FRONT_KOREAN}/>);
                return;
            case RestaurantEnum.FLOUR:
                setCardImage(<CardImage source={GACHA_CARD_FRONT_FLOUR}/>);
                return;
            case RestaurantEnum.DESSERT:
                setCardImage(<CardImage source={GACHA_CARD_FRONT_DESSERT}/>);
                return;
            case RestaurantEnum.JAPANESE:
                setCardImage(<CardImage source={GACHA_CARD_FRONT_JAPANESE}/>);
                return;
            case RestaurantEnum.FASTFOOD:
                setCardImage(<CardImage source={GACHA_CARD_FRONT_FASTFOOD}/>);
                return;
            case RestaurantEnum.WESTERN:
                setCardImage(<CardImage source={GACHA_CARD_FRONT_WESTERN}/>);
                return;
            case RestaurantEnum.ASIAN:
                setCardImage(<CardImage source={GACHA_CARD_FRONT_ASIAN}/>);
                return;
        }
    }

    const convertTitleColor = () => {
        switch (type) {
            case RestaurantEnum.KOREAN:
                setTitleColor("#3f1f1f");
                return;
            case RestaurantEnum.FLOUR:
                setTitleColor("#3d261f");
                return;
            case RestaurantEnum.DESSERT:
                setTitleColor("#1f1f3f");
                return;
            case RestaurantEnum.JAPANESE:
                setTitleColor("#203e42");
                return;
            case RestaurantEnum.FASTFOOD:
                setTitleColor("#3a271e");
                return;
            case RestaurantEnum.WESTERN:
                setTitleColor("#3d2f1f");
                return;
            case RestaurantEnum.ASIAN:
                setTitleColor("#38381d");
                return;
        }
    }

    const convertContentColor = () => {
        switch (type) {
            case RestaurantEnum.KOREAN:
                setContentColor("#935c5c");
                return;
            case RestaurantEnum.FLOUR:
                setContentColor("#a59693");
                return;
            case RestaurantEnum.DESSERT:
                setContentColor("#9594a8");
                return;
            case RestaurantEnum.JAPANESE:
                setContentColor("#95acad");
                return;
            case RestaurantEnum.FASTFOOD:
                setContentColor("#a39893");
                return;
            case RestaurantEnum.WESTERN:
                setContentColor("#91735c");
                return;
            case RestaurantEnum.ASIAN:
                setContentColor("#9da092");
                return;
        }
    }

    useEffect(() => {
        convertCardImage();
        convertTitleColor();
        convertContentColor();
    }, [])

    return (
        <CardHolder>
            <CardButton onPress={() =>
                navigation.navigate("Restaurant", {restaurantId: id})
            }>
                {cardImage}
            </CardButton>
            <CardTouchAreaAdjustmentTopView/>
            <CardTouchAreaAdjustmentBottomView/>
            <TitleHolder>
                <Title color={titleColor}>{title}</Title>
            </TitleHolder>
            <Content color={contentColor} top={60.5}>{Converter(type)}</Content>
            <Content color={contentColor} top={65.3}>{Converter(price)}</Content>
            <Content color={contentColor} top={70.2}>{Converter(location)}</Content>
        </CardHolder>
    );
};

const CardHolder = styled.View`
  width: ${constants.vw(78)}px;
  height: ${constants.vh(100)}px;
  justify-content: center;
  align-items: center;
`

const CardButton = styled.TouchableOpacity`

`

const CardImage = styled.Image`
  width: ${constants.vh(36.2)}px;
  resize-mode: contain;
`;

const CardTouchAreaAdjustmentTopView = styled.View`
  position: absolute;
  top: 0px;
  left: 0px;
  width: ${constants.vw(100)}px;
  height: ${constants.vh(22)}px;
`

const CardTouchAreaAdjustmentBottomView = styled.View`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: ${constants.vw(100)}px;
  height: ${constants.vh(22)}px;
`

const TitleHolder = styled.View`
  position: absolute;
  top: ${constants.vh(28.2)}px;
  left: 0px;
  width: ${constants.vw(78)}px;
  height: ${constants.vh(7)}px;;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  ${(props) => props.theme.NanumSquareEBFont}
  font-size: ${constants.vh(3.4)}px;
  color: ${(props) => props.color};
`

const Content = styled.Text`
  position: absolute;
  top: ${(props) => constants.vh(props.top)}px;
  right: ${constants.vw(25.5)}px;

  ${(props) => props.theme.NanumSquareRFont}
  font-size: ${constants.vh(2.4)}px;
  color: ${(props) => props.color};
`

export default FrontOfCard;
