import React from "react";
import styled from "styled-components";
import StarMaker from "../../Map/StarMaker";

const ResReview = ({ data }) => {
  return (
    <ResReviewView>
      <ReviewTitle>
        <ReviewTitleNum>
          <ReviewTitleNumText>최근리뷰 224개</ReviewTitleNumText>
        </ReviewTitleNum>
        <ReviewTitleFilter>
          <ReviewTitleFilterRecent>
            <ReviewTitleFilterText>최신순</ReviewTitleFilterText>
          </ReviewTitleFilterRecent>
          <ReviewTitleFilterStarHigh>
            <ReviewTitleFilterText>별점높은순</ReviewTitleFilterText>
          </ReviewTitleFilterStarHigh>
          <ReviewTitleFilterStarLow>
            <ReviewTitleFilterText last={true}>
              별점낮은순
            </ReviewTitleFilterText>
          </ReviewTitleFilterStarLow>
        </ReviewTitleFilter>
      </ReviewTitle>
      <ReviewContentList>
        {data.map((data, index) => (
          <ReviewContent key={index}>
            <ReviewContentTop>
              <ReviewContentTopImageView>
                <ReviewContentTopImage source={data.picture} />
              </ReviewContentTopImageView>
              <ReviewContentTopNameStarView>
                <ReviewContentTopNameView>
                  <ReviewContentTopNameText>
                    {data.authorEmail} {"  >  "}
                  </ReviewContentTopNameText>
                </ReviewContentTopNameView>
                <ReviewContentTopStarView>
                  <ReviewContentTopStarStarMakerView>
                    <StarMaker rate={data.grade}></StarMaker>
                  </ReviewContentTopStarStarMakerView>
                </ReviewContentTopStarView>
              </ReviewContentTopNameStarView>
            </ReviewContentTop>
            <ReviewContentBottom>
              <ReviewContentBottomText numberOfLines={1}>
                {data.description}
              </ReviewContentBottomText>
            </ReviewContentBottom>
          </ReviewContent>
        ))}
      </ReviewContentList>
    </ResReviewView>
  );
};

const ReviewContentTopStarStarMakerView = styled.View`
  height: 60%;
  width: 50%;
`;

const ReviewContentTopNameStarView = styled.View`
  height: 100%;
  width: 82%;
  margin-left: 8px;
`;

const ReviewContentTopNameText = styled.Text`
  font-family: "NanumSquare";
  color: ${(props) => props.theme.fontBlack};
  font-size: 14px;
`;

const ReviewContentTopNameView = styled.View`
  height: 40%;
  width: 82%;
  justify-content: center;
`;

const ReviewContentTopStarView = styled.View`
  height: 50%;
  width: 82%;
`;

const ReviewContentTopImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

const ReviewContentTopImageView = styled.View`
  height: 80%;
  width: 18%;
`;

const ReviewContentTop = styled.View`
  height: 80%;
  width: 100%;
  flex-direction: row;
`;

const ReviewContentBottomText = styled.Text`
  font-family: "NanumSquare";
  color: ${(props) => props.theme.fontBlack};
  font-size: 12px;
`;

const ReviewContentBottom = styled.View`
  height: 20%;
  width: 100%;
  overflow: hidden;
`;

const ReviewContent = styled.View`
  height: 100px;
  width: 100%;
  align-items: center;
`;

const ReviewTitleFilterStarLow = styled.TouchableOpacity`
  width: 35%;
  height: 100%;
  justify-content: center;
`;

const ReviewTitleFilterStarHigh = styled.TouchableOpacity`
  width: 35%;
  height: 100%;
  justify-content: center;
`;

const ReviewTitleFilterRecent = styled.TouchableOpacity`
  width: 30%;
  height: 100%;
  justify-content: center;
`;

const ReviewTitleFilterText = styled.Text`
  font-family: "NanumSquare";
  color: ${(props) => props.theme.fontBlack};
  text-align: center;
  font-size: 11px;
  ${(props) => (props.last ? "" : "border-right-width: 1.5px;")};
  border-right-color: ${(props) => props.theme.fontBlack};
`;

const ReviewTitleNumText = styled.Text`
  font-family: "NanumSquare";
  font-size: 18px;
`;

const ReviewTitleFilter = styled.View`
  width: 50%;
  height: 100%;
  flex-direction: row;
`;

const ReviewTitleNum = styled.View`
  width: 50%;
  height: 100%;
  justify-content: center;
`;

const ReviewTitle = styled.View`
  width: 90%;
  height: 18%;
  border-top-width: 1px;
  border-top-color: ${(props) => props.theme.borderGray2};
  flex-direction: row;
`;

const ReviewContentList = styled.ScrollView`
  width: 90%;
  height: 76%;
`;

const ResReviewView = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export default ResReview;
