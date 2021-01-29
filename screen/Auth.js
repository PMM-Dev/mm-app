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

const Auth = () => {
  return (
    <View>
      <Button
        icon="google"
        mode="contained"
        color="#DC143C"
        onPress={() => console.log("Pressed")}
      >
        <Bold>login</Bold>
      </Button>
    </View>
  );
};

export default Auth;
