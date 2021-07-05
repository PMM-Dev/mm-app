import React from "react";
import styled from "styled-components";

const SearchbarPart = () => {
  return (
    <Logo>
      <Logopos>
        <LogoImage source={require("../../assets/logo.png")} />
        <LogoTextImage source={require("../../assets/logo_text.png")} />
      </Logopos>
    </Logo>
  );
};

const LogoImage = styled.Image`
  width: 20%;
  height: 80%;
  resize-mode: contain;
`;

const LogoTextImage = styled.Image`
  width: 70%;
  height: 80%;
  resize-mode: contain;
`;

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
  bottom: -6px;
`;

export default SearchbarPart;
