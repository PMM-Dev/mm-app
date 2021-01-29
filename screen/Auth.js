import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { Button } from "react-native-paper";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Bold = styled.Text`
  font-weight: 500;
  color: white;
`;

const Title = styled.Text`
  font-weight: 500;
  font-size:48px
  color: black;
`;

const Auth = () => {
  return (
    <View>
      <View>
        <Title>로그인</Title>
      </View>
      <View>
        <Button
          icon="google"
          mode="contained"
          color="#DC143C"
          onPress={() => console.log("Pressed")}
        >
          <Bold>구글 계정으로 로그인</Bold>
        </Button>
      </View>
    </View>
  );
};

export default Auth;
