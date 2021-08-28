import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { EMPTYHEART, FULLHEART } from "../../image";
import constants from "../../constants";
import { korLocationAPI } from "../Api/GoogleAppApi";
import { Converter } from "../Converter";

const ExplanationUpView = ({ data }) => {
  const [korLocation, setkorLocation] = useState([]);
  useEffect(() => {
    async function initLocation() {
      let gotkorLocation = await korLocationAPI(data);
      setkorLocation(gotkorLocation);
    }
    initLocation();
  }, [data]);
  return (
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
  ${(props) => props.theme.NanumSquareFont}
  font-size: ${constants.vw(5.6)}px;
`;

const ExplanationAddressText = styled.Text`
  ${(props) => props.theme.NanumSquareFont}
  font-size: ${constants.vw(3)}px;
  letter-spacing: 1px;
`;

const ExplanationContactText = styled.Text`
  ${(props) => props.theme.NanumSquareFont}
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

export default ExplanationUpView;
