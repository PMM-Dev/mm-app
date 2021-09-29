import React from 'react';
import styled from 'styled-components';
import constants from "../constants";
import {NO_RESULT} from '../image';

const NoContentAnnouncement = () => {
    return (
        <Holder>
            <Icon source={NO_RESULT}/>
            <Title>아직 데이터가 부족해서 쓸쓸해요</Title>
        </Holder>
    )
}

const Holder = styled.View`
  width: 100%;
  height: ${constants.contentHeight}px;
  justify-content: center;
  align-items: center;
`

const Icon = styled.Image`
  height: ${constants.vh(15)}px;
  resize-mode: contain;
`

const Title = styled.Text`
  ${(props) => props.theme.NanumSquareBFont};
  font-size: ${constants.vw(3.5)}px;
  color: ${(props) => props.theme.fontBlack};
  margin-top: ${constants.vh(2.5)}px;
`

export default NoContentAnnouncement;