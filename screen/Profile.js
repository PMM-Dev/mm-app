import React, { useEffect } from "react";
import styled from "styled-components";
import { Button } from "react-native-paper";
import {
  useloadProfile,
  useLogOut,
  useProfile,
} from "../components/AuthContext";
import { Avatar, Card, IconButton } from "react-native-paper";
import { SegmentedControlIOSComponent } from "react-native";

const Page = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  margin-top: 15px;
`;

const Profile = () => {
  const logout = useLogOut();
  const loadProfile = useloadProfile();
  const { email, family_name, given_name } = useProfile();

  // const getProfile = () => {
  //   const newProfile = useProfile();
  //   email = newProfile.email;
  //   family_name = newProfile.family_name;
  //   given_name = newProfile.given_name;
  // };
  useEffect(() => {
    loadProfile();
    // getProfile();
  }, []);

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
