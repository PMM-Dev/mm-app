import React from "react";
import styled from "styled-components";
import RestaurantTypeButtonsTable from "../components/Home/RestaurantTypeButtonsTable";
import Header from "../components/Home/Header";
import PostPart from "../components/Home/PostPart";
import NoticePart from "../components/Home/NoticePart";
import constants from "../constants";
import {useNavigation} from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation();
    return (
        <Screen>
            <Scroll contentContainerStyle={{flex: 1}}>
                <Wrapper>
                    <Header/>
                    <RestaurantTypeButtonsTable navigation={navigation}/>
                    <PostPart/>
                    <NoticePart/>
                </Wrapper>
            </Scroll>
        </Screen>
    );
};

export default Home;

const Wrapper = styled.View`
  height: ${constants.pureheight};
`;

const Scroll = styled.ScrollView`
  width: 100%;
`;

const Screen = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.backgroundGray};
`;

const PostNotice = styled.View`
  width: 100%;
  height: 53%;
  justify-content: center;
  align-items: center;
`;
