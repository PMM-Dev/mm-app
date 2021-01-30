import React from "react";
import styled from "styled-components";
import { Button } from "react-native-paper";
import { useLogOut, useProfile } from "../components/AuthContext";
import { Avatar, Card, IconButton } from "react-native-paper";
import { useEffect } from "react";

const Page = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  margin-top: 15px;
`;

const Profile = () => {
  const logout = useLogOut();
  const { email, family_name, given_name } = useProfile();

  return (
    <Page>
      <Card.Title
        title={given_name + " " + family_name}
        subtitle={email}
        left={(props) => <Avatar.Icon {...props} icon="account" />}
        right={(props) => (
          <IconButton {...props} icon="more-vert" onPress={() => {}} />
        )}
      />
      <Button mode="contained" onPress={logout}>
        Log out
      </Button>
    </Page>
  );
};

export default Profile;
