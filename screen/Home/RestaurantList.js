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
    getRestaurantsByType,
    getRestaurantsByRank,
    getRestaurantsByTypeOrderByPriceDesc,
    getRestaurantsByTypeOrderByPriceAsc,
    getRestaurantsByTypeOrderByAverageGradeDesc,
    getRestaurantsByTypeOrderByReviewCountDesc,
    getRestaurantsByTypeOrderByLikeCountDesc
} from "../../components/Api/AppRestaurantApi";
import KoreanEnum from "../../KoreanEnum";
import NoContentAnnouncement from "../../components/NoContentAnnouncement";
import RestaurantEnum from "../../RestaurantEnum";
import {View} from "react-native";
import RequestFailedAnnouncement from "../../components/RequestFailedAnnouncement";

const RestaurantList = ({route, navigation}) => {
    const genre = route.params.param.genre;

    const [isLoading, setIsLoading] = useState(true);
    const [restaurants, setRestaurants] = useState([]);
    const [isType, setIsType] = useState(false);

    useEffect(() => {
        async function requestRestaurantsByType() {
            try {
                const loadedRestaurants = await getRestaurantsByType(genre);
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
            setIsType(false);
        } else if (genre === RestaurantEnum.RANK) {
            requestRestaurantsByRank()
            setIsType(false);
        } else {
            requestRestaurantsByType();
            setIsType(true);
        }
    }, []);

    const requestRestaurantsByTypeOrderByPriceDesc = async () => {
        try {
            setIsLoading(true);
            const loadedRestaurants = await getRestaurantsByTypeOrderByPriceDesc(genre);
            setRestaurants(loadedRestaurants);
        } catch (e) {
            alert("서버 요청에 실패했습니다.");
            setRestaurants(undefined);
        } finally {
            setIsLoading(false);
        }
    }

    const requestRestaurantsByTypeOrderByPriceAsc = async () => {
        try {
            setIsLoading(true);
            const loadedRestaurants = await getRestaurantsByTypeOrderByPriceAsc(genre);
            setRestaurants(loadedRestaurants);
        } catch (e) {
            alert("서버 요청에 실패했습니다.");
            setRestaurants(undefined);
        } finally {
            setIsLoading(false);
        }
    }

    const requestRestaurantsByTypeOrderByAverageGradeDesc = async () => {
        try {
            setIsLoading(true);
            const loadedRestaurants = await getRestaurantsByTypeOrderByAverageGradeDesc(genre);
            setRestaurants(loadedRestaurants);
        } catch (e) {
            alert("서버 요청에 실패했습니다.");
            setRestaurants(undefined);
        } finally {
            setIsLoading(false);
        }
    }

    const requestRestaurantsByTypeOrderByReviewCountDesc = async () => {
        try {
            setIsLoading(true);
            const loadedRestaurants = await getRestaurantsByTypeOrderByReviewCountDesc(genre);
            setRestaurants(loadedRestaurants);
        } catch (e) {
            alert("서버 요청에 실패했습니다.");
            setRestaurants(undefined);
        } finally {
            setIsLoading(false);
        }
    }

    const requestRestaurantsByTypeOrderByLikeCountDesc = async () => {
        try {
            setIsLoading(true);
            const loadedRestaurants = await getRestaurantsByTypeOrderByLikeCountDesc(genre);
            setRestaurants(loadedRestaurants);
        } catch (e) {
            alert("서버 요청에 실패했습니다.");
            setRestaurants(undefined);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Screen>
            <Wrapper>
                <Header
                    route={route}
                    navigation={navigation}
                    title={KoreanEnum[genre]}
                />
                {isType && (
                    <LinearGradient
                        colors={[Theme.hlRed, Theme.hlOrange]}
                        style={{width: constants.vw(100), height: constants.vh(4.5)}}
                    >
                        <FilterView>
                            <FilterButton onPress={() => requestRestaurantsByTypeOrderByPriceDesc()}>
                                <ButtonText>가격높은순</ButtonText>
                            </FilterButton>
                            <FilterButton onPress={() => requestRestaurantsByTypeOrderByPriceAsc()}>
                                <ButtonText>가격낮은순</ButtonText>
                            </FilterButton>
                            <FilterButton onPress={() => requestRestaurantsByTypeOrderByAverageGradeDesc()}>
                                <ButtonText>평점높은순</ButtonText>
                            </FilterButton>
                            <FilterButton onPress={() => requestRestaurantsByTypeOrderByReviewCountDesc()}>
                                <ButtonText>후기많은순</ButtonText>
                            </FilterButton>
                            <FilterButton onPress={() => requestRestaurantsByTypeOrderByLikeCountDesc()}>
                                <ButtonText>좋아요많은순</ButtonText>
                            </FilterButton>
                        </FilterView>
                    </LinearGradient>
                )}
                <RestaurantListScroll>
                    {isLoading ? (
                        <EmptyListView>
                            <ActivityIndicator color={Theme.fontBlack} size={"large"}/>
                        </EmptyListView>
                    ) : (
                        restaurants ? (
                            restaurants.length === 0 ? (
                                <EmptyListView>
                                    <NoContentAnnouncement/>
                                </EmptyListView>
                            ) : (
                                restaurants.map((data, index) => (
                                    <RestaurantView key={index}>
                                        <RestaurantCard data={data} navigation={navigation}/>
                                    </RestaurantView>
                                ))
                            )
                        ) : (
                            <EmptyListView>
                                <RequestFailedAnnouncement/>
                            </EmptyListView>
                        )
                    )}
                </RestaurantListScroll>
            </Wrapper>
        </Screen>
    );
};

const EmptyListView = styled.View`
  width: 100%;
  height: ${constants.contentHeight}px;
  justify-content: center;
  align-items: center;
`

const RestaurantView = styled.View`
  height: ${constants.vh(13)}px;
  width: 100%;
  align-items: center;
`;

const FilterView = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const FilterButton = styled.TouchableOpacity`
  height: 100%;
  justify-content: center;
  align-content: center;
`;

const ButtonText = styled.Text`
  ${(props) => props.theme.NanumSquareBFont}
  font-size: ${constants.vw(2.8)}px;
  color: ${(props) => props.theme.backgroundWhite};
  border-right-color: ${(props) => props.theme.backgroundWhite};
`;

const RestaurantListScroll = styled.ScrollView`
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

export default RestaurantList;