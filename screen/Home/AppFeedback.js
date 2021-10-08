import React, {useEffect, useState, useRef} from "react";
import styled from "styled-components";
import constants from "../../constants";
import {ActivityIndicator, TextInput} from "react-native-paper";
import Theme from "../../style/Theme";
import Feedback from "../../components/Home/Restaurant/Feedback";
import Header from "../../components/Header/Header";
import RBSheet from "react-native-raw-bottom-sheet";
import {postFeedback, deleteFeedback, getFeedbacksOrderByCreatedDateDesc} from "../../components/Api/AppFeedbackApi";
import EmptyContentCenterView from "../../components/EmptyContentCenterView";
import RequestFailedAnnouncement from "../../components/RequestFailedAnnouncement";
import NoContentAnnouncement from "../../components/NoContentAnnouncement";
import {useProfile} from "../../components/AuthContext";

const HEADER_TITLE = "피드백 목록";

const AppFeedback = ({route, navigation}) => {
    const feedbackWritingPanelRef = useRef();
    const {name: myName, picture: myPicture} = useProfile();

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const [feedbacks, setFeedbacks] = useState([]);
    const [isPostStep, setIsPostStep] = useState(true);
    const [writingFeedbackContent, setWritingFeedbackContent] = useState("");

    useEffect(() => {
        async function requestFeedbacks() {
            const response = await getFeedbacksOrderByCreatedDateDesc();
            if (!response) {
                setIsError(true);
            } else {
                setFeedbacks(response);
            }

            setIsLoading(false);
        }

        requestFeedbacks();
    }, [])

    const postReview = async () => {
        const feedbackId = await requestPostingFeedback();
        if (!feedbackId) {
            return;
        }

        triggerLocalFeedbackOfPostFeedback(feedbackId);
    }

    const requestPostingFeedback = async () => {
        const response = await postFeedback(writingFeedbackContent);
        if (!response) {
            alert("리뷰 작성에 실패했습니다.");
            return undefined
        }

        closeReviewWritingPanel();
        return response;
    };

    const triggerLocalFeedbackOfPostFeedback = (feedbackId) => {
        setFeedbacks((prev) => [{
            "authorName": myName,
            "authorPicture": myPicture,
            "content": writingFeedbackContent,
            "id": feedbackId,
            "likeCount": 0
        }, ...prev]);
    }

    const requestDeleteFeedback = async (feedbackId) => {
        const response = await deleteFeedback(feedbackId);
        if (!response) {
            alert("리뷰 작성에 실패했습니다.");
            return;
        }

        deleteLocalFeedback(feedbackId);
    }

    const deleteLocalFeedback = (feedbackId) => {
        setFeedbacks((prev) => prev.map((prevFeedback) => {
            if (prevFeedback.id !== feedbackId) {
                return prevFeedback;
            }
        }))
    }

    const openReviewWritingPanel = () => {
        feedbackWritingPanelRef.current.open();
    };

    const closeReviewWritingPanel = () => {
        feedbackWritingPanelRef.current.close();
    };

    return (
        <Page>
            <Header route={route} navigation={navigation} title={HEADER_TITLE}/>

            <Button onPress={() => openReviewWritingPanel()}>
                <ButtonText>피드백 작성하기</ButtonText>
            </Button>
            <RBSheet
                ref={feedbackWritingPanelRef}
                height={constants.vh(93)}
                customStyles={{container: {borderRadius: constants.vw(3)}}}
            >
                <ReviewWritingPanel>
                    <TopMenusHolder>
                        <Button onPress={closeReviewWritingPanel}>
                            <TopButtonText>취소</TopButtonText>
                        </Button>
                        <PanelTitle>피드백 작성하기</PanelTitle>
                        <Button onPress={postReview} disabled={writingFeedbackContent === ""}>
                            <TopButtonText
                                disabled={writingFeedbackContent === ""}>보내기</TopButtonText>
                        </Button>
                    </TopMenusHolder>
                    <FeedbackTextInput
                        value={writingFeedbackContent}
                        onChangeText={(text) => setWritingFeedbackContent(text)}
                        multiline={true}
                    />
                </ReviewWritingPanel>
            </RBSheet>
            <Scroll>
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
                ) : (feedbacks && feedbacks.length === 0 ? (
                    <NoContentAnnouncement/>
                ) : (
                    feedbacks.map((feedback, index) => (
                        <Feedback key={index} feedback={feedback} mine={myName === feedback.authorName}
                                  requestDeleteFeedback={requestDeleteFeedback}/>
                    ))
                )))}
            </Scroll>
        </Page>
    );
};

const ButtonText = styled.Text`
  ${(props) => props.theme.NanumSquareBFont}
  margin-left: ${constants.vw(3)}px;
  font-size: ${constants.vw(4)}px;
  color: ${(props) => props.theme.fontBlue};
`;

const Button = styled.TouchableOpacity``;

const TopButtonText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  font-size: ${constants.vw(4)}px;
  color: ${(props) => props.theme.fontBlue};
`;

const FeedbackTextInput = styled.TextInput`
  width: 100%;
  height: 100%;
  text-align-vertical: top;
  padding: 5% 5%;
`;


const PanelTitle = styled.Text`
  ${(props) => props.theme.NanumSquareBFont}
  font-size: ${constants.vw(4.5)}px;
`;

const TopMenusHolder = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 7%;
`;

const ReviewWritingPanel = styled.View`
  width: 100%;
  height: 100%;
  padding: 5% 5%;
  align-items: center;
`;

const Page = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.backgroundWhite};
`;

const Scroll = styled.ScrollView`
  width: 100%;
  padding: ${constants.vw(5)}px;
`;

export default AppFeedback;
