import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MAGNIFY_ICON } from "../../image";
import Theme from "../../style/Theme";
import constants from "../../constants";

const SearchTextInput = ({ changePressed }) => {
  const [text, onChangeText] = useState();

  useEffect(() => {
    return () => onChangeText("");
  }, []);

  return (
    <Holder>
      <IconHolder>
        <Icon
          source={MAGNIFY_ICON}
          style={{ tintColor: Theme.fontBlackGray }}
        />
      </IconHolder>
      <Input
        onChangeText={onChangeText}
        value={text}
        placeholder="위치 / 음식 키워드로 검색해주세요"
        placeholderTextColor={Theme.fontBlackGray}
        underlineColorAndroid="rgba(0,0,0,0)"
        onFocus={() => {
          changePressed(true);
        }}
        onSubmitEditing={() => {
          changePressed(false);
          onChangeText("");
        }}
      />
    </Holder>
  );
};

const Holder = styled.View`
  width: ${constants.vw(84)}px;
  height: 43%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Input = styled.TextInput`
  width: 83%;
  height: 100%;
  background-color: ${(props) => props.theme.backgroundGray};
  border-top-right-radius: ${constants.vh(1.5)}px;
  border-bottom-right-radius: ${constants.vh(1.5)}px;

  color: ${(props) => props.theme.fontBlack};
  font-size: ${constants.vh(1.5)}px;
`;

const IconHolder = styled.View`
  width: 17%;
  height: 101%;
  background-color: ${(props) => props.theme.backgroundGray};
  border-top-left-radius: ${constants.vh(1.5)}px;
  border-bottom-left-radius: ${constants.vh(1.5)}px;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.Image`
  height: 50%;
  resize-mode: contain;
`;

export default SearchTextInput;
