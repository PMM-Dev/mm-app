import React from "react";
import styled from "styled-components";
import { Button } from "react-native-paper";
import { useLogOut } from "../components/AuthContext";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Bold = styled.Text`
  font-weight: 500;
`;

const Profile = () => {
  const logout = useLogOut();
  return (
    <View>
      <Button mode="contained" onPress={logout}>
        Log out
      </Button>
      <Bold>Profile</Bold>
    </View>
  );
};

export default Profile;
