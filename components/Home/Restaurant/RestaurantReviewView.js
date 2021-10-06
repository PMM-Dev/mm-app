import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {
    getRestaurantReviews,
    getRestaurantReviewsOrderByAverageGradeAsc,
    getRestaurantReviewsOrderByAverageGradeDesc,
    getRestaurantReviewsOrderByCreatedDateDesc,
    getRestaurantsReviewByMe,
} from "../../Api/AppRestaurantApi";
import {useProfile} from "../../AuthContext";
import {ActivityIndicator} from "react-native-paper";
import Theme from "../../../style/Theme";
import constants from "../../../constants";
import Review from "./Review";
import EmptyScreenCenterView from "../../EmptyScreenCenterView";

const RestaurantReviewView = ({restaurantId, reviewCount, openReviewWritingRBSheet}) => {
    const {name} = useProfile();

    const [isReviewLoading, setIsReviewLoading] = useState(true);
    const [reviews, setReviews] = useState([]);
    const [condition, setCondition] = useState(0);
    const [myReview, setMyReview] = useState();
    const [myReviewLoad, setMyReviewLoad] = useState(true);

    useEffect(() => {
        async function requestReview() {
            const restaurantReviews = await getRestaurantReviews(restaurantId);
            setReviews(restaurantReviews);
            setIsReviewLoading(false);
        }

        async function requestMyReview() {
            const restaurantsReviewByMe = await getRestaurantsReviewByMe(
                restaurantId
            );
            setMyReview(restaurantsReviewByMe);
            setMyReviewLoad(false);
        }

        requestReview();
        requestMyReview();
    }, []);

    const requestReviewOrderByCreatedDateDesc = async () => {
        setCondition(0);

        setIsReviewLoading(true);
        const restaurantReviews = await getRestaurantReviewsOrderByCreatedDateDesc(restaurantId);
        setReviews(restaurantReviews);
        setIsReviewLoading(false);
    }

    const requestReviewOrderByAverageGradeDesc = async () => {
        setCondition(1);

        setIsReviewLoading(true);
        const restaurantReviews = await getRestaurantReviewsOrderByAverageGradeDesc(restaurantId);
        setReviews(restaurantReviews);
        setIsReviewLoading(false);
    }

    const requestReviewOrderByAverageGradeAsc = async () => {
        setCondition(2);

        setIsReviewLoading(true);
        const restaurantReviews = await getRestaurantReviewsOrderByAverageGradeAsc(restaurantId);
        setReviews(restaurantReviews);
        setIsReviewLoading(false);
    }

    return (
        <ReviewView>
            {!isReviewLoading && !myReviewLoad ? (
                <>
                    <TitleText>리뷰</TitleText>
                    <ReviewMenus>
                        <ReviewCountText>최근 리뷰 {reviewCount}개</ReviewCountText>
                        <FiltersView>
                            <FilterButton onPress={requestReviewOrderByCreatedDateDesc}>
                                <FilterText selected={condition === 0}>최신순</FilterText>
                            </FilterButton>
                            <FilterButton onPress={requestReviewOrderByAverageGradeDesc}>
                                <FilterText selected={condition === 1}>별점높은순</FilterText>
                            </FilterButton>
                            <FilterButton last onPress={requestReviewOrderByAverageGradeAsc}>
                                <FilterText last selected={condition === 2}>별점낮은순</FilterText>
                            </FilterButton>
                        </FiltersView>
                    </ReviewMenus>
                    <SubTitleText>나의 리뷰</SubTitleText>
                    {myReview ? (
                        <Review review={myReview}/>
                    ) : (
                        <ReviewWritingButton onPress={() => openReviewWritingRBSheet()}>
                            <ReviewWritingButtonText>리뷰 작성하기</ReviewWritingButtonText>
                        </ReviewWritingButton>
                    )}
                    <SubTitleText>모두의 리뷰</SubTitleText>
                    {reviews.map(
                        (review, index) =>
                            name !== review.authorName && (
                                <Review review={review} key={index}/>
                            )
                    )}
                </>
            ) : (
                <EmptyScreenCenterView>
                    <ActivityIndicator
                        animating={true}
                        size="large"
                        color={Theme.hlOrange}
                    />
                </EmptyScreenCenterView>
            )}
        </ReviewView>
    );
};

const SubTitleText = styled.Text`
  ${(props) => props.theme.NanumSquareLFont}
  font-size: ${constants.vw(4.4)}px;
  margin-bottom: ${constants.vh(1.2)}px;
`;

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

const ReviewWritingButton = styled.TouchableOpacity`
  margin-bottom: ${constants.vh(2)}px;
`;

const ReviewWritingButtonText = styled.Text`
  ${(props) => props.theme.NanumSquareEBFont}
  font-size: ${constants.vw(4.8)}px;
  color: ${(props) => props.theme.fontBlue};
`;

export default RestaurantReviewView
