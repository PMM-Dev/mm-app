import React, { useEffect, useState } from "react";
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

const Dummy = [
    {Title : "[전대 후문]김해뒷고기 후기", ID : "asdf", visitNum: 30, recommendNum : 2, date : "10.26", image: "asdf"},
    {Title : "김해뒷고기 후기", ID : "asdf", visitNum: 30, recommendNum : 2, date : "10.26"},
    {Title : "김해뒷고기 후기", ID : "asdf", visitNum: 30, recommendNum : 2, date : "10.26"},
    {Title : "[전대 후문]김해뒷고기 후기", ID : "asdf", visitNum: 30, recommendNum : 2, date : "10.26"},
    {Title : "김해뒷고기 후기", ID : "asdf", visitNum: 30, recommendNum : 2, date : "10.26"},
    {Title : "김해뒷고기 후기", ID : "asdf", visitNum: 30, recommendNum : 2, date : "10.26"},
    {Title : "[전대 후문]김해뒷고기 후기", ID : "asdf", visitNum: 30, recommendNum : 2, date : "10.26"},
    {Title : "김해뒷고기 후기", ID : "asdf", visitNum: 30, recommendNum : 2, date : "10.26"},
    {Title : "김해뒷고기 후기", ID : "asdf", visitNum: 30, recommendNum : 2, date : "10.26"},
    {Title : "[전대 후문]김해뒷고기 후기", ID : "asdf", visitNum: 30, recommendNum : 2, date : "10.26"},
    {Title : "김해뒷고기 후기", ID : "asdf", visitNum: 30, recommendNum : 2, date : "10.26"},
    {Title : "김해뒷고기 후기", ID : "asdf", visitNum: 30, recommendNum : 2, date : "10.26"},
    {Title : "[전대 후문]김해뒷고기 후기", ID : "asdf", visitNum: 30, recommendNum : 2, date : "10.26"},
    {Title : "김해뒷고기 후기", ID : "asdf", visitNum: 30, recommendNum : 2, date : "10.26"},
    {Title : "김해뒷고기 후기", ID : "asdf", visitNum: 30, recommendNum : 2, date : "10.26"},
    {Title : "[전대 후문]김해뒷고기 후기", ID : "asdf", visitNum: 30, recommendNum : 2, date : "10.26"},
    {Title : "김해뒷고기 후기", ID : "asdf", visitNum: 30, recommendNum : 2, date : "10.26"},
    {Title : "김해뒷고기 후기", ID : "asdf", visitNum: 30, recommendNum : 2, date : "10.26"},
];

const RestaurantList = ({route, navigation}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [isError, setIsError] = useState(false);

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
                <PostScroll>
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
                            {posts.map((element, key) => (
                                <PostListCard data = {element} key={key} route={route} navigation={navigation} ></PostListCard>
                            ))}</PostList>
                    )))}
                </PostScroll>
            </Wrapper>
        </Screen>
    );
};



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