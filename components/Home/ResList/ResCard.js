import React from "react";
import styled from "styled-components";
import StarMaker from "../../Map/StarMaker";
import { FULLHEART, EMPTYHEART, TMP } from "../../../image";
import constants from "../../../constants";

const ResCard = ({ data, navigation }) => {
  return (
    <View>
      <ImageView>
        <ExplanationImageImg source={TMP} />
      </ImageView>
      <ExplanationView>
        <ExplanationTitle>
          <ExplanationTitleText>{data.name}</ExplanationTitleText>
        </ExplanationTitle>
        <ExplanationTag>
          {data.themes.map((list, index) => (
            <ExplanationTagText key={index}>{list.theme}</ExplanationTagText>
          ))}
        </ExplanationTag>
        <ExplanationRate>
          <StarMaker rate={data.averageGrade} />
        </ExplanationRate>
        <ExplanationMoreButton
          onPress={() =>
            navigation.navigate("Restaurant", {
              param: data,
              picture: TMP,
            })
          }
        >
          <ExplanationMoreButtonText>
            후기 더 보러가기 +
          </ExplanationMoreButtonText>
        </ExplanationMoreButton>
      </ExplanationView>
      <HeartButtonPos>
        {true ? ( //data.bookmarked
          <HeartImg source={FULLHEART} />
        ) : (
          <HeartImg source={EMPTYHEART} />
        )}
      </HeartButtonPos>
    </View>
  );
};

const ExplanationTagText = styled.Text`
  font-family: "NanumSquare";
  color: ${(props) => props.theme.hlRed};
  font-size: ${constants.vw(2.6)}px;
`;

const HeartImg = styled.Image`
  height: 100%;
  width: 100%;
  resize-mode: contain;
`;

const HeartButtonPos = styled.TouchableOpacity`
  position: absolute;
  width: 10%;
  height: 30%;
  top: 5%;
  right: 3%;
`;

const ExplanationMoreButtonText = styled.Text`
  font-family: "NanumSquare";
`;

const ExplanationMoreButton = styled.TouchableOpacity`
  height: 12%;
  width: 100%;
`;

const ExplanationTag = styled.View`
  height: 9%;
  width: 100%;
  flex-direction: row;
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
  font-size: ${constants.vw(4.6)}px;
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
  padding-bottom: ${constants.vw(2.6)}px;
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
