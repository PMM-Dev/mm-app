import React, { useEffect, useState } from "react";
import styled from "styled-components";

import {
  getRestaurantReviews,
  getRestaurantsReviewByMe,
  postReview,
} from "../../Api/AppRestaurantApi";
import { useProfile } from "../../AuthContext";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import Theme from "../../../style/Theme";
import constants from "../../../constants";
import Review from "./Review";

const RestaurantReviewView = ({
  restaurantId,
  reviewCount,
  setWriteReviewButtonOff,
}) => {
  const { name } = useProfile();
  const [isReviewLoading, setIsReviewLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [condition, setCondition] = useState(0);
  const [myReview, setMyReview] = useState([]);
  const [myReviewLoad, setMyReviewLoad] = useState(true);

  useEffect(() => {
    async function requestComment() {
      const restaurantReviews = await getRestaurantReviews(restaurantId);
      setReviews(restaurantReviews);
      setIsReviewLoading(false);
    }
    async function requestMyComment() {
      const restaurantsReviewByMe = await getRestaurantsReviewByMe(
        restaurantId
      );
      setMyReview(restaurantsReviewByMe);
      setMyReviewLoad(false);
    }
    requestComment();
    requestMyComment();
  }, []);

  useEffect(() => {
    if (myReview == [] && !isReviewLoading) setWriteReviewButtonOff(false);
  }, [myReviewLoad]);

  console.log(myReview);

  return (
    <ReviewView>
      {!isReviewLoading && !myReviewLoad ? (
        <>
          <TitleText>리뷰</TitleText>
          <ReviewMenus>
            <ReviewCountText>최근리뷰 {reviewCount}개</ReviewCountText>
            <FiltersView>
              <FilterButton>
                <FilterText selected={condition === 0}>최신순</FilterText>
              </FilterButton>
              <FilterButton>
                <FilterText selected={condition === 1}>별점높은순</FilterText>
              </FilterButton>
              <FilterButton last>
                <FilterText last selected={condition === 2}>
                  별점낮은순
                </FilterText>
              </FilterButton>
            </FiltersView>
          </ReviewMenus>
          {myReview == [] ? (
            <></>
          ) : (
            <>
              <SubTitleText>나의리뷰</SubTitleText>
              <Review review={myReview} />
            </>
          )}
          <SubTitleText>모두의리뷰</SubTitleText>
          {reviews.map(
            (review, index) =>
              name != review.authorName && (
                <Review review={review} key={index} />
              )
          )}
        </>
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator
            animating={true}
            size="large"
            color={Theme.hlOrange}
          />
        </View>
      )}
    </ReviewView>
  );
};

const SubTitleText = styled.Text`
  ${(props) => props.theme.NanumSquareBFont}
  font-size: ${constants.vw(4.2)}px;
  margin-bottom: ${constants.vh(3)}px;
`;

const ReviewView = styled.View`
  width: 100%;
  padding: ${constants.vw(5)}px ${constants.vw(8)}px;
  background-color: ${(props) => props.theme.backgroundWhite};
`;

const TmpButton = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
`;

const ReviewWrite = styled.View`
  width: 90%;
  height: 15%;
  border: 1px black;
`;

const TmpTextInput = styled.TextInput``;

const TmpButtonPos = styled.View`
  position: absolute;
  width: 10%;
  height: 90%;
  top: 5%;
  right: 3%;
  border: 1px solid;
  background-color: red;
`;

const TitleText = styled.Text`
  ${(props) => props.theme.NanumSquareBFont}
  font-size: ${constants.vw(5.7)}px;
  margin-bottom: ${constants.vh(0.5)}px;
`;

const FilterButton = styled.TouchableOpacity`
  align-items: center;
  padding: 0px ${constants.vw(2)}px;
  ${(props) => (props.last ? "padding-right: 0px;" : "")};
`;

const FilterText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  color: ${(props) =>
    props.selected ? props.theme.fontBlack : props.theme.fontBlackGray};
  font-size: ${constants.vw(3)}px;
`;

const ReviewCountText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  font-size: ${constants.vh(1.8)}px;
`;

const FiltersView = styled.View`
  flex-direction: row;
`;

const ReviewMenus = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: ${constants.vh(2)}px;
  margin-bottom: ${constants.vh(2)}px;
  border-bottom-width: 0.3px;
  border-bottom-color: ${(props) => props.theme.fontGray};
`;

export default RestaurantReviewView;
