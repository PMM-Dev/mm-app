import React from "react";
import styled from "styled-components";

const RestaurantTypeCard = ({ index }) => {
  const colors = ["#e3ffff", "#ffe0d9", "#fff6d9"];
  const type = [
    "한식",
    "양식",
    "분식",
    "돈까스 회\n일식",
    "치킨 피자\n패스트푸드",
    "중식\n아시안식",
    "야식",
    "카페\n디저트",
  ];

  return (
    <Card
      last={index === type.length - 1}
      color={
        colors[
          (index + 1) % colors.length === 0
            ? colors.length - 1
            : ((index + 1) % colors.length) - 1
        ]
      }
    >
      <Title>{type[index]}</Title>
    </Card>
  );
};

const Title = styled.Text`
  font-size: 14px;
  font-weight: 700;
  text-align: center;
`;

const Card = styled.View`
  justify-content: center;
  align-items: center;
  margin-left: 13px;
  margin-right: ${(props) => (props.last === true ? "13px" : "0")};
  width: 160px;
  height: 160px;
  background-color: ${(props) => props.color};
  border-radius: 15px;
`;

export default RestaurantTypeCard;
