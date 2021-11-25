import React, {useState, useEffect, useRef, useCallback} from "react";
import {useProfile} from "../../components/AuthContext";
import styled from "styled-components";
import {ActivityIndicator} from "react-native-paper";
import constants from "../../constants";
import Theme from "../../style/Theme";
import RBSheet from "react-native-raw-bottom-sheet";
import Header from "../../components/Header/Header";
import TouchableStarMaker from "../../components/TouchableStarMaker";
import EmptyScreenCenterView from "../../components/EmptyScreenCenterView";
import ResponseStatusEnum from "../../ResponseStatusEnum";
import {TMP,SEND} from "../../image"
import PostCard from "../../components/Home/PostList/PostCard"
import PostComment from "../../components/Home/PostList/PostComment"
import {Keyboard} from "react-native";
import {
    deletePost,
    getPostById,
    getPostComment,
    getpostComment,
    getPostPreview,
    postReport
} from "../../components/Api/AppPostApi";
import {getLatestNotice} from "../../components/Api/AppNotice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getLatestFeedbackPreview, postFeedback} from "../../components/Api/AppFeedbackApi";

const Post = ({route, navigation}) => {
    const {name: myName, picture: myPicture, email: myEmail} = useProfile();
    const postId = route.params.postId;
    const optionPanelRef = useRef();
    const [data, setData] = useState();
    const [writingReviewContent, setWritingReviewContent] = useState("");
    const [comment, setComment] = useState();
    const [commentNum, setCommentNum] = useState();
    const [refreshing, setRefreshing] = useState(false);

    //console.log(data);

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const makeReport = async() => {
        const {data, status} = await postReport(postId);
        if (status >= ResponseStatusEnum.BAD_REQUEST) {
            alert("신고에 실패했습니다.");
            return;
        }
        alert("신고에 되었습니다.");
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

    useEffect(()=>{
        postRequest();
    },[refreshing])

    const postComment = async () => {
        const {data, status} = await getpostComment(writingReviewContent,postId);
        if (status >= ResponseStatusEnum.BAD_REQUEST) {
            return;
        }
        triggerLocalFeedbackOfComment(data);
    }

    const triggerLocalFeedbackOfComment = (curId)=>{
        setCommentNum((prev) => prev + 1);
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const createdDate = `${year}-${month >= 10 ? month : '0' + month}-${day >= 10 ? day : '0' + day} ${hours >= 10 ? hours : '0' + hours}:${minutes >= 10 ? minutes : '0' + minutes}`;

        const newLocalComment = {
            "authorEmail" : myEmail,
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

    const openOptionPanel = () => {
        optionPanelRef.current.open();
    };

    const closeOptionPanel = () => {
        optionPanelRef.current.close();
    };
    return (
        <Screen>
            {data && comment ? (
                <>
                    <Header
                        route={route}
                        navigation={navigation}
                        openOptionPanel={openOptionPanel}
                        title="자유게시판"
                    />
                    <Scroll
                        alwaysBounceVertical={false}
                        scrollEventThrottle={16}
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                            />
                        }
                    >
                        <Wrapper>
                            <PostCard data={data} />
                            <CommentNumText>댓글 {commentNum}</CommentNumText>
                            <CommentCard>
                                {comment.map((element, key) => (
                                    <PostComment data = {element} key={key} comment={comment} setComment={setComment} commentNum={commentNum} setCommentNum={setCommentNum}></PostComment>
                                ))}
                            </CommentCard>
                        </Wrapper>
                    </Scroll>
                    <KeyboardAvoidingView>
                        <TextCommentHolder
                            value={writingReviewContent}
                            onChangeText={(text) => setWritingReviewContent(text)}
                            multiline={true}
                            placeholder="댓글을 입력해 주세요"
                        />
                        <SendButton onPress={()=>{
                            setWritingReviewContent("");
                            Keyboard.dismiss();
                            postComment();
                        }}>
                            <SendImage source={SEND}/>
                        </SendButton>
                    </KeyboardAvoidingView>
                    <RBSheet ref={optionPanelRef}
                             customStyles={{
                                 container:
                                     {borderRadius: constants.vw(3),
                                         height: data.authorName === myName ? constants.vh(25) : constants.vh(10)
                                     },
                             }}
                             animationType = "slide"
                             keyboardAvoidingViewEnabled={false}
                             closeOnDragDown={true}
                             minClosingHeight={0}
                    >
                        <OptionPanel>
                            <Buttons>
                                {data.authorName === myName ? <Button>
                                    <ButtonText onPress={()=>{
                                        closeOptionPanel();
                                        navigation.navigate("PostWrite",{isModify : true, data : data})}
                                    }>수 정 하 기</ButtonText>
                                </Button> : <></>
                                }
                                {data.authorName === myName ?
                                    <Button onPress={()=>{
                                    deletePost(postId);
                                    navigation.goBack();}}>
                                        <ButtonText>삭 제 하 기</ButtonText>
                                    </Button> : <></>
                                }
                                <Button onPress={()=>{
                                    makeReport();
                                    closeOptionPanel();
                                }}>
                                    <ButtonText last >신 고 하 기</ButtonText>
                                </Button>
                            </Buttons>
                        </OptionPanel>
                    </RBSheet>
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
    );
};

const RefreshControl = styled.RefreshControl``;

const ButtonText = styled.Text`
  ${(props) => props.theme.NanumSquareBFont}
  font-size: ${constants.vh(3)}px;
  line-height : ${constants.vh(3)}px;
  width : ${constants.vw(100)}px;
 ${(props) => (props.last ? "color : red" : "")};
  text-align : center;
  padding: ${constants.vh(2)}px 0;
  border-top-color: ${(props) => props.theme.borderGray};
  border-top-width : 1px;
  border-bottom-color: ${(props) => props.theme.borderGray};
  ${(props) => (props.last ? "border-bottom-width : 1px" : "")};
`;

const CancelButton = styled.TouchableOpacity``;

const Button = styled.TouchableOpacity`
`;

const Buttons =styled.View`
`;

const OptionPanel = styled.View`
  width : 100%;
  height : 100%;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundWhite};
`;


const SendButton = styled.TouchableOpacity`
  position : absolute;
  right:0px;
  margin-right : ${constants.vw(8)}px;
`;

const SendImage = styled.Image`
  width : ${constants.vh(3)}px;
  height : ${constants.vh(3)}px;
`;

const TextCommentHolder = styled.TextInput`
  width : 90%;
  height : ${constants.vh(4)}px; 
  background-color:  ${(props) => props.theme.borderGray2};
  border-radius: ${constants.vh(1)}px;
  padding-left: ${constants.vw(2)}px;;
`;

const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  width : 100%;
  height : ${constants.vh(7)}px;
  justify-content: center;
  align-items: center;
`;

const CommentCard = styled.View`
  width : 100%;
  background-color: ${(props) => props.theme.backgroundWhite};
  padding-left : 5%;
  padding-bottom:  ${constants.vh(5)}px;
`;

const CommentNumText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  background-color: ${(props) => props.theme.backgroundGray};
  height : ${constants.vh(4)}px;
  margin-left: 5%;
  line-height:${constants.vh(4)}px;
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
