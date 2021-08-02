import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Image, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { SEARCHBAR } from "../../image";

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
      />
      <SearchButtonPos onPress={() => console.log("pressed")}>
        <Image source={SEARCHBAR} style={styles.search_button} />
      </SearchButtonPos>
    </Searchbar>
  );
};

const Searchbar = styled.View`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
`;

const SearchButtonPos = styled.TouchableOpacity`
  width: 20%;
  height: 85%;
  position: absolute;
  right: -2%;
`;

const styles = StyleSheet.create({
  input: {
    width: "95%",
    backgroundColor: "#ffffff",
    height: "100%",
    borderRadius: 5,
    paddingLeft: 20,
    color: "#D4D7DB",
    fontSize: 14,
  },
  search_button: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default SearchbarPart;
