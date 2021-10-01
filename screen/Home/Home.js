import React from "react";
import styled from "styled-components";
import RestaurantTypeButtonsTable from "../../components/Home/RestaurantTypeButtonsTable";
import Header from "../../components/Header/Header";
import PostPart from "../../components/Home/PostPart";
import NoticePart from "../../components/Home/NoticePart";
import ThemePart from "../../components/Home/ThemePart";
import constants from "../../constants";
import Theme from "../../style/Theme";

const PREVENTING_IOS_BOUNCE_VIEW_HEIGHT = 3000;

const Home = ({route, navigation}) => {
    return (
        <Screen>
            <Scroll
                style={{backgroundColor: constants.isIos() ? Theme.backgroundGray : Theme.backgroundWhite}}
                contentContainerStyle={{backgroundColor: Theme.backgroundWhite}}
                contentInset={{top: -PREVENTING_IOS_BOUNCE_VIEW_HEIGHT}}
                contentOffset={{y: PREVENTING_IOS_BOUNCE_VIEW_HEIGHT}}
            >
                {constants.isIos() && <PreventingIosBounceView />}
                <Wrapper>
                    <Header route={route} navigation={navigation}/>
                    <RestaurantTypeButtonsTable navigation={navigation}/>
                    <ThemePart title={"🧑‍💻 카공하기 좋은 카페는?"}/>
                    <ThemePart title={"🤦‍ 시험 기간에는 싸고 빠르게"}/>
                    <PostPart/>
                    <NoticePart/>
                </Wrapper>
            </Scroll>
        </Screen>
    );
};

export default Home;

const Screen = styled.View`
  width: 100%;
  height: 100%;
`;

const Scroll = styled.ScrollView`
  width: 100%;
`;

const PreventingIosBounceView = styled.View`
  height: ${PREVENTING_IOS_BOUNCE_VIEW_HEIGHT};
`

const Wrapper = styled.View`
  background-color: ${(props) => props.theme.backgroundGray};
`;