import React from "react";
import styled from "styled-components";
import constants from "../constants";

const EmptyScreenCenterView = ({children}) => {
    return (
        <EmptyView>
            {children}
        </EmptyView>
    )
}

const EmptyView = styled.View`
  width: 100%;
  height: ${constants.pureheight}px;
  justify-content: center;
  align-items: center;
`

export default EmptyScreenCenterView;