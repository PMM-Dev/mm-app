import React, {useState, useEffect, useCallback} from "react";
import {useProfile} from "../../components/AuthContext";
import styled from "styled-components";
import {ActivityIndicator} from "react-native-paper";
import constants from "../../constants";
import Theme from "../../style/Theme";
import Header from "../../components/Header/Header";
import EmptyScreenCenterView from "../../components/EmptyScreenCenterView";
import ResponseStatusEnum from "../../ResponseStatusEnum";
import {SEND} from "../../image"
import PostCard from "../../components/Home/PostList/PostCard"
import PostComment from "../../components/Home/PostList/PostComment"
import {Keyboard, KeyboardAvoidingView} from "react-native";
import {
    deletePost,
    getPostById,
    getPostComment,
    getpostComment,
    postReport
} from "../../components/Api/AppPostApi";
import {Menu, Divider, Provider} from 'react-native-paper';

const Post = ({route, navigation}) => {
    const {name: myName, picture: myPicture, email: myEmail} = useProfile();
    const postId = route.params.postId;
    const [data, setData] = useState();
    const [writingReviewContent, setWritingReviewContent] = useState("");
    const [comment, setComment] = useState();
    const [commentNum, setCommentNum] = useState();
    const [refreshing, setRefreshing] = useState(false);

    const [isOptionOpen, setIsOptionOpen] = useState(false);


    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const makeReport = async () => {
        const {data, status} = await postReport(postId);
        if (status >= ResponseStatusEnum.BAD_REQUEST) {
            alert("신고 실패했습니다.");
            return;
        }
        alert("신고 되었습니다.");
        return;
    }

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(200).then(() => setRefreshing(false));
    }, []);

    const postRequest = () => {
        async function requestPostById(postId) {
            const {data, status} = await getPostById(postId);
            setData(data);
        }

        async function requestPostCommentById(postId) {
            const {data, status} = await getPostComment(postId);
            setComment(data);
            setCommentNum(data.length);
        }

        requestPostById(postId);
        requestPostCommentById(postId);
    }

    useEffect(() => {
        postRequest();
    }, []);

    useEffect(() => {
        postRequest();
    }, [refreshing])

    const postComment = async () => {
        const {data, status} = await getpostComment(writingReviewContent, postId);
        if (status >= ResponseStatusEnum.BAD_REQUEST) {
            return;
        }
        triggerLocalFeedbackOfComment(data);
    }

    const triggerLocalFeedbackOfComment = (curId) => {
        setCommentNum((prev) => prev + 1);
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const createdDate = `${year}-${month >= 10 ? month : '0' + month}-${day >= 10 ? day : '0' + day} ${hours >= 10 ? hours : '0' + hours}:${minutes >= 10 ? minutes : '0' + minutes}`;

        const newLocalComment = {
            "authorEmail": myEmail,
            "authorName": myName,
            "authorPicture": myPicture,
            "content": writingReviewContent,
            "createDate": createdDate,
            "didLike": false,
            "id": curId,
            "likeCount": 0,
        }

        const LocalComments = [...comment, newLocalComment];
        setComment(LocalComments);
    }

    const openOption = () => {
        setIsOptionOpen(true);
    };

    const closeOption = () => {
        setIsOptionOpen(false);
    };
    return (
        <Provider>
            <Screen>
                {data && comment ? (
                    <>
                        <Header
                            route={route}
                            navigation={navigation}
                            openOption={() => openOption()}
                            title="자유게시판"
                        />
                        <Scroll
                            scrollEventThrottle={16}
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={onRefresh}
                                />
                            }
                        >
                            <Wrapper>
                                <PostCard data={data}/>
                                <CommentNumText>댓글 {commentNum}</CommentNumText>
                                <CommentCard>
                                    {comment.map((element, key) => (
                                        <PostComment data={element} key={key} comment={comment} setComment={setComment}
                                                     commentNum={commentNum}
                                                     setCommentNum={setCommentNum}></PostComment>
                                    ))}
                                </CommentCard>
                            </Wrapper>
                        </Scroll>
                        <KeyboardAvoidingView behavior={constants.isIos() ? "padding" : "height"}>
                            <KeyboardAvoidingViewWrapper>
                                <CommentTextInput
                                    value={writingReviewContent}
                                    onChangeText={(text) => setWritingReviewContent(text)}
                                    multiline={true}
                                    placeholder="   댓글을 입력해 주세요"
                                />
                                <SendButton onPress={() => {
                                    setWritingReviewContent("");
                                    Keyboard.dismiss();
                                    postComment();
                                }}>
                                    <SendImage source={SEND}/>
                                </SendButton>
                            </KeyboardAvoidingViewWrapper>
                        </KeyboardAvoidingView>
                        <Menu
                            visible={isOptionOpen}
                            onDismiss={() => closeOption()}
                            anchor={{x: constants.vw(100), y: constants.vh(6.3) + constants.statusBarHeight}}>
                            {
                                data.authorEmail === myEmail && <Menu.Item onPress={() => {
                                    closeOption();
                                    navigation.navigate("PostWrite", {isModify: true, data: data})
                                }} title="수정"/>
                            }
                            {
                                data.authorEmail === myEmail && <Menu.Item onPress={() => {
                                    deletePost(postId);
                                    navigation.goBack();
                                }} title="삭제" titleStyle={{color: Theme.hlRed}}/>
                            }
                            <Divider/>
                            <Menu.Item onPress={() => {
                                makeReport();
                                closeOption();
                            }} title="신고" titleStyle={{color: Theme.hlRed}}/>
                        </Menu>
                    </>
                ) : (
                    <EmptyScreenCenterView>
                        <ActivityIndicator
                            animating={true}
                            size="large"
                            color={Theme.hlOrange}
                        />
                    </EmptyScreenCenterView>
                )}
            </Screen>
        </Provider>
    );
};

const RefreshControl = styled.RefreshControl``;

const SendButton = styled.TouchableOpacity`
  width: ${constants.vw(10)}px;
  height: ${constants.vw(10)}px;
  justify-content: center;
  align-items: center;
  margin-left: ${constants.vw(2.5)}px;
`;

const SendImage = styled.Image`
  width: ${constants.vw(7)}px;
  height: ${constants.vw(7)}px;
`;

const CommentTextInput = styled.TextInput`
  width: ${constants.vw(82)}px;
  height: ${constants.vh(4.3)}px;
  background-color: ${(props) => props.theme.borderGray2};
  border-radius: ${constants.vh(1)}px;
  padding: ${constants.vh(1.2)}px ${constants.vw(3)}px;
`;

const KeyboardAvoidingViewWrapper = styled.View`
  width: ${constants.vw(100)}px;
  flex-direction: row;
  justify-content: center;
  padding-bottom: ${constants.vh(0.5)}px;
`

const CommentCard = styled.View`
  width: 100%;
  background-color: ${(props) => props.theme.backgroundWhite};
  padding-left: 5%;
  padding-bottom: ${constants.vh(5)}px;
`;

const CommentNumText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  background-color: ${(props) => props.theme.backgroundGray};
  height: ${constants.vh(4)}px;
  margin-left: 5%;
  line-height: ${constants.vh(4)}px;
`;


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
`;


export default Post;
