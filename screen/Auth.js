import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "react-native-paper";
import { useGoogleLogIn } from "../components/AuthContext";

const View = styled.View`
  justify-content: center;
  align-items: center;
  background-color: white;
  flex: 1;
`;

const Bold = styled.Text`
  color: white;
  ${(props) => props.theme.font}
`;

const Title = styled.Text`
  ${(props) => props.theme.font}
  font-weight: 500;
  font-size: 48px;
  color: black;
`;

const Auth = () => {
  const googleLogin = useGoogleLogIn();
  const [isWaiting, setIsWaiting] = useState(false);

  const check = async () => {
    setIsWaiting(true);
    await googleLogin();
    setIsWaiting(false);
  };

  return (
    <View>
      <View>
        <Title>로고</Title>
      </View>
      <View>
        <Button
          icon="google"
          mode="contained"
          color="#DC143C"
          loading={isWaiting}
          onPress={check}
        >
          <Bold>구글 계정으로 로그인</Bold>
        </Button>
      </View>
    </View>
  );
};

export default Auth;
