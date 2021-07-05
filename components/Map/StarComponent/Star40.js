import React from "react";
import styled from "styled-components";

const Star40 = () => {
  return (
    <StarWraper>
      <FirstStar>
        <Img source={require("../../../assets/star_3.png")} />
      </FirstStar>
      <SecondStar>
        <Img source={require("../../../assets/star_3.png")} />
      </SecondStar>
      <ThirdStar>
        <Img source={require("../../../assets/star_3.png")} />
      </ThirdStar>
      <ForthStar>
        <Img source={require("../../../assets/star_3.png")} />
      </ForthStar>
      <FifthStar>
        <Img source={require("../../../assets/star_1.png")} />
      </FifthStar>
    </StarWraper>
  );
};

const Img = styled.Image`
  height: 80%;
  width: 80%;
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

export default Star40;
