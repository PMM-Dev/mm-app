import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { Button } from "react-native-paper";
import { useLogIn } from "../components/AuthContext";

const View = styled.View`
  justify-content: center;
  align-items: center;
  background-color: white;
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
  const logIn = useLogIn();
  return (
    <View>
      <View>
        <Title>로고</Title>
      </View>
      <View>
        <Button icon="google" mode="contained" color="#DC143C" onPress={logIn}>
          <Bold>구글 계정으로 로그인</Bold>
        </Button>
      </View>
    </View>
  );
};

export default Auth;
