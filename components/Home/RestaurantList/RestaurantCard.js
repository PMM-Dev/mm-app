import React from "react";
import styled from "styled-components";
import StarMaker from "../../Map/StarMaker";
import { FULLHEART, EMPTYHEART, RESTAURANT_IMAGE } from "../../../image";
import constants from "../../../constants";

const RestaurantCard = ({ data, navigation }) => {
  return (
    <View>
      <ExplanationPart>
        <ExplanationRestaurantNavigate
          onPress={() =>
            navigation.navigate("Restaurant", {
              param: data,
              picture: RESTAURANT_IMAGE,
            })
          }
          activeOpacity={1}
        >
          <ImageView>
            <ExplanationImageImg source={RESTAURANT_IMAGE} />
          </ImageView>
          <ExplanationView>
            <ExplanationTitle>
              <ExplanationTitleText>{data.name}</ExplanationTitleText>
            </ExplanationTitle>
            {data.themes == "" ? (
              <></>
            ) : (
              <ExplanationTag>
                {data.themes.map((list, index) => (
                  <ExplanationTagText key={index}>
                    #{list.theme}
                  </ExplanationTagText>
                ))}
              </ExplanationTag>
            )}
            <ExplanationRate>
              <StarMaker rate={data.averageGrade} />
            </ExplanationRate>
            <ExplanationMoreButton>
              <ExplanationMoreButtonText>
                후기 더 보러가기 +
              </ExplanationMoreButtonText>
            </ExplanationMoreButton>
          </ExplanationView>
        </ExplanationRestaurantNavigate>
      </ExplanationPart>
      <HeartButtonPos>
        {true ? ( //data.bookmarked
          <HeartImg source={EMPTYHEART} />
        ) : (
          <HeartImg source={FULLHEART} />
        )}
      </HeartButtonPos>
    </View>
  );
};

const ExplanationPart = styled.View`
  height: 100%;
  width: 100%;
  border-bottom-width: 1.5px;
  border-bottom-color: ${(props) => props.theme.borderGray2};
  padding-bottom: ${constants.vw(2.6)}px;
`;

const ExplanationRestaurantNavigate = styled.TouchableOpacity`
  height: 100%;
  width: 100%;
  flex-direction: row;
`;

const ExplanationTagText = styled.Text`
  ${(props) => props.theme.NanumSquareFont}
  color: ${(props) => props.theme.hlRed};
  font-size: ${constants.vw(2.2)}px;
`;

const HeartImg = styled.Image`
  height: 100%;
  width: 100%;
  resize-mode: contain;
`;

const HeartButtonPos = styled.TouchableOpacity`
  position: absolute;
  width: 8%;
  height: 24%;
  top: 10%;
  right: 3%;
`;

const ExplanationMoreButtonText = styled.Text`
  ${(props) => props.theme.NanumSquareFont}
  font-size: ${constants.vw(2.6)}px;
  color: ${(props) => props.theme.fontBlackGray};
`;

const ExplanationMoreButton = styled.View`
  height: 12%;
  width: 100%;
`;

const ExplanationTag = styled.View`
  margin-top: 3px;
  height: 9%;
  width: 100%;
  flex-direction: row;
`;

const ExplanationRate = styled.View`
  top: -1%;
  height: 40%;
  width: 80%;
`;

const ExplanationTitle = styled.View`
  top: 5%;
  height: 35%;
  width: 100%;
  justify-content: center;
`;

const ExplanationTitleText = styled.Text`
  ${(props) => props.theme.NanumSquareFont}
  font-size: ${constants.vw(4.5)}px;
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
`;

const ImageView = styled.View`
  height: 100%;
  width: 30%;
  justify-content: center;
  align-content: center;
`;

const ExplanationView = styled.View`
  height: 100%;
  width: 65%;
`;

export default RestaurantCard;
