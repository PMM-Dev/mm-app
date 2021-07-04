import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Searchbar, Button, List, Checkbox } from "react-native-paper";
import Theme from "../style/Theme";

const View = styled.View`
  background-color: white;
  width: 100%;
  height: 100%;
`;

const Bold = styled.Text`
  font-weight: 500;
  color: white;
`;

const Screen = styled.ScrollView`
  margin: 30px;
  margin-top: 60px;
  margin-bottom: 10px;
  background-color: white;
`;

const Randombox = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const [checked11, setChecked11] = React.useState(false);
  const [checked12, setChecked12] = React.useState(false);
  const [checked13, setChecked13] = React.useState(false);
  const [checked21, setChecked21] = React.useState(false);
  const [checked22, setChecked22] = React.useState(false);
  const [checked23, setChecked23] = React.useState(false);
  const [checked31, setChecked31] = React.useState(false);
  const [checked32, setChecked32] = React.useState(false);
  const [checked33, setChecked33] = React.useState(false);

  return (
    <View>
      <Screen>
        <List.Section>
          <List.Accordion
            title="음식 종류"
            left={(props) => <List.Icon {...props} icon="food" />}
          >
            <Checkbox.Item
              label="한식"
              status={checked11 ? "checked" : "unchecked"}
              onPress={() => {
                setChecked11(!checked11);
              }}
            />
            <Checkbox.Item
              label="중식"
              status={checked12 ? "checked" : "unchecked"}
              onPress={() => {
                setChecked12(!checked12);
              }}
            />
            <Checkbox.Item
              label="양식"
              status={checked13 ? "checked" : "unchecked"}
              onPress={() => {
                setChecked13(!checked13);
              }}
            />
          </List.Accordion>
        </List.Section>
        <List.Accordion
          title="가격"
          left={(props) => <List.Icon {...props} icon="currency-usd" />}
        >
          <Checkbox.Item
            label="0~4000"
            status={checked21 ? "checked" : "unchecked"}
            onPress={() => {
              setChecked21(!checked21);
            }}
          />
          <Checkbox.Item
            label="4000~8000"
            status={checked22 ? "checked" : "unchecked"}
            onPress={() => {
              setChecked22(!checked22);
            }}
          />
          <Checkbox.Item
            label="8000~"
            status={checked23 ? "checked" : "unchecked"}
            onPress={() => {
              setChecked23(!checked23);
            }}
          />
        </List.Accordion>
        <List.Accordion
          title="위치"
          left={(props) => <List.Icon {...props} icon="map-marker" />}
        >
          <Checkbox.Item
            label="정문"
            status={checked31 ? "checked" : "unchecked"}
            onPress={() => {
              setChecked31(!checked31);
            }}
          />
          <Checkbox.Item
            label="후문"
            status={checked32 ? "checked" : "unchecked"}
            onPress={() => {
              setChecked32(!checked32);
            }}
          />
          <Checkbox.Item
            label="쪽문"
            status={checked33 ? "checked" : "unchecked"}
            onPress={() => {
              setChecked33(!checked33);
            }}
          />
        </List.Accordion>

        <Button
          mode="contained"
          color={Theme.purple}
          onPress={() => console.log("Pressed")}
        >
          <Bold>랜덤으로 뽑기!</Bold>
        </Button>
      </Screen>
    </View>
  );
};

export default Randombox;
