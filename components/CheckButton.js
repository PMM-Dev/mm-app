import React from "react";
import styled from "styled-components";
import Theme from "../style/Theme";
import constants from "../constants";

const CheckButton = ({ text, checked, setChecked }) => {
  return (
    <Button onPress={() => setChecked((prev) => !prev)}>
      <Text checked={checked}>{text}</Text>
    </Button>
  );
};

const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin: ${constants.vh(1)}px ${constants.vw(2)}px;
`;

const Text = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  font-size: ${constants.vw(4)}px;;
  color: ${(props) => props.checked ? props.theme.hlOrange : props.theme.fontBlackGray};
`;

export default CheckButton;
