import React, {useEffect, useState, useRef} from "react";
import styled from "styled-components";
import constants from "../../constants";
import {ActivityIndicator} from "react-native-paper";
import Theme from "../../style/Theme";
import Feedback from "../../components/Home/Restaurant/Feedback";
import Header from "../../components/Header/Header";
import RBSheet from "react-native-raw-bottom-sheet";
import {
    postFeedback,
    deleteFeedback,
    getFeedbacksOrderByCreatedDateDesc,
    getFeedbacksOrderByLikeCountDesc
} from "../../components/Api/AppFeedbackApi";
import EmptyContentCenterView from "../../components/EmptyContentCenterView";
import RequestFailedAnnouncement from "../../components/RequestFailedAnnouncement";
import NoContentAnnouncement from "../../components/NoContentAnnouncement";
import {useProfile} from "../../components/AuthContext";
import ResponseStatusEnum from "../../ResponseStatusEnum";

const HEADER_TITLE = "피드백";

const FeedbackList = ({route, navigation}) => {
    const feedbackWritingPanelRef = useRef();
    const {name: myName, picture: myPicture, email : myEmail} = useProfile();

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const [feedbacks, setFeedbacks] = useState([]);
    const [writingFeedbackContent, setWritingFeedbackContent] = useState("");

    useEffect(() => {
        async function requestFeedbacks() {
            const {data, status} = await getFeedbacksOrderByCreatedDateDesc();
            if (status >= ResponseStatusEnum.BAD_REQUEST) {
                setIsError(true);
            } else {
                setFeedbacks(data);
            }

            setIsLoading(false);
        }

        requestFeedbacks();
    }, [])

    const postReview = async () => {
        const feedbackId = await requestPostFeedback();
        if (!feedbackId) {
            return;
        }

        triggerLocalFeedbackOfPostFeedback(feedbackId);
    }

    const requestPostFeedback = async () => {
        const {data, status} = await postFeedback(writingFeedbackContent);
        if (status >= ResponseStatusEnum.BAD_REQUEST) {
            alert("리뷰 작성에 실패했습니다.");
            return undefined
        }

        closeReviewWritingPanel();
        return data;
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

    const requestGetFeedbacksOrderByCreatedDateDesc = async () => {
        setIsLoading(true);

        const {data, status} = await getFeedbacksOrderByCreatedDateDesc();
        if (status >= ResponseStatusEnum.BAD_REQUEST) {
            setIsError(true);
        } else {
            setFeedbacks(data);
        }

        setIsLoading(false);
    }

    const requestGetFeedbacksOrderByLikeCountDesc = async () => {
        setIsLoading(true);

        const {data, status} = await getFeedbacksOrderByLikeCountDesc();
        if (status >= ResponseStatusEnum.BAD_REQUEST) {
            setIsError(true);
        } else {
            setFeedbacks(data);
        }

        setIsLoading(false);
    }

    const requestDeleteFeedback = async (feedbackId) => {
        const {data, status} = await deleteFeedback(feedbackId);
        if (status >= ResponseStatusEnum.BAD_REQUEST) {
            alert("리뷰 삭제에 실패했습니다.");
            return;
        }

        deleteLocalFeedback(feedbackId);
    }

    const deleteLocalFeedback = (feedbackId) => {
        setFeedbacks((prev) => prev.filter((prevFeedback) => prevFeedback.id !== feedbackId));
    }

    const openReviewWritingPanel = () => {
        setWritingFeedbackContent("");
        feedbackWritingPanelRef.current.open();
    };

    const closeReviewWritingPanel = () => {
        feedbackWritingPanelRef.current.close();
    };

    return (
        <Page>
            <Header route={route} navigation={navigation} title={HEADER_TITLE}/>
            <AnnouncementView>
                <AnnouncementText>😂 데모 단계인 이 앱은 많은 피드백이 필요합니다 😂</AnnouncementText>
                <AnnouncementText>👋 버그 리포트, 디자인 피드백, 기능 피드백 환영 👋</AnnouncementText>
                <AnnounceDivider/>
                <AnnouncementText>특히, 식당이 아직 앱에 없거나 잘못된 정보인 경우, 피드백 써주시면 감사하겠습니다. 🥰 (식당에 대한 상세한 정보도 함께
                    적어주세요!)</AnnouncementText>
                <AnnounceDivider/>
                <AnnouncementText>식당마다 적히는 한 줄 설명평에 자신의 문구가 들어가도록 피드백 작성해보세요! 😁</AnnouncementText>
            </AnnouncementView>

            <MenusHolder>
                <Button onPress={openReviewWritingPanel}>
                    <ButtonText>작성하기</ButtonText>
                </Button>
                <SortButtonsHolder>
                    <Button onPress={requestGetFeedbacksOrderByCreatedDateDesc}>
                        <SortButtonText>작성일순</SortButtonText>
                    </Button>
                    <Button onPress={requestGetFeedbacksOrderByLikeCountDesc}>
                        <SortButtonText>좋아요순</SortButtonText>
                    </Button>
                </SortButtonsHolder>
            </MenusHolder>
            {/*<KeyboardScrollView>*/}
            <RBSheet
                ref={feedbackWritingPanelRef}
                customStyles={{
                    container: {
                        borderRadius: constants.vw(3),
                        height: constants.isIos() ? constants.vh(90) : constants.vh(85)
                    }
                }}
                keyboardAvoidingViewEnabled={false}
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
                        placeholder="피드백 내용"
                        multiline={true}
                    />
                </ReviewWritingPanel>
            </RBSheet>
            {/*</KeyboardScrollView>*/}
            <FeedbacksScroll>
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
                        <Feedback key={index} feedback={feedback} mine={myEmail === feedback.authorEmail}
                                  requestDeleteFeedback={requestDeleteFeedback}/>
                    ))
                )))}
            </FeedbacksScroll>
        </Page>
    );
};

