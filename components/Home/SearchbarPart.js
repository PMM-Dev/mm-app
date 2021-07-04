import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Image, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Theme from "../../style/Theme";

const SearchbarPart = () => {
  const [text, onChangeText] = useState();

  useEffect(() => {
    return () => onChangeText("");
  }, []);

  return (
    <Searchbar>
      <TextInput
        onChangeText={onChangeText}
        value={text}
        style={styles.input}
        placeholder="위치 / 음식 키워드로 검색해주세요"
        placeholderTextColor={Theme.fontGray}
      />
      <SearchButtonPos>
        <TouchableOpacity onPress={() => console.log("pressed")}>
          <Image
            source={require("../../assets/search_1.png")}
            style={styles.search_button}
          />
        </TouchableOpacity>
      </SearchButtonPos>
    </Searchbar>
  );
};

const Searchbar = styled.View`
  width: 100%;
  height: 26%;
  top: 3px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const SearchButtonPos = styled.View`
  width: 20%;
  height: 70%;
  position: absolute;
  right: 2%;
`;

const styles = StyleSheet.create({
  input: {
    width: "90%",
    backgroundColor: "#ffffff",
    height: "80%",
    borderRadius: 5,
    paddingLeft: 20,
    color: "#D4D7DB",
    fontSize: 16,
  },
  search_button: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default SearchbarPart;
