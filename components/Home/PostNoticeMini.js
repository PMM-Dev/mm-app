import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";

const PostNoticeMini = ({ description, year, month, day }) => {
  return (
    <Card>
      <TouchableOpacity
        style={{ flex: 1, flexDirection: "row" }}
        onPress={() => console.log("pressed")}
      >
        <Title>
          <Title_Text>{description}</Title_Text>
        </Title>
        <Date>
          <Date_Text>
            {year}-{month >= 10 ? null : 0}
            {month}-{day}
          </Date_Text>
        </Date>
      </TouchableOpacity>
    </Card>
  );
};

const Card = styled.View`
  overflow: hidden;
  width: 100%;
  flex: 1;
  flex-direction: row;
`;

const Title = styled.View`
  justify-content: center;
  align-items: center;
  width: 70%;
`;

const Title_Text = styled.Text`
  margin-left: 30px;
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.theme.fontBlack};
  text-align: left;
  width: 100%;
  ${(props) => props.theme.NanumSquareFont}
`;

const Date = styled.View`
  justify-content: center;
  align-items: center;
  width: 30%;
`;

const Date_Text = styled.Text`
  width: 100%;
  font-size: 10px;
  font-weight: 100;
  margin-left: 30px;
  ${(props) => props.theme.NanumSquareFont}
`;

export default PostNoticeMini;
