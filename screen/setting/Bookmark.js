import React from "react";
import styled from "styled-components";

const Bookmark = () => {
  return <Page></Page>;
};

const Page = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.backgroundWhite};
`;

export default Bookmark;
