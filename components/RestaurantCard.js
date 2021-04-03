import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components";

const RestaurantCard = ({ key, onPress, name, location, price }) => {
  return (
    <TouchableOpacity key={key} activeOpacity={0.8} onPress={onPress}>
      <Card>
        <Title>{name}</Title>
        <Explanation>
          위치 : {location} 가격 : {price}
        </Explanation>
      </Card>
    </TouchableOpacity>
  );
};

const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

const Explanation = styled.Text`
  font-size: 14px;
  font-weight: 500;
  text-align: center;
`;

const Card = styled.View`
  justify-content: center;
  align-items: center;
  margin-left: 13px;
  width: 320px;
  height: 80px;
  border-radius: 15px;
  border: 1px solid black;
`;

export default RestaurantCard;