const Page = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundWhite};
`;

const FeedbacksScroll = styled.ScrollView`
  width: 100%;
  padding: ${constants.vw(5)}px;
`;

const ButtonText = styled.Text`
  ${(props) => props.theme.NanumSquareBFont}
  margin-left: ${constants.vw(3)}px;
  font-size: ${constants.vw(5)}px;
  color: ${(props) => props.theme.fontBlue};
`;

const Button = styled.TouchableOpacity`
  margin-right: 5.5%;
`;

const TopButtonText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  font-size: ${constants.vw(4)}px;
  color: ${(props) => props.theme.fontBlue};
`;

const FeedbackTextInput = styled.TextInput`
  width: 100%;
  height: 100%;
  text-align-vertical: top;
  font-size: ${constants.vh(1.75)}px;
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

const KeyboardScrollView = styled.ScrollView``;

const ReviewWritingPanel = styled.View`
  width: 100%;
  height: 100%;
  padding: 5% 5%;
  align-items: center;
`;

const AnnouncementView = styled.View`
  width: 90%;
  padding: 3%;
  border-radius: ${constants.vh(1.3)}px;
  background-color: ${(props) => props.theme.backgroundGray};
  justify-content: center;
  align-items: center;
`

const AnnouncementText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  font-size: ${constants.vh(1.7)}px;
  color: ${(props) => props.theme.fontBlack};
`

const AnnounceDivider = styled.View`
  width: 100%;
  height: 0.5px;
  margin: 5% 0px;
  background-color: ${(props) => props.theme.backgroundDarkerGray};
`

const MenusHolder = styled.View`
  width: 95%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 4%;
`

const SortButtonsHolder = styled.View`
  flex-direction: row;
`

const SortButtonText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  font-size: ${constants.vw(3.4)}px;
  color: ${(props) => props.theme.fontBlackGray};
`

export default FeedbackList;
