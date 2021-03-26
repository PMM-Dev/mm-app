import React from "react";
import styled from "styled-components";
import {Button} from "react-native-paper"


const CommentText = ({ writer, description, like }) => {

  return ( 
    <Card>
      <Title>{writer}</Title>
      <Explanation>{description} </Explanation>
      <Like>
          <Likenum>{like}</Likenum>
          <Button
          icon = "thumb-up"
          color="#8A2BE2"
          onPress={() => console.log("Pressed")}
        />           
      </Like>
    </Card>
  );
};

const Text = styled.Text``;

const Title = styled.Text`
  font-size: 18px;
  font-weight: 700;
  width : 20%;
  margin-left : 5px;
`;

const Explanation = styled.Text`
  margin-left : 15px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  width : 55%;
`;

const Card = styled.View`
  justify-content: flex-start;
  align-items: center;
  flexDirection: row;
  width: 100%;
  height: 70px;
  border: 0.5px solid black;
`;

const Likenum = styled.Text`
text-align: center;
width : 40%;
`;

const Like = styled.View`
width : 25%;
flexDirection: row;
align-items: center;
`;

export default CommentText;
