import React from "react";
import { Checkbox as PaperCheckbox } from "react-native-paper";
import styled from "styled-components";
import Theme from "../style/Theme";

const Checkbox = ({ text, checked, setChecked }) => {
  return (
    <Holder>
      <Text>{text}</Text>
      <PaperCheckbox
        status={checked ? "checked" : "unchecked"}
        onPress={() => {
          setChecked(!checked);
        }}
        color={Theme.hlRed}
      />
    </Holder>
  );
};

const Holder = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  ${(props) => props.theme.NanumSquareFont}
  font-size: 16px;
  color: ${(props) => props.theme.fontBlack};
`;

export default Checkbox;
