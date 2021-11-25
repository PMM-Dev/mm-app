import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { ActivityIndicator } from "react-native-paper";
import Theme from "../../style/Theme";
import Header from "../../components/Header/Header";
import constants from "../../constants";
import KoreanEnum from "../../KoreanEnum";
import NoContentAnnouncement from "../../components/NoContentAnnouncement";
import RequestFailedAnnouncement from "../../components/RequestFailedAnnouncement";
import EmptyContentCenterView from "../../components/EmptyContentCenterView"
import PostListCard from "../../components/Home/PostList/PostListCard"
import {getFeedbacksOrderByCreatedDateDesc} from "../../components/Api/AppFeedbackApi";
import ResponseStatusEnum from "../../ResponseStatusEnum";
import {getPost} from "../../components/Api/AppPostApi";
import Feedback from "../../components/Home/Restaurant/Feedback";

const RestaurantList = ({route, navigation}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [isError, setIsError] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(200).then(() => setRefreshing(false));
    }, []);

    useEffect(()=>{
        async function requestPosts() {
            const {data, status} = await getPost();
            if (status >= ResponseStatusEnum.BAD_REQUEST) {
                setIsError(true);
            } else {
                setPosts(data);
            }

            setIsLoading(false);
        }
        requestPosts();
    },[refreshing])

    useEffect(() => {
        async function requestPosts() {
            const {data, status} = await getPost();
            if (status >= ResponseStatusEnum.BAD_REQUEST) {
                setIsError(true);
            } else {
                setPosts(data);
            }

            setIsLoading(false);
        }
        requestPosts();
    }, [])


    return (
        <Screen>
            <Wrapper>
                <Header
                    route={route}
                    navigation={navigation}
                    title={"자유게시판"}
                />
                <PostScroll
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                >
                    {isLoading ? (
                        <EmptyContentCenterView>
                            <ActivityIndicator
                                animating={true}
                                size="large"
                                color={Theme.hlOrange}
                            />
                        </EmptyContentCenterView>
                    ) : (isError ? (
                        <RequestFailedAnnouncement/>
                    ) : (posts && posts.length === 0 ? (
                        <NoContentAnnouncement/>
                    ) : (
                        <PostList>
                            {posts.slice(0).reverse().map((element, key) => (
                                <PostListCard data = {element} key={key} route={route} navigation={navigation} ></PostListCard>
                            ))}</PostList>
                    )))}
                </PostScroll>
            </Wrapper>
        </Screen>
    );
};

const RefreshControl = styled.RefreshControl``;

const PostList = styled.View`
  width: 100%;
  border-top-width: 1px;
  border-top-color: ${(props) => props.theme.borderGray};
  padding-left: ${constants.vw(4.5)}px;
`;

const PostScroll = styled.ScrollView`
  width: 100%;
  height: 100%;
  padding: 0px ${constants.vw(4.5)}px;
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