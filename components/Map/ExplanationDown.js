import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Image, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import StarMaker from "./StarMaker";

const ExplanationDownView = ({ data, whichBookmark }) => {
  return (
    <ExplanationDown>
      <ExplanationImage>
        <ExplanationImageImg source={require("../../assets/tmp.jpg")} />
      </ExplanationImage>
      <ExplanationRateButton>
        <ExplanationRate>
          <StarMaker rate={data[whichBookmark].rating} />
        </ExplanationRate>
        <ExplanationTag></ExplanationTag>
        <ExplanationMoreButton>
          <TouchableOpacity>
            <ExplanationMoreButtonText>
              후기 더 보러가기 +
            </ExplanationMoreButtonText>
          </TouchableOpacity>
        </ExplanationMoreButton>
      </ExplanationRateButton>
    </ExplanationDown>
  );
};

const ExplanationMoreButtonText = styled.Text``;

const ExplanationMoreButton = styled.View`
  height: 30%;
  width: 100%;
`;

const ExplanationTag = styled.View`
  height: 25%;
  width: 100%;
`;

const ExplanationRate = styled.View`
  height: 45%;
  width: 100%;
`;

const ExplanationImageImg = styled.Image`
  height: 90%;
  width: 80%;
  border-radius: 15px;
`;

const ExplanationDown = styled.View`
  height: 60%;
  width: 100%;
  flex-direction: row;
`;

const ExplanationImage = styled.View`
  height: 100%;
  width: 35%;
  align-items: center;
`;

const ExplanationRateButton = styled.View`
  height: 100%;
  width: 65%;
`;

export default ExplanationDownView;
