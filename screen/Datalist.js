import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Searchbar, Button, List, Checkbox } from "react-native-paper";

const HeadView = styled.View`
  justify-content: center;
  align-items: stretch;
  background-color: white;
  flex: 1;
`;

const ButtonView = styled.View``;

const AcordianList = styled.View`
  flex: 3;
`;

const SearchBar = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Bold = styled.Text`
  font-weight: 500;
  color: white;
`;

const Auth = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  const [checked, setChecked] = React.useState(false);
  return (
    <HeadView>
      <SearchBar>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchBar>
      <AcordianList>
        <List.Section title="필터링">
          <List.Accordion
            title="음식 종류"
            left={(props) => <List.Icon {...props} icon="folder" />}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
            <Checkbox
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
          </List.Accordion>

          <List.Accordion
            title="Controlled Accordion"
            left={(props) => <List.Icon {...props} icon="folder" />}
            expanded={expanded}
            onPress={handlePress}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>

          <List.Accordion
            title="Controlled Accordion"
            left={(props) => <List.Icon {...props} icon="folder" />}
            expanded={expanded}
            onPress={handlePress}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
        </List.Section>
      </AcordianList>
      <ButtonView>
        <Button icon="google" mode="contained" color="#DC143C">
          <Bold>구글 계정으로 로그인</Bold>
        </Button>
      </ButtonView>
    </HeadView>
  );
};

export default Auth;
