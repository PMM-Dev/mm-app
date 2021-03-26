import React from "react";
import styled from "styled-components";
import {Button} from "react-native-paper"
import AntDesign from "react-native-vector-icons/Feather";


const CommentText = ({description, like }) => {

  return ( 
    <Card>
      <Title >{description} </Title>
      <Like>
          <AntDesign 
            name="thumbs-up"
            size = {22}
          />         
          <Likenum>{like}</Likenum>
      </Like>
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

const Likenum = styled.Text`
text-align: center;
width : 60%;
`;

const Like = styled.View`
width : 20%;
flexDirection: row;
align-items: center;
margin-left:15px;
`;

export default CommentText;
