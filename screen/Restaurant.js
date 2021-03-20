import React from "react";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";

const Holder = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text``;

const Restaurant = ({route}) => {
  const data = route.params;
  console.log(data);
  return (
    <Holder>
      <Title>789</Title>
    </Holder>
  );
};

export default Restaurant;
