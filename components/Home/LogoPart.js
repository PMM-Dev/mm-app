import React from "react";
import styled from "styled-components";
import { Image, StyleSheet } from "react-native";

const SearchbarPart = () => {
  return (
    <Logo>
      <Logopos>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Image
          source={require("../../assets/logo_text.png")}
          style={styles.logo_text}
        />
      </Logopos>
    </Logo>
  );
};

const Logo = styled.View`
  width: 100%;
  height: 14%;
  flex: 1;
`;

const Logopos = styled.View`
  width: 60%;
  height: 80%;
  flex: 1;
  justify-content: center;
  align-items: flex-end;
  flex-direction: row;
  bottom: -10px;
`;

const styles = StyleSheet.create({
  logo: {
    width: "20%",
    height: "80%",
    resizeMode: "contain",
  },
  logo_text: {
    width: "70%",
    height: "80%",
    resizeMode: "contain",
  },
});

export default SearchbarPart;
