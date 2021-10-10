import React, {useEffect, useState} from "react";
import styled from "styled-components";
import constants from "../../constants";
import {ActivityIndicator} from "react-native-paper";
import Theme from "../../style/Theme";
import RestaurantCard from "../../components/Home/RestaurantList/RestaurantCard";
import {getLikeRestaurant} from "../../components/Api/AppMemberApi";
import Header from "../../components/Header/Header";
import EmptyContentCenterView from "../../components/EmptyContentCenterView";
import NoContentAnnouncement from "../../components/NoContentAnnouncement";
import RequestFailedAnnouncement from "../../components/RequestFailedAnnouncement";

const HEADER_TITLE = "좋아요한 식당";

const LikeHistory = ({route, navigation}) => {
    const [restaurants, setRestaurants] = useState();
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function requestLikedRestaurants() {
            setIsError(false);
            const loadedRestaurants = await getLikeRestaurant();
            if (!loadedRestaurants) {
                setIsError(true);
                setRestaurants([]);
                return;
            }

            setRestaurants(loadedRestaurants);
        }

        requestLikedRestaurants();
    }, []);

    return (
        <Page>
            <Header route={route} navigation={navigation} title={HEADER_TITLE}/>
            <Scroll>
                {!restaurants ? (
                    <EmptyContentCenterView>
                        <ActivityIndicator color={Theme.hlOrange} size={"large"}/>
                    </EmptyContentCenterView>
                ) : (
                    isError ? (
                        <EmptyContentCenterView>
                            <RequestFailedAnnouncement/>
                        </EmptyContentCenterView>
                    ) : (
                        restaurants.length === 0 ? (
                            <EmptyContentCenterView>
                                <NoContentAnnouncement/>
                            </EmptyContentCenterView>
                        ) : (
                            restaurants.map((data, index) => (
                                <RestaurantCard key={index} data={data} navigation={navigation}/>
                            ))
                        )
                    )
                )}
            </Scroll>
        </Page>
    );
};

const Page = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.backgroundWhite};
`;

const Scroll = styled.ScrollView`
  width: 100%;
  padding: 0px ${constants.vw(4.5)}px;
`;

export default LikeHistory;
