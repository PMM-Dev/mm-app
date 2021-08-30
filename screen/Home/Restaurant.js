import React, {useState, useEffect} from "react";
import styled from "styled-components";
import constants from "../../constants";
import RestaurantInfoView from "../../components/Home/Restaurant/RestaurantInfoView";
import RestaurantReviewView from "../../components/Home/Restaurant/RestaurantReviewView";
import Header from "../../components/Header/Header";
import {getRestaurantsById} from "../../components/Api/AppRestaurantApi";
import {View} from "react-native";
import {ActivityIndicator} from "react-native-paper";
import Theme from "../../style/Theme";
import {useProfile} from "../../components/AuthContext";

const Restaurant = ({route, navigation}) => {
    const {email} = useProfile();
    const restaurantId = route.params.restaurantId;
    const resPicture = route.params.picture;

    const [data, setData] = useState();
    const [isStartScroll, setIsStartScroll] = useState(false);

    const handleScrollState = (event) => {
        if (event.nativeEvent.contentOffset.y > 1) {
            setIsStartScroll(true);
        } else {
            setIsStartScroll(false);
        }
    }

    // 들어가면 요청하기 // => 리스트 전용 요청 만들기
    useEffect(() => {
        async function getRestaurantData() {
            const restaurantData = await getRestaurantsById(restaurantId);
            setData(restaurantData);
        }

        getRestaurantData();
    }, [])

    return (
        <Screen>
            {
                data ? (
                    <>
                        <Header route={route} navigation={navigation} title={data.name} isTitleShown={isStartScroll} email={email} restaurantId={restaurantId}/>
                        <Scroll alwaysBounceVertical={false} onScroll={handleScrollState} scrollEventThrottle={16}>
                            <Wrapper>
                                <RestaurantInfoView
                                    data={data}
                                    picture={resPicture}
                                />
                                <RestaurantReviewView
                                    restaurantId={restaurantId}
                                    reviewCount={data.reviewCount}
                                />
                            </Wrapper>
                        </Scroll>
                    </>
                ) : (
                    <View
                        style={{flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center"}}
                    >
                        <ActivityIndicator
                            animating={true}
                            size="large"
                            color={Theme.hlOrange}/>
                    </View>
                )
            }
        </Screen>
    );
};

const Screen = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.backgroundWhite};
`;

const Scroll = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.View`
  background-color: ${(props) => props.theme.backgroundGray};
`

export default Restaurant;