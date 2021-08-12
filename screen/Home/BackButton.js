import React from 'react';
import styled from "styled-components";
import {ARROW_LEFT_ICON} from "../../image";
import Theme from "../../style/Theme";
import constants from "../../constants";

const BackButton = ({goBack}) => {
    return (
        <Button onPress={goBack}>
            <Icon source={ARROW_LEFT_ICON} style={{tintColor: Theme.fontBlack}}/>
        </Button>
    )
}

const Button = styled.TouchableOpacity`
  width: ${constants.vw(9)}px;
  height: ${constants.vw(9)}px;
  justify-content: center;
  align-items: flex-start;
  padding-right: ${constants.vw(1)}px;;
`

const Icon = styled.Image`
  width: 100%;
  resize-mode: contain;
`

export default BackButton;