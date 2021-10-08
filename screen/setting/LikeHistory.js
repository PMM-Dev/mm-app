import React, { useEffect, useState } from "react";
import styled from "styled-components";
import constants from "../../constants";
import { ActivityIndicator } from "react-native-paper";
import Theme from "../../style/Theme";
import RestaurantCard from "../../components/Home/RestaurantList/RestaurantCard";
import { getLikeRestaurant } from "../../components/Api/AppMemberApi";
import Header from "../../components/Header/Header";

const HEADER_TITLE = "좋아요한 식당";

const LikeHistory = ({ route, navigation }) => {
  const [restaurants, setRestaurants] = useState();

  useEffect(() => {
    async function initRestaurants() {
      const loadedRestaurants = await getLikeRestaurant();
      setRestaurants(loadedRestaurants);
    }
    initRestaurants();
  }, []);

  return (
    <Page>
      <Header route={route} navigation={navigation} title={HEADER_TITLE} />
      <Scroll>
        {restaurants ? (
          restaurants.map((data, index) => (
              <RestaurantCard key={index} data={data} navigation={navigation} />
          ))
        ) : (
          <ActivityIndicator color={Theme.fontBlack} size={"large"} />
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
