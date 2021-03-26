import React from "react";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { Button} from "react-native-paper";
import CommentText from "../components/CommentText";
import { useState, useEffect } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import {TouchableOpacity} from "react-native";

const Restaurant = ({route}) => {
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
];
  const navigation = useNavigation();
  const [count, setCount] = useState([]);
  useEffect(()=>{
    setCount(Dummy)
  },[]);
  const {name, type, description, location,price,deliverable} = route.params.data;
  const CommentList = count.map((element,key) => 
  <CommentText key = {key} writer = {element.writer} description = {element.description} like = {element.like}/>
  );
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
          onPress={() => navigation.navigate("Comment")}
          style = {{
            flexDirection: 'row',
            alignItems: 'center',          
            justifyContent:'flex-end',
          }}
          >           
            <Text>전체보기</Text>
            <AntDesign name="right" />
          </TouchableOpacity> 
        </MoreButton>
        <CommentView>
          {CommentList}
        </CommentView>
      </DownView>
    </Holder>
  );
};

const Text = styled.Text``;

const UpView = styled.View` 
  height:50%;
  width:100%;
  align-items: center;
  justify-content:center;
`;

const DownView = styled.View` 
  height:40%;
  width:100%; 
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
const Explanation = styled.Text`
`;
const Title = styled.Text`
  font-size: 48px;
  margin-bottom : 10px;
`;
const CommentView = styled.View`
  align-items: center;
  height:90%;
  width:100%; 
`;

const MoreButton = styled.View`
  height:10%;
  width:100%; 
  margin-bottom : 10px;
`;


export default Restaurant;
