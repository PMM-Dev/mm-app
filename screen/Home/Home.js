import React, {useEffect, useState} from "react";
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

const PREVENTING_IOS_BOUNCE_VIEW_HEIGHT = 3000;

const Home = ({route, navigation}) => {

    const [reportPreview, setReportPreview] = useState();

    useEffect(() => {
        async function requestLatestNotice () {
            const response = await getLatestNotice();
            if (!response) {
                return;
            }

            const readNoticeId = await AsyncStorage.getItem("@readNoticeId");
            if (readNoticeId === response.id) {
                return;
            }


            alert(response.content);
        }

        async function requestFeedbackPreview () {
            const response = await getLatestFeedbackPreview();
            if (!response) {
                return;
            }

            setReportPreview(response);
        }

        requestLatestNotice();
        requestFeedbackPreview();
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
            >
                {constants.isIos() && <PreventingIosBounceView/>}
                <Wrapper>
                    <Header route={route} navigation={navigation}/>
                    <RestaurantTypeButtonsTable navigation={navigation}/>
                    <SmallBoardPart title={"피드백"} preview={reportPreview} navigate={() => navigation.navigate("FeedbackList")}/>
                    <ThemePart title={"카공하기 좋은 카페는?"}/>
                    <ThemePart title={"시험 기간에는 싸고 빠르게"}/>
                    <PostPart/>
                    <SmallBoardPart title={"공지사항"}/>
                </Wrapper>
            </Scroll>
        </Screen>
    );
};

export default Home;

const Temporary = styled.TouchableOpacity``;

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
