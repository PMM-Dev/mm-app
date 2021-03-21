import React from "react";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";


const Restaurant = ({route}) => {
  const navigation = useNavigation();
  const data = route.params;
  console.log(data);
  
  return (
    <Holder>
      <Img></Img>
      <Title>{data.data.name}</Title>
      <ExplanationTotal>
        <Explanation>{data.data.description}</Explanation>
        <Explanation>{data.data.location}</Explanation>
        <Explanation>{data.data.price}</Explanation>
        <Explanation>{data.data.type}</Explanation>
        <Explanation>{data.data.deliverable}</Explanation>
      </ExplanationTotal>
    </Holder>
  );
};


const Holder = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const ExplanationTotal = styled.View`
  justify-content: center;
  align-items: center;
`;
const Explanation = styled.Text`
`;
const Img = styled.Image``;
const Title = styled.Text`
  font-size: 36px;
  margin-bottom : 10px;
`;

export default Restaurant;
