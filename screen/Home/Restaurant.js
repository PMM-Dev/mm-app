import React, {useState, useEffect} from "react";
import styled from "styled-components";
import constants from "../../constants";
import RestaurantInfoView from "../../components/Home/Restaurant/RestaurantInfoView";
import RestaurantReviewView from "../../components/Home/Restaurant/RestaurantReviewView";
import Header from "../../components/Header/Header";

const Restaurant = ({route, navigation}) => {
    const data = route.params.param;
    const resPicture = route.params.picture;

    return (
        <Screen>
            <Header route={route} navigation={navigation}/>
            <Scroll contentContainerStyle={{flex: 1}}>
                <RestaurantInfoView
                    data={data}
                    picture={resPicture}
                />
                <RestaurantReviewView
                    restaurantId={data.id}
                    reviewCount={data.reviewCount}
                />
            </Scroll>
        </Screen>
    );
};

export default Restaurant;

const Screen = styled.View`
  width: 100%;
  height: ${constants.pureheight}px;
  background-color: ${(props) => props.theme.backgroundGray};
`;

const Scroll = styled.ScrollView`
  width: 100%;
`;