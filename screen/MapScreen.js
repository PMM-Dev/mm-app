import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "react-native-paper";

const View = styled.View`
  justify-content: center;
  align-items: center;
  background-color: white;
  flex: 1;
`;

const Title = styled.Text`
  font-weight: 500;
  font-size: 48px;
  color: black;
`;

const MapScreen = () => {
  return (
    <View>
      <Title>MapScreen</Title>
    </View>
  );
};

export default MapScreen;
