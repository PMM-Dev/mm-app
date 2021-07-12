import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Image, StyleSheet, TouchableOpacity, TextInput } from "react-native";

const ExplanationUpView = ({ data }) => {
<<<<<<< HEAD
=======
  console.log(data);
>>>>>>> master
  return (
    <ExplanationUp>
      <ExplanationTitle>
        <ExplanationTitleText>{data.title}</ExplanationTitleText>
      </ExplanationTitle>
      <ExplanationAddressContact>
        <ExplanationAddress>
          <ExplanationAddressText>주소: {data.address}</ExplanationAddressText>
        </ExplanationAddress>
        <ExplanationContact>
          <ExplanationContactText>연락처: {data.number}</ExplanationContactText>
        </ExplanationContact>
      </ExplanationAddressContact>
      <HeartButtonPos>
        <TouchableOpacity>
          {data.bookmarked ? (
            <HeartImg source={require("../../assets/heart_2.png")} />
          ) : (
            <HeartImg source={require("../../assets/heart_1.png")} />
          )}
        </TouchableOpacity>
      </HeartButtonPos>
    </ExplanationUp>
  );
};

const HeartImg = styled.Image`
  height: 100%;
  width: 100%;
`;

const HeartButtonPos = styled.View`
  position: absolute;
  width: 10%;
  height: 40%;
  top: 15%;
  right: 8%;
`;

const ExplanationUp = styled.View`
  height: 40%;
  width: 100%;
  right: -4%;
`;

const ExplanationTitle = styled.View`
  height: 50%;
  width: 100%;
  justify-content: center;
`;

const ExplanationTitleText = styled.Text`
  font-size: 22px;
`;

const ExplanationAddressText = styled.Text`
  font-size: 12px;
  letter-spacing: 1px;
`;

const ExplanationContactText = styled.Text`
  font-size: 12px;
  letter-spacing: 1px;
`;

const ExplanationAddressContact = styled.View`
  height: 50%;
  width: 100%;
`;

const ExplanationAddress = styled.View`
  height: 40%;
  width: 100%;
`;

const ExplanationContact = styled.View`
  height: 40%;
  width: 100%;
`;

export default ExplanationUpView;
