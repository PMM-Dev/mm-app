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
  width: 100%;
  height: 13%;
  justify-content: center;
  align-items: center;
`;

const AboutDescriptionText = styled.Text`
  text-align: center;
  font-size: ${constants.vw(3)}px;
  font-family: "NanumSquare";
`;

const AboutAddressText = styled.Text`
  text-align: center;
  font-size: ${constants.vw(3)}px;
  font-family: "NanumSquare";
`;

const AboutTitleText = styled.Text`
  text-align: center;
  font-size: ${constants.vw(4.6)}px;
  font-family: "NanumSquare";
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
