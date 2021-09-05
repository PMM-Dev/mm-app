import React, { useState, useEffect } from "react";
import styled from "styled-components";
import StarMaker from "./StarMaker";
import { RESTAURANT_IMAGE, EMPTYHEART, FULLHEART } from "../../image";
import constants from "../../constants";
import { korLocationAPI } from "../Api/GoogleAppApi";
import { Converter } from "../Converter";

const Explanation = ({ data }) => {
  const [korLocation, setkorLocation] = useState([]);
  useEffect(() => {
    async function initLocation() {
      let gotkorLocation = await korLocationAPI(data);
      setkorLocation(gotkorLocation);
    }
    initLocation();
  }, [data]);
  return (
    <ExplanationView>
      <ExplanationUp>
        <ExplanationTitle>
          <ExplanationTitleText>{data.name}</ExplanationTitleText>
        </ExplanationTitle>
        <ExplanationAddressContact>
          <ExplanationAddress>
            <ExplanationAddressText>주소: {korLocation}</ExplanationAddressText>
          </ExplanationAddress>
          <ExplanationContact>
            <ExplanationContactText>
              가격대: {Converter(data.price)}
            </ExplanationContactText>
          </ExplanationContact>
        </ExplanationAddressContact>
        <HeartButtonPos>
          {data.bookmarked ? (
            <HeartImg source={FULLHEART} />
          ) : (
            <HeartImg source={EMPTYHEART} />
          )}
        </HeartButtonPos>
      </ExplanationUp>
      <ExplanationDown>
        <ExplanationImage>
          <ExplanationImageImg source={RESTAURANT_IMAGE} />
        </ExplanationImage>
        <ExplanationRateButton>
          <ExplanationRate>
            <StarMaker rate={data.averageGrade} />
          </ExplanationRate>
          <ExplanationTag></ExplanationTag>
          <ExplanationMoreButton>
            <ExplanationMoreButtonText>
              후기 더 보러가기 +
            </ExplanationMoreButtonText>
          </ExplanationMoreButton>
        </ExplanationRateButton>
      </ExplanationDown>
    </ExplanationView>
  );
};

const HeartImg = styled.Image`
  height: 100%;
  width: 100%;
`;

const HeartButtonPos = styled.TouchableOpacity`
  position: absolute;
  width: 10%;
  height: 40%;
  top: 15%;
  right: 8%;
`;

const ExplanationUp = styled.View`
  height: 40%;
  width: 100%;
  right: -4%;
`;

const ExplanationTitle = styled.View`
  height: 50%;
  width: 100%;
  justify-content: center;
`;

const ExplanationTitleText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  font-size: ${constants.vw(5.6)}px;
`;

const ExplanationAddressText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  font-size: ${constants.vw(3)}px;
  letter-spacing: 1px;
`;

const ExplanationContactText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  font-size: ${constants.vw(3)}px;
  letter-spacing: 1px;
`;

const ExplanationAddressContact = styled.View`
  height: 50%;
  width: 100%;
`;

const ExplanationAddress = styled.View`
  height: 40%;
  width: 100%;
`;

const ExplanationContact = styled.View`
  height: 40%;
  width: 100%;
`;

const ExplanationMoreButtonText = styled.Text``;

const ExplanationMoreButton = styled.TouchableOpacity`
  height: 30%;
  width: 100%;
`;

const ExplanationTag = styled.View`
  height: 25%;
  width: 100%;
`;

const ExplanationRate = styled.View`
  height: 45%;
  width: 100%;
`;

const ExplanationImageImg = styled.Image`
  height: 90%;
  width: 80%;
  border-radius: 15px;
`;

const ExplanationDown = styled.View`
  height: 60%;
  width: 100%;
  flex-direction: row;
`;

const ExplanationImage = styled.View`
  height: 100%;
  width: 35%;
  align-items: center;
`;

const ExplanationRateButton = styled.View`
  height: 100%;
  width: 65%;
`;

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
