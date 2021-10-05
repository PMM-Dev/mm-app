import React, { useEffect, useState } from "react";
import styled from "styled-components";
import constants from "../../constants";
import { ActivityIndicator } from "react-native-paper";
import Theme from "../../style/Theme";
import RestaurantCard from "../../components/Home/RestaurantList/RestaurantCard";
import { getLikeRestaurant } from "../../components/Api/AppMemberApi";
import Header from "../../components/Header/Header";

const LikeHistory = ({ route, navigation }) => {
  const [restaurants, setRestaurants] = useState();
  const headerTitle = "좋아요한 식당";

  useEffect(() => {
    async function initRestaurants() {
      const loadedRestaurants = await getLikeRestaurant();
      setRestaurants(loadedRestaurants);
    }
    initRestaurants();
  }, []);

  return (
    <Page>
      <Header route={route} navigation={navigation} title={headerTitle} />
      <Scroll contentContainerStyle={{ flex: 1 }}>
        {restaurants ? (
          restaurants.map((data, index) => (
            <RestaurantView key={index}>
              <RestaurantCard data={data} navigation={navigation} />
            </RestaurantView>
          ))
        ) : (
          <ActivityIndicator color={Theme.fontBlack} size={"large"} />
        )}
      </Scroll>
    </Page>
  );
};

const RestaurantView = styled.View`
  height: ${constants.vh(13)}px;
  width: 100%;
  align-items: center;
`;

const Page = styled.View`
  width: 100%;
  height: ${constants.height - constants.statusBarHeight}px;
  background-color: ${(props) => props.theme.backgroundWhite};
`;

const Scroll = styled.ScrollView`
  width: 100%;
`;

export default LikeHistory;
