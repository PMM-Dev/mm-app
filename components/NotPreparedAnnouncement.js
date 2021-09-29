import React from 'react';
import styled from 'styled-components';
import constants from "../constants";
import {NOT_PREPARED} from '../image';

const NotPreparedAnnouncement = () => {
    return (
        <Mask>
            <Icon source={NOT_PREPARED}/>
            <Title>아직 공사중이에요</Title>
        </Mask>
    )
}

const Mask = styled.View`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
`

const Icon = styled.Image`
  height: ${constants.vh(15)}px;
  resize-mode: contain;
`

const Title = styled.Text`
  ${(props) => props.theme.NanumSquareBFont};
  font-size: ${constants.vw(3.5)}px;
  color: ${(props) => props.theme.fontDeepBlack};
  margin-top: ${constants.vh(0.5)}px;
`

export default NotPreparedAnnouncement;