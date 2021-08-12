import React, {useEffect} from "react";
import styled from "styled-components";
import {LOGO_TEXT, MAGNIFY_ICON} from "../../image";
import constants from "../../constants";
import BackButton from "../../screen/Home/BackButton";

const Header = ({route, navigation, genre}) => {
    return (
        <Bar>
            <TitleHolder>
                <Title>{genre}</Title>
            </TitleHolder>
            {route.name === "Home" ? <Logo source={LOGO_TEXT}/> : <BackButton goBack={() => navigation.goBack()}/>}
            <ButtonsHolder>
                <Button onPress={() =>
                    navigation.navigate("Search", {
                        param: {searchType: "Home"},
                    })
                }>
                    <Icon source={MAGNIFY_ICON} style={{tintColor: "#000000"}}/>
                </Button>
            </ButtonsHolder>
        </Bar>
    );
};

const Bar = styled.View`
  width: 100%;
  height: ${constants.vh(5.5) + constants.statusBarHeight}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  background-color: ${(props) => props.theme.backgroundWhite};
  padding: 0px ${constants.vw(2)}px;
  padding-bottom: ${constants.vh(0.5)}px;
`;

const Logo = styled.Image`
  height: ${constants.vh(7)}px;
  width: ${constants.vh(7.5) * 2.76470588235294}px;
`;

const TitleHolder = styled.View`
  width: 100%;
  height: ${constants.vh(5.5) + constants.statusBarHeight}px;
  padding-bottom: ${constants.vh(1)}px;
  position: absolute;
  top: 0px;
  left: 0px;
  justify-content: flex-end;
  align-items: center;
`

const Title = styled.Text`
${(props) => props.theme.NanumGothicFont};
font-size: ${constants.vh(2)}px;
`

const ButtonsHolder = styled.View`
  width: 50%;
  height: 100%;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`

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

export default Header;
