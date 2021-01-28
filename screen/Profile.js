import React from "react";
import { useEffect } from "react";
import styled from "styled-components";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Bold = styled.Text`
  font-weight: 500;
`;

const Profile = () => {
  return (
    <View>
      <Bold>Profile</Bold>
    </View>
  );
};

export default Profile;
