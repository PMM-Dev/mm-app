import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import StarMaker from "../../Map/StarMaker";

const ResCard = ({ data }) => {
  return (
    <View>
      <ImageView>
        <ExplanationImageImg source={require("../../../assets/tmp.jpg")} />
      </ImageView>
      <ExplanationView>
        <ExplanationTitle>
          <ExplanationTitleText>{data.title}</ExplanationTitleText>
        </ExplanationTitle>
        <ExplanationTag></ExplanationTag>
        <ExplanationRate>
          <StarMaker rate={data.rating} />
        </ExplanationRate>
        <ExplanationMoreButton>
          <TouchableOpacity>
            <ExplanationMoreButtonText>
              후기 더 보러가기 +
            </ExplanationMoreButtonText>
          </TouchableOpacity>
        </ExplanationMoreButton>
      </ExplanationView>
      <HeartButtonPos>
        <TouchableOpacity>
          {data.bookmarked ? (
            <HeartImg source={require("../../../assets/heart_2.png")} />
          ) : (
            <HeartImg source={require("../../../assets/heart_1.png")} />
          )}
        </TouchableOpacity>
      </HeartButtonPos>
    </View>
  );
};

const HeartImg = styled.Image`
  height: 100%;
  width: 100%;
  resize-mode: contain;
`;

const HeartButtonPos = styled.View`
  position: absolute;
  width: 10%;
  height: 30%;
  top: 5%;
  right: 3%;
`;

const ExplanationMoreButtonText = styled.Text`
  font-family: "NanumSquare";
`;

const ExplanationMoreButton = styled.View`
  height: 12%;
  width: 100%;
`;

const ExplanationTag = styled.View`
  height: 9%;
  width: 100%;
`;

const ExplanationRate = styled.View`
  height: 40%;
  width: 100%;
`;

const ExplanationTitle = styled.View`
  top: 5%;
  height: 35%;
  width: 100%;
  justify-content: center;
`;

const ExplanationTitleText = styled.Text`
  font-size: 18px;
  font-family: "NanumSquare";
`;

const ExplanationImageImg = styled.Image`
  height: 80%;
  width: 80%;
  border-radius: 15px;
  resize-mode: cover;
`;

const View = styled.View`
  width: 90%;
  height: 100%;
  flex-direction: row;
  border-bottom-width: 3px;
  border-bottom-color: ${(props) => props.theme.borderGray2};
  padding-bottom: 10px;
  justify-content: center;
  align-content: center;
`;

const ImageView = styled.View`
  height: 100%;
  width: 35%;
  justify-content: center;
  align-content: center;
`;

const ExplanationView = styled.View`
  height: 100%;
  width: 65%;
`;

export default ResCard;
