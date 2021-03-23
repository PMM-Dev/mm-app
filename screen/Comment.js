import React from "react";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { Button} from "react-native-paper";
import CommentText from "../components/CommentText";
import { useState, useEffect } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import {TouchableOpacity} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

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
  const navigation = useNavigation();
  const [count, setCount] = useState([]);
  useEffect(()=>{
    setCount(Dummy)
  },[]);
//   const [CommentPage,setCommentPage] = useState([]);
//   let tmpCommentPage = [];
//   count.forEach((cnt,idx) => {
//         tmpCommentPage.push(cnt)
//         if(idx%7==0)
//         {
//             setCommentPage(tmpCommentPage);
//             tmpCommentPage = [];
//         }
//   })
  const CommentList = count.map((element,key) => 
  <CommentText key = {key} writer = {element.writer} description = {element.description} like = {element.like}/>
  );
  return (
    <Holder>
      <UpView>     
        <ScrollView>  
          {CommentList}
        </ScrollView>
      </UpView>
      <DownView>
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

const UpView = styled.View` 
  height:80%;
  width:100%;
`;

const DownView = styled.View` 
  height:20%;
  width:100%; 
  justify-content: center;
  align-items: center;
`;

const Holder = styled.View`
  flex: 1;
  background-color: white;
  margin-top: 10px;
  margin-bottom: 10px;
`;


export default Comment;
