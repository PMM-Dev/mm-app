import React from "react";
import styled from "styled-components";
import StarMaker from "../../Map/StarMaker";
import { FULLHEART, EMPTYHEART } from "../../../images/index";
import KoreanEnum from "../../../KoreanEnum";
import { Converter } from "../../Converter";

const ResExplanation = ({ data, picture, korLocation }) => {
  return (
    <ResExplanationView>
      <UpView>
        <UpImageView>
          <UpImage source={picture} />
        </UpImageView>
        <FilterView>
          <FilterInfo>
            <FilterText>정보[Infomation]</FilterText>
          </FilterInfo>
          <FilterReview>
            <FilterText last={true}>리뷰[Review]</FilterText>
          </FilterReview>
        </FilterView>
      </UpView>
      <DownView>
        <DownInfo>
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
                <DetailInfoText>
                  가격대 : {Converter(data.price)}
                </DetailInfoText>
              </DetailTitleAddress>
            </DetailInfo>
            <DownRate>
              <StarMaker rate={data.reviewCount} />
            </DownRate>
          </DownDetailInfo>
          <DownAbout>
            <AboutTitle>
              <AboutTitleText>ABOUT</AboutTitleText>
            </AboutTitle>
            <AboutAddress>
              <AboutAddressText>주소 : {korLocation}</AboutAddressText>
            </AboutAddress>
            <AboutDescription>
              <AboutDescriptionText>
                설명 : {data.description}
              </AboutDescriptionText>
            </AboutDescription>
          </DownAbout>
        </DownInfo>
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

const AboutDescriptionText = styled.Text`
  text-align: center;
  font-size: 12px;
  font-family: "NanumSquare";
`;

const AboutAddressText = styled.Text`
  text-align: center;
  font-size: 12px;
  font-family: "NanumSquare";
`;

const AboutTitleText = styled.Text`
  text-align: center;
  font-size: 18px;
  font-family: "NanumSquare";
`;

const AboutAddress = styled.View`
  height: 25%;
  width: 100%;
`;

const AboutDescription = styled.View`
  height: 45%;
  width: 60%;
`;

const AboutTitle = styled.View`
  height: 30%;
  width: 100%;
`;

const DownRate = styled.View`
  height: 30%;
  width: 60%;
`;

const HeartImg = styled.Image`
  height: 100%;
  width: 100%;
`;

const HeartButtonPos = styled.TouchableOpacity`
  position: absolute;
  width: 10%;
  height: 10%;
  top: 3%;
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
  height: 66%;
  align-items: center;
`;

const DownAbout = styled.View`
  width: 100%;
  height: 33%;
  justify-content: center;
  align-items: center;
`;

const DownView = styled.View`
  width: 100%;
  height: 46%;
`;

const DownInfo = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
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
  height: 54%;
  background-color: ${(props) => props.theme.backgroundGray};
`;

export default ResExplanation;
