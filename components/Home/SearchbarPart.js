import React from "react";
import styled from "styled-components";
import { Image, StyleSheet, TouchableOpacity, TextInput } from "react-native";

const SearchbarPart = () => {
  const [text, onChangeText] = React.useState();
  return (
    <Searchbar>
      <TextInput
        onChangeText={onChangeText}
        value={text}
        style={styles.input}
        placeholder="위치 / 음식 키워드로 검색해주세요"
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
  height: 32%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const SearchButtonPos = styled.View`
  width: 20%;
  height: 70%;
  position: absolute;
  right: 30px;
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
