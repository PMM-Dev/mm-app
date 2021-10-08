import React, {useEffect, useState} from "react";
import styled from "styled-components";
import constants from "../../constants";
import {ActivityIndicator} from "react-native-paper";
import Theme from "../../style/Theme";
import Review from "../../components/Home/Restaurant/Review";
import {getMeReview} from "../../components/Api/AppMemberApi";
import Header from "../../components/Header/Header";

const HEADER_TITLE = "내가 작성한 리뷰";

const ReviewHistory = ({route, navigation}) => {
    const [reviews, setReviews] = useState();
    useEffect(() => {
        async function requestMeReview() {
            const restaurantReviews = await getMeReview();
            setReviews(restaurantReviews);
        }

        requestMeReview();
    }, []);

    return (
        <Page>
            <Header route={route} navigation={navigation} title={HEADER_TITLE}/>
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
                                    <RestaurantName>
                                        {review.restaurantName}
                                    </RestaurantName>
                                <Review review={review}/>
                            </ReviewRestaurant>
                        );
                    })
                ) : (
                    <ActivityIndicator color={Theme.fontBlack} size={"large"}/>
                )}
            </Scroll>
        </Page>
    );
};

const ReviewRestaurant = styled.TouchableOpacity``;

const RestaurantName = styled.Text`
  ${(props) => props.theme.NanumSquareEBFont}
  font-size: ${constants.vw(5)}px;
  color: ${(props) => props.theme.fontBlack};
  margin-bottom: ${constants.vh(2)}px;
`;

const Page = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.backgroundWhite};
`;

const Scroll = styled.ScrollView`
  width: 100%;
  padding: ${constants.vw(5)}px;
`;

export default ReviewHistory;
