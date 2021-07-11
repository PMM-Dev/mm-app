import React from "react";
import styled from "styled-components";

const Credit = () => {
  return (
    <Page>
      <Text>개발 : PMM Dev</Text>
    </Page>
  );
};

const Page = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.backgroundWhite};
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

export default Credit;
