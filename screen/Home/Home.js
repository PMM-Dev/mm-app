import React, {useEffect, useState, useCallback} from "react";
import styled from "styled-components";
import RestaurantTypeButtonsTable from "../../components/Home/RestaurantTypeButtonsTable";
import Header from "../../components/Header/Header";
import PostPart from "../../components/Home/PostPart";
import SmallBoardPart from "../../components/Home/SmallBoardPart";
import ThemePart from "../../components/Home/ThemePart";
import constants from "../../constants";
import Theme from "../../style/Theme";
import {getLatestFeedbackPreview} from "../../components/Api/AppFeedbackApi";
import {getLatestNotice} from "../../components/Api/AppNotice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ResponseStatusEnum from "../../ResponseStatusEnum";
import {getPostPreview} from "../../components/Api/AppPostApi";
import {getRandomTheme, getRestaurantByTheme} from "../../components/Api/AppRestaurantApi";
import {ThemeConverter} from "../../components/Converter";
const PREVENTING_IOS_BOUNCE_VIEW_HEIGHT = 3000;

const Home = ({route, navigation}) => {

    const [reportPreview, setReportPreview] = useState();
    const [refreshing, setRefreshing] = useState(false);
    const [posts, setPosts] = useState([]);
    const [randomTheme, setRandomTheme] = useState();
    const [restuarantByTheme1, setRestuarantByTheme1] = useState();
    const [restuarantByTheme2, setRestuarantByTheme2] = useState();

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(300).then(() => setRefreshing(false));
    }, []);

    const homeRequest = () => {
        async function requestLatestNotice () {
            const {data, status} = await getLatestNotice();

            if (status >= ResponseStatusEnum.BAD_REQUEST) {
                return;
            }
            if (status === ResponseStatusEnum.NO_DATA) {
                return;
            }
            const readNoticeId = await AsyncStorage.getItem("@readNoticeId");
            if (readNoticeId === data.id) {
                return;
            }

            alert(data.content);
        }

        async function requestFeedbackPreview () {
            const {data, status} = await getLatestFeedbackPreview();
            if (status >= ResponseStatusEnum.BAD_REQUEST) {
                return;
            }
            if (status === ResponseStatusEnum.NO_DATA) {
                return;
            }
            setReportPreview(data);
        }

        async function requestPosts() {
            const {data, status} = await getPostPreview();
            if (status >= ResponseStatusEnum.BAD_REQUEST) {
                return;
            } else {
                setPosts(data);
            }
        }

        async function requestRandomTheme() {
            const {data, status} = await getRandomTheme();
            if (status >= ResponseStatusEnum.BAD_REQUEST) {
                return;
            } else {
                setRandomTheme(data);
                requestRestaurantByTheme(data[0], 0);
                requestRestaurantByTheme(data[1], 1);
            }
        }
        async function requestRestaurantByTheme(theme, id) {
            const {data, status} = await getRestaurantByTheme(theme);
            if (status >= ResponseStatusEnum.BAD_REQUEST) {
                return;
            }

            if(id == 0)
                setRestuarantByTheme1(data);
            else if(id == 1)
                setRestuarantByTheme2(data);
        }
        requestPosts();
        requestLatestNotice();
        requestFeedbackPreview();
        requestRandomTheme();
    }

    useEffect(()=>{
        if(refreshing === true)
            homeRequest();
    },[refreshing])

    useEffect(() => {
        homeRequest();
    }, [])

    return (
        <Screen>
            <Scroll
                style={{
                    backgroundColor: constants.isIos()
                        ? Theme.backgroundGray
                        : Theme.backgroundWhite,
                }}
                contentContainerStyle={{backgroundColor: Theme.backgroundWhite}}
                contentInset={{top: -PREVENTING_IOS_BOUNCE_VIEW_HEIGHT}}
                contentOffset={{y: PREVENTING_IOS_BOUNCE_VIEW_HEIGHT}}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                {constants.isIos() && <PreventingIosBounceView/>}
                <Wrapper>
                    <Header route={route} navigation={navigation}/>
                    <RestaurantTypeButtonsTable navigation={navigation}/>
                    <SmallBoardPart title={"피드백"} preview={reportPreview} navigate={() => navigation.navigate("FeedbackList")}/>
                    {
                        randomTheme !== undefined ?
                        <>
                            <ThemePart title={ThemeConverter(randomTheme[0])} restaurant={restuarantByTheme1} navigation={navigation}/>
                            <ThemePart title={ThemeConverter(randomTheme[1])} restaurant={restuarantByTheme2} navigation={navigation}/>
                        </> :
                            <></>
                    }
                    <PostPart route={route} navigation={navigation} posts={posts}/>
                    <SmallBoardPart title={"공지사항"} />
                </Wrapper>
            </Scroll>
        </Screen>
    );
};

export default Home;

const RefreshControl = styled.RefreshControl``;

const Screen = styled.View`
  width: 100%;
  height: 100%;
`;

const Scroll = styled.ScrollView`
  width: 100%;
`;

const PreventingIosBounceView = styled.View`
  height: ${PREVENTING_IOS_BOUNCE_VIEW_HEIGHT}px;
`;

const Wrapper = styled.View`
  background-color: ${(props) => props.theme.backgroundGray};
`;
