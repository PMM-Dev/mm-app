import React from "react";
import styled from "styled-components";
import { EMPTYSTAR, FULLSTAR, HALFSTAR } from "../../../images/index";

const Star00 = () => {
  return (
    <StarWraper>
      <FirstStar>
        <Img source={EMPTYSTAR} />
      </FirstStar>
      <SecondStar>
        <Img source={EMPTYSTAR} />
      </SecondStar>
      <ThirdStar>
        <Img source={EMPTYSTAR} />
      </ThirdStar>
      <ForthStar>
        <Img source={EMPTYSTAR} />
      </ForthStar>
      <FifthStar>
        <Img source={EMPTYSTAR} />
      </FifthStar>
    </StarWraper>
  );
};

const Img = styled.Image`
  height: 80%;
  width: 80%;
  resize-mode: contain;
`;

const StarWraper = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
`;

const FirstStar = styled.View`
  width: 20%;
  height: 100%;
  justify-content: center;
`;

const SecondStar = styled.View`
  width: 20%;
  height: 100%;
  justify-content: center;
`;

const ThirdStar = styled.View`
  width: 20%;
  height: 100%;
  justify-content: center;
`;

const ForthStar = styled.View`
  width: 20%;
  height: 100%;
  justify-content: center;
`;

const FifthStar = styled.View`
  width: 20%;
  height: 100%;
  justify-content: center;
`;

export default Star00;
