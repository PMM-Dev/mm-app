import React from "react";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import CommentText from "../components/CommentText";
import { useState, useEffect } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native";

const Dummy = [
  {
    writer: "YUNSU",
    description: "창평국밥맛있나?",
    like: 10,
  },
  {
    writer: "SOONCHAN",
    description: "ㄴㄴ",
    like: 5,
  },
  {
    writer: "ASD",
    description: "너 어디사냐?",
    like: 3,
  },
];

// Dummy, navigation, 설명한대로
const Restaurant = ({ navigation: { navigate }, route }) => {
  const [count, setCount] = useState([]);
  useEffect(() => {
    setCount(Dummy);
  }, []);

  const {
    name,
    type,
    description,
    location,
    price,
    deliverable,
  } = route.params.data;

  // CommentList 도 설명한것과 같은 이유로 이런식으로 분리하면 안됨.
  // 분리하고 싶다면, 댓글 리스트 통째로 (CommentView)

  // 여기서 MoreButton 같이 재활용될 여지가 상당히 큰 UI는 component에 따로 분리하는게 좋음
  // 하고 싶으면 하셈. 단 하는걸 추천
  return (
    <Holder>
      <UpView>
        <Title>{name}</Title>
        <ExplanationTotal>
          <Explanation>{description}</Explanation>
          <Explanation>{location}</Explanation>
          <Explanation>{price}</Explanation>
          <Explanation>{type}</Explanation>
          <Explanation>{deliverable}</Explanation>
        </ExplanationTotal>
      </UpView>
      <DownView>
        <MoreButton>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigate("Comment")}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Text>전체보기</Text>
            <AntDesign name="right" />
          </TouchableOpacity>
        </MoreButton>
        <CommentView>
          {count.map((element, key) => (
            <CommentText
              key={key}
              writer={element.writer}
              description={element.description}
              like={element.like}
            />
          ))}
        </CommentView>
      </DownView>
    </Holder>
  );
};

const Text = styled.Text``;

const UpView = styled.View`
  height: 50%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const DownView = styled.View`
  height: 40%;
  width: 100%;
`;

const Holder = styled.View`
  flex: 1;
  background-color: white;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const ExplanationTotal = styled.View`
  justify-content: center;
  align-items: center;
`;
const Explanation = styled.Text``;
const Title = styled.Text`
  font-size: 48px;
  margin-bottom: 10px;
`;
const CommentView = styled.View`
  align-items: center;
  height: 90%;
  width: 100%;
`;

const MoreButton = styled.View`
  height: 10%;
  width: 100%;
  margin-bottom: 10px;
`;

export default Restaurant;
