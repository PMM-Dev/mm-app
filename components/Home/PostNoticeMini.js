import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import constants from "../../constants";

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
  ${(props) => props.theme.NanumSquareRFont}
  margin-left: ${constants.vw(8)}px;
  font-size: ${constants.vw(3)}px;
  font-weight: 700;
  color: ${(props) => props.theme.fontBlack};
  text-align: left;
  width: 100%;
`;

const Date = styled.View`
  justify-content: center;
  align-items: center;
  width: 30%;
`;

const Date_Text = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  width: 100%;
  font-size: ${constants.vw(2.65)}px;
  font-weight: 100;
  margin-left: ${constants.vw(2.1)}px;
`;

export default PostNoticeMini;
