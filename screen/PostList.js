import React from "react";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { Button} from "react-native-paper";
import CommentText from "../components/CommentText";
import { useState, useEffect } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import {TouchableOpacity} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import PostCard from "../components/PostCard";

const PostList = () => {
  const Dummy = 
  [{
    title : "♚♚이더리움 비트☆코인♚♚가입시$$전원 0.01코인 지급☜☜100%증정",
    like : 98766,
    writer : "yunsu",
    description : "비트코인드림",
    time : {
      year : 21,
      month : 3,
      day : 27,
      hour : 16,
      minute : 26,
    }
  },
  {
    title : "♚♚이더리움 비트☆코인♚♚가입시$$전원 0.01코인 지급☜☜100%증정",
    like : 98766,
    writer : "yunsu",
    description : "비트코인드림",
    time : {
      year : 21,
      month : 3,
      day : 27,
      hour : 16,
      minute : 26,
    }
  },{
    title : "♚♚이더리움 비트☆코인♚♚가입시$$전원 0.01코인 지급☜☜100%증정",
    like : 98766,
    writer : "yunsu",
    description : "비트코인드림",
    time : {
      year : 21,
      month : 3,
      day : 27,
      hour : 16,
      minute : 26,
    }
  },{
    title : "♚♚이더리움 비트☆코인♚♚가입시$$전원 0.01코인 지급☜☜100%증정",
    like : 98766,
    writer : "yunsu",
    description : "비트코인드림",
    time : {
      year : 21,
      month : 3,
      day : 27,
      hour : 16,
      minute : 26,
    }
  },{
    title : "♚♚이더리움 비트☆코인♚♚가입시$$전원 0.01코인 지급☜☜100%증정",
    like : 98766,
    writer : "yunsu",
    description : "비트코인드림",
    time : {
      year : 21,
      month : 3,
      day : 27,
      hour : 16,
      minute : 26,
    }
  },{
    title : "♚♚이더리움 비트☆코인♚♚가입시$$전원 0.01코인 지급☜☜100%증정",
    like : 98766,
    writer : "yunsu",
    description : "비트코인드림",
    time : {
      year : 21,
      month : 3,
      day : 27,
      hour : 16,
      minute : 26,
    }
  },{
    title : "♚♚이더리움 비트☆코인♚♚가입시$$전원 0.01코인 지급☜☜100%증정",
    like : 98766,
    writer : "yunsu",
    description : "비트코인드림",
    time : {
      year : 21,
      month : 3,
      day : 27,
      hour : 16,
      minute : 26,
    }
  },{
    title : "♚♚이더리움 비트☆코인♚♚가입시$$전원 0.01코인 지급☜☜100%증정",
    like : 98766,
    writer : "yunsu",
    description : "비트코인드림",
    time : {
      year : 21,
      month : 3,
      day : 27,
      hour : 16,
      minute : 26,
    }
  },{
    title : "♚♚이더리움 비트☆코인♚♚가입시$$전원 0.01코인 지급☜☜100%증정",
    like : 98766,
    writer : "yunsu",
    description : "비트코인드림",
    time : {
      year : 21,
      month : 3,
      day : 27,
      hour : 16,
      minute : 26,
    }
  },{
    title : "♚♚이더리움 비트☆코인♚♚가입시$$전원 0.01코인 지급☜☜100%증정",
    like : 98766,
    writer : "yunsu",
    description : "비트코인드림",
    time : {
      year : 21,
      month : 3,
      day : 27,
      hour : 16,
      minute : 26,
    }
  },
];
const [count, setCount] = useState([]);
const navigation = useNavigation();
useEffect(()=>{
    setCount(Dummy)
  },[]);
const PostList = count.map((element,key)=>
    <TouchableOpacity
    key={key}
    activeOpacity={0.8}
    onPress={() => navigation.navigate("Post",{data : element})}>
      <PostCard
        description = {element.title}
        like = {element.like}
        writer = {element.writer}
      ></PostCard>
    </TouchableOpacity>
  )
  return (
    <Holder>
      <ScrollView>
        {PostList}
      </ScrollView>
    </Holder>
  );
};

const Holder = styled.View`
  flex: 1;
  background-color: white;
  margin-top: 10px;
  margin-bottom: 10px;
`;


export default PostList;
