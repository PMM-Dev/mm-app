import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Checkbox } from "react-native-paper";
import { GACHA_MACHINE_IMG } from "../images/index";
import Theme from "../style/Theme";

const Gacha = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <Page>
      <ConditionPanel>
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
          }}
        />
      </ConditionPanel>
      {/* <Machine source={GACHA_MACHINE_IMG} /> */}
    </Page>
  );
};

const Page = styled.View`
  /* background-color: ${(props) => props.theme.backgroundWhite}; */
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ConditionPanel = styled.View`
  width: 350px;
  height: 500px;
  background-color: ${(props) => props.theme.backgroundWhite};
  border-radius: 20px;
`;

const Machine = styled.Image`
  height: 70%;
  aspect-ratio: 0.57;
`;

export default Gacha;
