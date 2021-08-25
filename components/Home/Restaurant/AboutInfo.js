import React from "react";
import styled from "styled-components";
import constants from "../../../constants";

const ResAboutInfo = ({ data, korLocation }) => {
  return (
    <ResAboutInfoView>
      <AboutTitle>
        <AboutTitleText>ABOUT</AboutTitleText>
      </AboutTitle>
      <AboutAddress>
        <AboutAddressText>주소 : {korLocation}</AboutAddressText>
      </AboutAddress>
      <AboutDescription>
        <AboutDescriptionText>설명 : {data.description}</AboutDescriptionText>
      </AboutDescription>
    </ResAboutInfoView>
  );
};

const ResAboutInfoView = styled.View`
  top: 3px;
  width: 100%;
  height: 10%;
  justify-content: center;
  align-items: center;
`;

const AboutDescriptionText = styled.Text`
  ${(props) => props.theme.NanumSquareFont}
  text-align: center;
  font-size: ${constants.vw(3)}px;
`;

const AboutAddressText = styled.Text`
  ${(props) => props.theme.NanumSquareFont}
  text-align: center;
  font-size: ${constants.vw(3)}px;
`;

const AboutTitleText = styled.Text`
  ${(props) => props.theme.NanumSquareFont}
  text-align: center;
  font-size: ${constants.vw(4.6)}px;
`;

const AboutAddress = styled.View`
  height: 25%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const AboutDescription = styled.View`
  height: 45%;
  width: 60%;
`;

const AboutTitle = styled.View`
  height: 30%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export default ResAboutInfo;
