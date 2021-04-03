import React from "react";
import styled from "styled-components";
import { Button } from "react-native-paper";

const Holder = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text``;

const DessertList = ({ navigation: { navigate } }) => {
  return (
    <Holder>
      <Title>Dessert</Title>
      <Button mode="contained" onPress={() => navigate("Restaurant")}>
        List
      </Button>
    </Holder>
  );
};

export default DessertList;
