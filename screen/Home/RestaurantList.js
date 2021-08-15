import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {ActivityIndicator} from "react-native-paper";
import Theme from "../../style/Theme";
import Header from "../../components/Header/Header";
import constants from "../../constants";
import {LinearGradient} from "expo-linear-gradient";
import RestaurantCard from "../../components/Home/RestaurantList/RestaurantCard";
import {getRestaurantsByGenre} from "../../components/AppApi";
import KoreanEnum from "../../KoreanEnum";

const RestaurantList = ({route, navigation}) => {
    const genre = route.params.param.genre;
    const [restaurants, setRestaurants] = useState();

    useEffect(() => {
        async function initRestaurants() {
            const loadedRestaurants = await getRestaurantsByGenre(genre);
            setRestaurants(loadedRestaurants);
        }

        initRestaurants();
    }, []);

    return (
        <Screen>
            <Scroll contentContainerStyle={{flex: 1}}>
                <Wrapper>
                    <Header
                        route={route}
                        navigation={navigation}
                        title={KoreanEnum[genre]}
                    />
                    <WhiteSpace>
                        <LinearGradient
                            colors={[Theme.hlRed, Theme.hlOrange]}
                            style={{width: "100%", height: "6%"}}
                        >
                            <FilterView>
                                <FilterView1>
                                    <Wtext>영업중</Wtext>
                                </FilterView1>
                                <FilterView2>
                                    <Wtext>심야</Wtext>
                                </FilterView2>
                                <FilterView3>
                                    <Wtext>가격낮은순</Wtext>
                                </FilterView3>
                                <FilterView4>
                                    <Wtext>후기많은순</Wtext>
                                </FilterView4>
                                <FilterView5>
                                    <Wtext last={true}>관심많은순</Wtext>
                                </FilterView5>
                            </FilterView>
                        </LinearGradient>
                        <ResScroll>
                            {restaurants ? (
                                restaurants.map((data, index) => (
                                    <ResView key={index}>
                                        <RestaurantCard data={data} navigation={navigation}/>
                                    </ResView>
                                ))
                            ) : (
                                <ActivityIndicator color={Theme.fontBlack} size={"large"}/>
                            )}
                        </ResScroll>
                    </WhiteSpace>
                </Wrapper>
            </Scroll>
        </Screen>
    );
};

export default RestaurantList;

const NOTYET = styled.View``;

const ResView = styled.View`
  height: ${constants.vh(13)}px;
  width: 100%;
  align-items: center;
`;

const Wtext = styled.Text`
  font-size: 11px;
  color: #ffffff;
  text-align: center;
  font-family: "NanumSquare";
  font-weight: bold;
  ${(props) => (props.last ? "" : "border-right-width: 1.5px;")};
  border-right-color: ${(props) => props.theme.backgroundWhite};
`;

const FilterView1 = styled.TouchableOpacity`
  height: 100%;
  width: 15%;
  justify-content: center;
  align-content: center;
`;

const FilterView2 = styled.TouchableOpacity`
  height: 100%;
  width: 17%;
  justify-content: center;
  align-content: center;
`;

const FilterView3 = styled.TouchableOpacity`
  height: 100%;
  width: 22%;
  justify-content: center;
  align-content: center;
`;

const FilterView4 = styled.TouchableOpacity`
  height: 100%;
  width: 22%;
  justify-content: center;
  align-content: center;
`;

const FilterView5 = styled.TouchableOpacity`
  height: 100%;
  width: 22%;
  justify-content: center;
  align-content: center;
`;

const ResScroll = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

const FilterView = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
`;

const WhiteSpace = styled.View`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.View`
  height: ${constants.pureheight};
`;

const Scroll = styled.ScrollView`
  width: 100%;
`;

const Screen = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.backgroundWhite};
`;

const Foodlist = styled.View`
  width: 100%;
  height: 28%;
  background-color: ${(props) => props.theme.backgroundGray};
`;
