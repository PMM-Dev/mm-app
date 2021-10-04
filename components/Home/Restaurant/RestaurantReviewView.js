import React, {useEffect, useState} from 'react';
import styled from "styled-components";

import {
    getRestaurantReviews,
    postReview
} from "../../Api/AppRestaurantApi";
import {useProfile} from "../../AuthContext";
import {View} from "react-native";
import {ActivityIndicator} from "react-native-paper";
import Theme from "../../../style/Theme";
import constants from "../../../constants";
import {COMMENT_PROFILE} from "../../../image";;
import Review from "./Review";

const RestaurantReviewView = ({restaurantId, reviewCount, isPresentMyReview, openReviewWritingRBSheet}) => {

    const [isReviewLoading, setIsReviewLoading] = useState(true);
    const [reviews, setReviews] = useState([]);
    const [condition, setCondition] = useState(0);
    // const [review, setReview] = useState("");

    useEffect(() => {
        async function initComment() {
            const restaurantReviews = await getRestaurantReviews(restaurantId);
            setReviews(restaurantReviews);
            setIsReviewLoading(false);
        }

        initComment();
    }, []);


    return (
        <ReviewView>
            {
                isReviewLoading ? (
                    <View
                        style={{flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center"}}
                    >
                        <ActivityIndicator
                            animating={true}
                            size="large"
                            color={Theme.hlOrange}/>
                    </View>
                ) : <>
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
                                <FilterText last selected={condition === 2}>별점낮은순</FilterText>
                            </FilterButton>
                        </FiltersView>
                    </ReviewMenus>
                    {!isPresentMyReview && (
                        <WriteReviewButton onPress={() => openReviewWritingRBSheet()}>
                            <WriteReviewText>리뷰 작성하기</WriteReviewText>
                        </WriteReviewButton>
                    )}
                    {reviews.map((review, index) => <Review review={review} key={index}/>)}
                </>
            }
        </ReviewView>
    )
}

const ReviewView = styled.View`
  width: 100%;
  padding: ${constants.vw(5)}px ${constants.vw(8)}px;
  background-color: ${(props) => props.theme.backgroundWhite};
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
`

const FilterText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  color: ${(props) => props.selected ? props.theme.fontBlack : props.theme.fontBlackGray};
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

const WriteReviewButton = styled.TouchableOpacity``;

const WriteReviewText = styled.Text`
  ${(props) => props.theme.NanumSquareBFont}
  font-size: ${constants.vw(4)}px;
  color: ${(props) => props.theme.fontBlue};
`;

export default RestaurantReviewView