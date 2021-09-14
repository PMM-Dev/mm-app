import React, { useEffect, useState } from "react";
import styled from "styled-components";
import constants from "../../constants";
import { ActivityIndicator } from "react-native-paper";
import Theme from "../../style/Theme";
import Review from "../../components/Home/Restaurant/Review";

const ReviewHistory = () => {
  const [reviews, setReviews] = useState();

  //   useEffect(() => {
  //     async function initComment() {
  //         const restaurantReviews = await getRestaurantReviews(restaurantId);
  //         setReviews(restaurantReviews);
  //     }

  //     initComment();
  // }, []);

  return (
    <Page>
      <Scroll contentContainerStyle={{ flex: 1 }}>
        {reviews ? (
          reviews.map((review, index) => <Review review={review} key={index} />)
        ) : (
          <ActivityIndicator color={Theme.fontBlack} size={"large"} />
        )}
      </Scroll>
    </Page>
  );
};

const Page = styled.View`
  width: 100%;
  height: ${constants.height - constants.statusBarHeight}px;
  background-color: ${(props) => props.theme.backgroundWhite};
`;

const Scroll = styled.ScrollView`
  width: 100%;
`;

export default ReviewHistory;
