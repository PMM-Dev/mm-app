import React from "react";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import { useState, useEffect } from "react";

const Holder = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text``;
const KoreanScreen = () => {
  const Dummy = 
  {
    name: "창평국밥",
    description: "맛있음" ,
    type: "KOREAN",
		price: "CHEAP",
		location: "ARTGATE",
		deliveryable: "FALSE" 
  };
  const navigation = useNavigation();
  const [count, setCount] = useState([]);
  useEffect(()=>{
    setCount(Dummy)
  },[]); 
  console.log(count);
  return (
    <Holder>
      <Title>Korean</Title>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("Restaurant")}
      >
        List
      </Button>
    </Holder>
  );
};

export default KoreanScreen;
