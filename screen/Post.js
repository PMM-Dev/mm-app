import React from "react";
import styled from "styled-components";
import { Button } from "react-native-paper";
import CommentText from "../components/CommentText";
import { useState, useEffect } from "react";
import { ScrollView, TextInput } from "react-native";

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

const Restaurant = ({ route }) => {
  const [count, setCount] = useState([]);
  useEffect(() => {
    setCount(Dummy);
  }, []);

  const { title, like, writer, description, time } = route.params.data;
  const [text, setText] = useState("");
  return (
    <Holder>
      <UpView>
        <Title>
          <RealTitle>
            <TitleText>{title}</TitleText>
          </RealTitle>
          <TitleExcept>
            <Writer>
              <TitleExceptFont>{writer}</TitleExceptFont>
            </Writer>
            <TimeWrite>
              <TitleExceptFont>
                {time.year}/{time.month}/{time.day}
              </TitleExceptFont>
              <TitleExceptFont>
                {time.hour}:{time.minute}
              </TitleExceptFont>
            </TimeWrite>
          </TitleExcept>
        </Title>
        <DescriptionView>
          <DescriptionText>{description}</DescriptionText>
        </DescriptionView>
        <LikeView>
          <Likenum>{like}</Likenum>
          <Button
            icon="thumb-up"
            color="#8A2BE2"
            onPress={() => console.log("Pressed")}
          />
        </LikeView>
      </UpView>
      <DownView>
        <ScrollView>
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
        </ScrollView>
      </DownView>
      <Input>
        <View>
          <TextInput
            placeholder="댓글을 입력하세요!"
            onChangeText={(text) => setText(text)}
            defaultValue={text}
            style={{ flex: 1, height: 40 }}
          />
        </View>
        <Button
          mode="contained"
          color="#8A2BE2"
          onPress={() => console.log("Pressed")}
        >
          <Text>글 작성!</Text>
        </Button>
      </Input>
    </Holder>
  );
};

const LikeView = styled.View`
  height: 10%;
  width: 100%;
  flexdirection: row;
  align-items: center;
  justify-content: flex-end;
`;

const Likenum = styled.Text``;

const TitleText = styled.Text`
  font-size: 18px;
`;

const Title = styled.View`
  height: 40%;
  width: 100%;
  flexdirection: row;
`;

const Writer = styled.View`
  align-items: center;
  justify-content: center;
  height: 50%;
`;

const TimeWrite = styled.View`
  align-items: center;
  justify-content: center;
  height: 50%;
`;

const TitleExceptFont = styled.Text``;

const RealTitle = styled.View`
  height: 100%;
  width: 70%;
  align-items: center;
  justify-content: center;
`;

const TitleExcept = styled.View`
  height: 100%;
  width: 30%;
  flexdirection: column;
`;

const DescriptionView = styled.View`
  height: 50%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text``;

const DescriptionText = styled.Text`
  text-align: center;
`;

const Input = styled.View`
  height: 20%;
  width: 100%;
`;

const UpView = styled.View`
  height: 40%;
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

const CommentView = styled.View`
  align-items: center;
  height: 70%;
  width: 100%;
`;

const View = styled.View`
  flex: 1;
  border: 1px black;
`;

export default Restaurant;
