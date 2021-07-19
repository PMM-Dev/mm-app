import React from "react";
import ExplanationUpView from "./ExplanationUpView";
import ExplanationDownView from "./ExplanationDownView";
import styled from "styled-components";

const Explanation = ({ data }) => {
  return (
    <ExplanationView>
      <ExplanationUpView data={data} />
      <ExplanationDownView data={data} />
    </ExplanationView>
  );
};

const ExplanationView = styled.View`
  width: 100%;
  height: 30%;
  border: 1px solid black;
  bottom: 0%;
  position: absolute;
  background-color: white;
  border-radius: 10px;
`;

export default Explanation;
