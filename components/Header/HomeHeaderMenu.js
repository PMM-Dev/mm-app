import React from 'react';
import styled from "styled-components";
import {LOGO_TEXT} from "../../image";
import constants from "../../constants";
import SearchButton from "./SearchButton";

const HomeHeaderMenu = ({navigation, routeName}) => {
    return (
        <>
            <Logo source={LOGO_TEXT}/>
            <SearchButton navigation={navigation} routeName={routeName} />
        </>
    )
}

const Logo = styled.Image`
  height: ${constants.vh(7)}px;
  width: ${constants.vh(7.5) * 2.76470588235294}px;
`;

export default HomeHeaderMenu;