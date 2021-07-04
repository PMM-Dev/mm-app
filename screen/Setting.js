import React, { useEffect } from "react";
import styled from "styled-components";
import { Button } from "react-native-paper";
import {
  useloadProfile,
  useLogOut,
  useProfile,
} from "../components/AuthContext";
import { Avatar, Card, IconButton } from "react-native-paper";

const Page = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  margin-top: 15%;
`;

const Setting = () => {
  const logout = useLogOut();
  const loadProfile = useloadProfile();
  const { email, name, picture } = useProfile();

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <Page>
      <Card.Title
        title={name}
        subtitle={email}
        left={(props) => (
          <Avatar.Image
            {...props}
            size={50}
            source={{
              uri: picture,
            }}
          />
        )}
        right={(props) => (
          <IconButton
            {...props}
            icon={require("../assets/CommonIcons/dots-vertical.png")}
          />
        )}
      />
      <Button mode="contained" onPress={logout}>
        Log out
      </Button>
    </Page>
  );
};

export default Setting;
