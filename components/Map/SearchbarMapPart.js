import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Image, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import SearchbarPart from "./SearchbarPart";
import { FILTER } from "../../images/index";

const SearchbarMapPart = () => {
  return (
    <SearchBarMap>
      <SearchBar>
        <SearchbarPart />
      </SearchBar>
      <SettingButtonPos>
        <SettingButton onPress={() => console.log("pressed")}>
          <Image source={FILTER} style={styles.search_button} />
        </SettingButton>
      </SettingButtonPos>
    </SearchBarMap>
  );
};

const SettingButton = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
`;

const styles = StyleSheet.create({
  search_button: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

const SearchBarMap = styled.View`
  position: absolute;
  width: 100%;
  height: 6%;
  top: 9%;
  flex-direction: row;
`;

const SearchBar = styled.View`
  width: 81%;
  height: 100%;
`;

const SettingButtonPos = styled.View`
  width: 19%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export default SearchbarMapPart;
