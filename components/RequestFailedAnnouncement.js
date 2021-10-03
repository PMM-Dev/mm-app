import React from 'react';
import styled from 'styled-components';
import constants from "../constants";
import {REQUEST_FAILED_ANNOUNCEMENT} from '../image';

const RequestFailedAnnouncement = () => {
    return (
        <Holder>
            <Icon source={REQUEST_FAILED_ANNOUNCEMENT}/>
            <Title>아이고! 문제가 생긴 것 같아요</Title>
        </Holder>
    )
}

const Holder = styled.View`
  width: 100%;
  height: 100%;
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

export default RequestFailedAnnouncement;