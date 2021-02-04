import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "react-native-paper";
import { useGoogleLogIn } from "../components/AuthContext";
import Icon from "react-native-vector-icons/Ionicons";

const Page = styled.View`
  justify-content: flex-start;
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
  font-size: 50px;
  color: black;
  margin-top: 15px;
`;

const SubTitle = styled.Text`
  ${(props) => props.theme.font}
  font-weight: 300;
  font-size: 15px;
  color: black;
  opacity: 0.65;
  margin-bottom: 150px;
`;

const BackgroundCircle = styled.View`
  position: absolute;
  top: -150px;
  left: -150px;
  width: 300px;
  height: 300px;
  border-radius: 150px;
  background-color: ${(props) => props.theme.hlColor};
`;

const BackgroundCircle2 = styled.View`
  position: absolute;
  bottom: -300px;
  right: -300px;
  width: 600px;
  height: 600px;
  border-radius: 300px;
  background-color: ${(props) => props.theme.hlColor};
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
    <Page>
      <Icon name="md-fast-food-outline" size={90} style={{ marginTop: 150 }} />
      <BackgroundCircle />
      <BackgroundCircle2 />
      <Title>뭐먹</Title>
      <SubTitle>From CNU</SubTitle>
      <Button
        icon="google"
        mode="contained"
        color="#DC143C"
        loading={isWaiting}
        onPress={check}
      >
        <Bold>구글 계정으로 로그인</Bold>
      </Button>
    </Page>
  );
};

export default Auth;
