import React from "react";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";

const Holder = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text``;

const DessertList = () => {
  const navigation = useNavigation();

  return (
    <Holder>
      <Title>Dessert</Title>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("Restaurant")}
      >
        List
      </Button>
    </Holder>
  );
};

export default DessertList;
