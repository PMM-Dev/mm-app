import React from "react";
import styled from "styled-components";
import {Button} from "react-native-paper"
import AntDesign from "react-native-vector-icons/Feather";


const CommentText = ({description, like,writer }) => {

  return ( 
    <Card>
      <Title numberOfLines={1}>{description} </Title>
      <Info>      
        <Writer numberOfLines={1}>{writer}</Writer>
        <Like>
            <AntDesign 
              name="thumbs-up"
              size = {22}
            />         
            <Likenum>{like}</Likenum>
        </Like>
      </Info>
    </Card>
  );
};


const Title = styled.Text`
  margin-left : 7px;
  font-size: 20px;
  font-weight: 500;
  text-align: left;
  flex : 1;
  width : 70%;
`;

const Card = styled.View`
  justify-content: flex-start;
  align-items: center;
  flexDirection: row;
  width: 100%;
  height: 70px;
  border: 0.5px solid black;
  overflow : hidden;
`;

const Writer = styled.Text`
  font-size: 18px;
  height : 50%;
  overflow : hidden;
`;

const Info = styled.View`
margin-left:15px;
align-items: center;
justify-content: center;
width : 20%;
`;

const Likenum = styled.Text`
text-align: center;
width : 60%;
`;

const Like = styled.View`
  flexDirection: row;
  align-items: center;
`;

export default CommentText;