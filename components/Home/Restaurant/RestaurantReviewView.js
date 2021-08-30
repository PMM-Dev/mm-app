import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Review from "./Review";

import {
    getRestaurantReviews,
    postRestaurantComment
} from "../../Api/AppApi";
import {useProfile} from "../../AuthContext";
import {View} from "react-native";
import {ActivityIndicator} from "react-native-paper";
import Theme from "../../../style/Theme";

const RestaurantReviewView = ({restaurantId, reviewCount}) => {
    const {email} = useProfile();

    const [isReviewLoading, setIsReviewLoading] = useState(true);
    const [review, setReview] = useState("");
    const [reviews, setReviews] = useState([]);

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
                    <Review data={reviews} reviewCount={reviewCount}/>
                    <ReviewWrite>
                        <TmpTextInput
                            value={review}
                            onChangeText={(text) => setReview(text)}
                        />
                        <TmpButtonPos>
                            <TmpButton
                                onPress={() => {
                                    let response = postRestaurantComment(
                                        review,
                                        email,
                                        restaurantId
                                    );
                                    setReviews((prev) => [
                                        {
                                            authorEmail: email,
                                            description: review,
                                            grade: 3,
                                            id: response.data,
                                            likeCount: 0,
                                        },
                                        ...prev
                                    ]);
                                    setReview("");
                                }}
                            />
                        </TmpButtonPos>
                    </ReviewWrite></>
            }
        </ReviewView>
    )
}

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

const ReviewView = styled.View`
  width: 100%;
  height: 36%;
  justify-content: center;
  align-items: center;
`;

export default RestaurantReviewView