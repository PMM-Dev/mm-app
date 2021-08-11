import React from "react";
import styled from "styled-components";
import {LOGO_TEXT, MAGNIFY_ICON} from "../../image";
import constants from "../../constants";

const Header = ({navigation}) => {
    return (
        <Bar>
            <Logo source={LOGO_TEXT}/>
            <ButtonsHolder>
                <Button onPress={() =>
                    navigation.navigate("Search", {
                        param: {searchType: "HOME"},
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
  padding-left: ${constants.vw(5)}px;
  background-color: ${(props) => props.theme.backgroundWhite};
`;

const Logo = styled.Image`
  height: ${constants.vh(7)}px;
  width: ${constants.vh(7.5) * 2.76470588235294}px;
`;

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
