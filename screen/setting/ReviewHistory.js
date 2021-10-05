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
      console.log(restaurantReviews);
      setReviews(restaurantReviews);
    }
    requestMeReview();
  }, []);

  return (
    <Page>
      <Header route={route} navigation={navigation} title={headerTitle} />
      <Scroll>
        {reviews ? (
          reviews.map((review, index) => {
            return (
              <ReviewRestaurant
                key={index}
                onPress={() =>
                  navigation.navigate("Restaurant", {
                    restaurantId: review.restaurantId,
                  })
                }
              >
                <ReviewRestaurantName>
                  {review.restaurantName}
                </ReviewRestaurantName>
                <Review review={review} />
              </ReviewRestaurant>
            );
          })
        ) : (
          <ActivityIndicator color={Theme.fontBlack} size={"large"} />
        )}
      </Scroll>
    </Page>
  );
};

const ReviewRestaurant = styled.TouchableOpacity``;

const ReviewRestaurantName = styled.Text`
  ${(props) => props.theme.NanumSquareFont}
  font-size: ${constants.vw(5)}px;
  color: ${(props) => props.theme.fontBlack};
`;

const Page = styled.View`
  width: 100%;
  height: ${constants.vh(87)}px;
  background-color: ${(props) => props.theme.backgroundWhite};
`;

const Scroll = styled.ScrollView`
  width: 100%;
  padding: ${constants.vw(5)}px;
`;

export default ReviewHistory;
