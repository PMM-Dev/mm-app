import React from "react";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { Button} from "react-native-paper";
import CommentText from "../components/CommentText";
import { useState, useEffect } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import {TouchableOpacity} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";

const Comment = () => {
  const Dummy = 
  [{
    writer : "YUNSU",
    description: "창평국밥맛있나?" ,
    like : 10,
  },
  {
    writer : "SOONCHAN",
    description: "ㄴㄴ" ,
    like : 5,
  },
  {
    writer : "ASD",
    description: "너 어디사냐?" ,
    like : 3,
  },
  {
    writer : "SOONCHAN",
    description: "기숙사" ,
    like : 2,
  },
  {
    writer : "ASD",
    description: "창평국밥 앞으로 나와라" ,
    like : 2,
  },
  {
    writer : "SOONCHAN",
    description: "ㅇㅇㅇ" ,
    like : 3,
  },
  {
    writer : "YUNSU",
    description: "YUNSU" ,
    like : 9,
  },
  {
    writer : "YUNSU",
    description: "YUNSU" ,
    like : 9,
  },
  {
    writer : "YUNSU",
    description: "YUNSU" ,
    like : 9,
  },
];
  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
  };
  const navigation = useNavigation();
  const [text, setText] = useState('');
  const [count, setCount] = useState([]);
  useEffect(()=>{
    setCount(Dummy)
  },[]);
  const CommentList = count.map((element,key) => 
  <CommentText key = {key} writer = {element.writer} description = {element.description} like = {element.like}/>
  );
  return (
    <Holder>
      <UpView>     
        <ScrollView onScroll={({nativeEvent}) => {
          if (isCloseToBottom(nativeEvent)) {
            console.log("I'm bottom");
          }
        }}
          scrollEventThrottle={400}
        >  
          {CommentList}
        </ScrollView>
      </UpView>
      <DownView>
        <View>
          <TextInput
            placeholder="댓글을 입력하세요!"
            onChangeText={text => setText(text)}
            defaultValue={text}
            style = {{flex : 1,
              height : 40,
            }}
          />
        </View>
        <Button
          mode="contained"
          color="#8A2BE2"
          onPress={() => console.log("Pressed")}
        >
          <Text>글 작성!</Text>
        </Button>
      </DownView>
    </Holder>
  );
};

const Text = styled.Text``;

const View = styled.View`
  flex:1;
  border : 1px black;
`;

const UpView = styled.View` 
  height:80%;
  width:100%;
`;

const DownView = styled.View` 
  height:20%;
  width:100%; 
  justify-content: flex-end;
  align-items: center;
  flexDirection: row;
`;

const Holder = styled.View`
  flex: 1;
  background-color: white;
  margin-top: 10px;
  margin-bottom: 10px;
`;


export default Comment;
