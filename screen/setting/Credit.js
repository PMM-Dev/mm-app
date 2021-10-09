import React from "react";
import styled from "styled-components";
import {Image, TouchableOpacity} from "react-native";
import * as Linking from 'expo-linking';
import {RIP} from "../../image";

const Credit = () => {
    return (
        <Page>
            <Rip source={RIP} />
            <Text>개발 : PMM Dev</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>Illustration by Anna Antipina, Maria Shukshina from</Text>
            <TouchableOpacity onPress={() => Linking.openURL("https://icons8.com/illustrations")}>
                <Text>Ouch!</Text>
            </TouchableOpacity>
        </Page>
    );
};

const Page = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.backgroundWhite};
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

const Rip = styled.Image`
  height: 10%;
  resize-mode: contain;
  margin-bottom: 5px;
`

export default Credit;
