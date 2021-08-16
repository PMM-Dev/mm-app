import React from "react";
import styled from "styled-components";
import RestaurantTypeButtonsTable from "../../components/Home/RestaurantTypeButtonsTable";
import Header from "../../components/Header/Header";
import PostPart from "../../components/Home/PostPart";
import NoticePart from "../../components/Home/NoticePart";
import constants from "../../constants";

const Home = ({route, navigation}) => {
    return (
        <Screen>
            <Scroll contentContainerStyle={{flex: 1}} alwaysBounceVertical={false}>
                <Wrapper>
                    <Header route={route} navigation={navigation}/>
                    <RestaurantTypeButtonsTable navigation={navigation}/>
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
  background-color: ${(props) => props.theme.backgroundWhite};
`;

const Wrapper = styled.View`
  height: ${constants.pureheight}px;
  background-color: ${(props) => props.theme.backgroundGray};
`;