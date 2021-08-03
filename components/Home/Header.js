import React from "react";
import styled from "styled-components";
import {LOGO_TEXT, MAGNIFY} from "../../image";
import constants from "../../constants";

const Header = () => {
    return (
        <Bar>
            <Logo source={LOGO_TEXT}/>
            <ButtonsHolder>
                <Button>
                    <Icon source={MAGNIFY} style={{tintColor: "#000000"}}/>
                </Button>
            </ButtonsHolder>
        </Bar>
    );
};

const Bar = styled.View`
  width: 100%;
  height: ${constants.vh(7) + constants.statusBarHeight};
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-left: ${constants.vw(5)};;
`;

const Logo = styled.Image`
  height: ${constants.vh(7)};
  width: ${constants.vh(7.5) * 2.76470588235294};;
`;

const ButtonsHolder = styled.View`
  width: 50%;
  height: 100%;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`

const Button = styled.TouchableOpacity`
  padding: 3px;
  background-color: ${(props) => props.theme.backgroundDarkerGray};
  border-radius: 1000px;
  margin-right: ${constants.vw(2)};
  margin-bottom: ${constants.vw(2)};
`

const Icon = styled.Image`
  width: ${constants.vw(6.5)};
  height: ${constants.vw(6.5)};
`

export default Header;
