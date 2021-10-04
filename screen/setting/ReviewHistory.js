import React, { useEffect, useState } from "react";
import styled from "styled-components";
import constants from "../../constants";
import { ActivityIndicator } from "react-native-paper";
import Theme from "../../style/Theme";
import Review from "../../components/Home/Restaurant/Review";
import { getMeReview } from "../../components/Api/AppMemberApi";
import Header from "../../components/Header/Header";

const ReviewHistory = ({ route, navigation }) => {
  const [reviews, setReviews] = useState();
  const headerTitle = "내가 작성한 리뷰";
  useEffect(() => {
    async function requestMeReview() {
      const restaurantReviews = await getMeReview();
      setReviews(restaurantReviews);
    }
    requestMeReview();
  }, []);
  return (
    <Page>
      <Header route={route} navigation={navigation} title={headerTitle} />
      <Scroll contentContainerStyle={{ flex: 1 }}>
        {reviews ? (
          reviews.map((review, index) => {
            return (
              <>
                <ReviewRestaurantName>
                  {review.restaurantName}
                </ReviewRestaurantName>
                <Review review={review} key={index} />
              </>
            );
          })
        ) : (
          <ActivityIndicator color={Theme.fontBlack} size={"large"} />
        )}
      </Scroll>
    </Page>
  );
};

const ReviewRestaurantName = styled.Text``;

const Page = styled.View`
  width: 100%;
  height: ${constants.height - constants.statusBarHeight}px;
  background-color: ${(props) => props.theme.backgroundWhite};
`;

const Scroll = styled.ScrollView`
  width: 100%;
`;

export default ReviewHistory;
