import React from "react";
import styled from "styled-components";
import StarMaker from "../../Map/StarMaker";
import { FULLHEART, EMPTYHEART } from "../../../image";
import KoreanEnum from "../../../KoreanEnum";
import { Converter } from "../../Converter";

const ResExplanation = ({ data, picture, Infofunc }) => {
  return (
    <ResExplanationView>
      <UpView>
        <UpImageView>
          <UpImage source={picture} />
        </UpImageView>
        <FilterView>
          <FilterInfo onPress={() => Infofunc(true)}>
            <FilterText>정보[Infomation]</FilterText>
          </FilterInfo>
          <FilterReview onPress={() => Infofunc(false)}>
            <FilterText last={true}>리뷰[Review]</FilterText>
          </FilterReview>
        </FilterView>
      </UpView>
      <DownView>
        <DownDetailInfo>
          <DetailTitle>
            <DetailTitleText>{data.name}</DetailTitleText>
          </DetailTitle>
          <DetailInfo>
            <DetailTitleContact>
              <DetailInfoText>
                음식 종류 : {Converter(data.type)}
              </DetailInfoText>
            </DetailTitleContact>
            <DetailTitleAddress>
              <DetailInfoText>가격대 : {Converter(data.price)}</DetailInfoText>
            </DetailTitleAddress>
          </DetailInfo>
          <DownRate>
            <StarMaker rate={data.reviewCount} />
          </DownRate>
        </DownDetailInfo>
        <HeartButtonPos>
          {data.bookmarked ? (
            <HeartImg source={FULLHEART} />
          ) : (
            <HeartImg source={EMPTYHEART} />
          )}
        </HeartButtonPos>
      </DownView>
    </ResExplanationView>
  );
};

const ResExplanationView = styled.View`
  width: 100%;
  height: 100%;
`;

const DownRate = styled.View`
  height: 30%;
  width: 60%;
`;

const HeartImg = styled.Image`
  height: 100%;
  width: 100%;
  resize-mode: cover;
`;

const HeartButtonPos = styled.TouchableOpacity`
  position: absolute;
  width: 13%;
  height: 30%;
  top: 4%;
  right: 4%;
`;

const DetailInfoText = styled.Text`
  text-align: center;
  font-size: 12px;
  font-family: "NanumSquare";
`;

const DetailTitleAddress = styled.View`
  height: 50%;
  width: 100%;
  margin-top: 3px;
  justify-content: center;
`;

const DetailTitleContact = styled.View`
  height: 50%;
  width: 100%;
  justify-content: center;
`;

const DetailInfo = styled.View`
  height: 25%;
  width: 100%;
  margin-top: 3px;
  justify-content: center;
`;

const DetailTitleText = styled.Text`
  text-align: center;
  font-size: 28px;
  font-family: "NanumSquare";
`;

const DetailTitle = styled.View`
  height: 25%;
  width: 100%;
  justify-content: center;
`;

const DownDetailInfo = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
`;

const DownView = styled.View`
  width: 100%;
  height: 35%;
`;

const UpImage = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 20px;
  resize-mode: cover;
`;

const UpImageView = styled.View`
  width: 100%;
  height: 86%;
`;

const FilterView = styled.View`
  width: 100%;
  height: 14%;
  flex-direction: row;
`;

const FilterInfo = styled.TouchableOpacity`
  width: 50%;
  height: 100%;
  justify-content: center;
`;

const FilterReview = styled.TouchableOpacity`
  width: 50%;
  height: 100%;
  justify-content: center;
`;

const FilterText = styled.Text`
  font-family: "NanumSquare";
  color: ${(props) => props.theme.fontBlack};
  text-align: center;
  font-size: 16px;
  ${(props) => (props.last ? "" : "border-right-width: 1.5px;")};
  border-right-color: ${(props) => props.theme.fontBlack};
`;

const UpView = styled.View`
  width: 100%;
  height: 65%;
  background-color: ${(props) => props.theme.backgroundGray};
`;

export default ResExplanation;
