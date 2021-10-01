import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {ActivityIndicator} from "react-native-paper";
import Theme from "../../style/Theme";
import Header from "../../components/Header/Header";
import constants from "../../constants";
import {LinearGradient} from "expo-linear-gradient";
import RestaurantCard from "../../components/Home/RestaurantList/RestaurantCard";
import {
    getRestaurantsByDeliverable,
    getRestaurantsByGenre,
    getRestaurantsByRank
} from "../../components/Api/AppRestaurantApi";
import KoreanEnum from "../../KoreanEnum";
import NoContentAnnouncement from "../../components/NoContentAnnouncement";
import RestaurantEnum from "../../RestaurantEnum";
import {View} from "react-native";
import RequestFailedAnnouncement from "../../components/RequestFailedAnnouncement";

const RestaurantList = ({route, navigation}) => {
    const genre = route.params.param.genre;

    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function requestRestaurantsByType() {
            try {
                const loadedRestaurants = await getRestaurantsByGenre(genre);
                setRestaurants(loadedRestaurants);
            } catch (e) {
                alert("서버 요청에 실패했습니다.");
                setRestaurants(undefined);
            } finally {
                setIsLoading(false);
            }
        }

        async function requestRestaurantsByDeliverable() {
            try {
                const loadedRestaurants = await getRestaurantsByDeliverable();
                setRestaurants(loadedRestaurants);
            } catch (e) {
                alert("서버 요청에 실패했습니다.");
                setRestaurants(undefined);
            } finally {
                setIsLoading(false);
            }
        }

        async function requestRestaurantsByRank() {
            try {
                const loadedRestaurants = await getRestaurantsByRank();
                setRestaurants(loadedRestaurants);
            } catch (e) {
                alert("서버 요청에 실패했습니다.");
                setRestaurants(undefined);
            } finally {
                setIsLoading(false);
            }
        }

        if (genre === RestaurantEnum.DELIVERABLE) {
            requestRestaurantsByDeliverable()
        } else if (genre === RestaurantEnum.RANK) {
            requestRestaurantsByRank()
        } else {
            requestRestaurantsByType();
        }
    }, []);

    return (
        <Screen>
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
                    <RestaurantListScroll>
                        {isLoading ? (
                            <View styled={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                                <ActivityIndicator color={Theme.fontBlack} size={"large"}/>
                            </View>
                        ) : (
                            restaurants ? (
                                restaurants.length === 0 ? (
                                    <NoContentAnnouncement/>
                                ) : (
                                    restaurants.map((data, index) => (
                                        <RestaurantView key={index}>
                                            <RestaurantCard data={data} navigation={navigation}/>
                                        </RestaurantView>
                                    ))
                                )
                            ) : (
                                <RequestFailedAnnouncement/>
                            )
                        )}
                    </RestaurantListScroll>
                </WhiteSpace>
            </Wrapper>
        </Screen>
    );
};

const RestaurantView = styled.View`
  height: ${constants.vh(13)}px;
  width: 100%;
  align-items: center;
`;

const Wtext = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  font-size: 11px;
  color: #ffffff;
  text-align: center;
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

const RestaurantListScroll = styled.ScrollView`
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
  height: ${constants.pureheight}px;
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

export default RestaurantList;