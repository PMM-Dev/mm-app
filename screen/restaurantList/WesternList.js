import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "react-native-paper";
// import { API_URL, API_TOKEN } from "@env";
import axios from "axios";

const Holder = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text``;

const Test = styled.Text`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const WesternList = ({ navigation: { navigate } }) => {
  // const [data, setData] = useState(undefined);
  // useEffect(() => {
  //   axios
  //     .get(`${API_URL}/api/v1/restaurant/list`)
  //     .then(function (response) {
  //       setData(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  //     .finally(function () {
  //       // always executed
  //     });
  // }, []);
  // useEffect(() => {}, [data]);
  return (
    <Holder>
      {/* <Title>Western</Title>
      {data != undefined ? (
        data.map((element, key) => <Test key={key}>{element.name}</Test>)
      ) : (
        <Test />
      )} */}
    </Holder>
  );
};

export default WesternList;
