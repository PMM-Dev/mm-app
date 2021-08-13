import React from 'react';
import styled from "styled-components";
import SearchButton from "./SearchButton";

const MapHeaderMenu = ({navigation, routeName}) => {
    return (
        <>
            <EmptyMenu/>
            <SearchButton navigation={navigation} routeName={routeName} />
        </>
    )
}

const EmptyMenu = styled.View``


export default MapHeaderMenu;