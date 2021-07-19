import React from "react";
import styled from "styled-components";

const ResultPanel = () => {
  return <Panel></Panel>;
};

const Panel = styled.View`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.backgroundWhite};
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  ${(props) => props.theme.NanumGothicBoldFont};
  font-size: 30px;
  color: ${(props) => props.theme.fontBlack};
`;

export default ResultPanel;
