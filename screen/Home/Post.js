import React, {useState, useEffect, useRef} from "react";
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
import * as ImagePicker from "expo-image-picker";
import {TMP,SEND} from "../../image"
import PostCard from "../../components/Home/PostList/PostCard"
import PostComment from "../../components/Home/PostList/PostComment"
import {Keyboard} from "react-native";

const Dummy = [TMP,TMP,TMP,TMP];

const Dummy2 = [
    {Title : "[전대 후문]김해뒷고기 후기", ID : "asdasdasdasfasdff", visitNum: 30, recommendNum : 2, date : "10.26"},
    {Title : "[전대 후문]김해뒷고기 후기", ID : "asdf", visitNum: 30, recommendNum : 2, date : "10.26"},
];


const Post = ({route, navigation}) => {
    const {name: myName, picture: myPicture, email: myEmail} = useProfile();
    const postId = route.params.postId;
    const optionPanelRef = useRef();
    const [data, setData] = useState();
    const [isStartScroll, setIsStartScroll] = useState(false);
    const [isPostStep, setIsPostStep] = useState(true);
    const [writingReviewContent, setWritingReviewContent] = useState("");


    const openOptionPanel = () => {
        optionPanelRef.current.open();
    };

    const closeOptionPanel = () => {
        optionPanelRef.current.close();
    };

    return (
        <Screen>
            {!data ? (
                <>
                    <Header
                        route={route}
                        navigation={navigation}
                        openOptionPanel={openOptionPanel}
                        title="자유게시판 상세"
                    />
                    <Scroll
                        alwaysBounceVertical={false}
                        scrollEventThrottle={16}
                    >
                        <Wrapper>
                            <PostCard data={postId} image={Dummy} />
                            <CommentNumText>댓글 </CommentNumText>
                            <CommentCard>
                                {Dummy2.map((element, key) => (
                                    <PostComment data = {element} key={key}></PostComment>
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
                            setWritingReviewContent("댓글을 입력해 주세요");
                            Keyboard.dismiss();
                        }}>
                            <SendImage source={SEND}/>
                        </SendButton>
                    </KeyboardAvoidingView>
                    <RBSheet ref={optionPanelRef}
                             customStyles={{container: {borderRadius: constants.vw(3), height: constants.isIos() ? constants.vh(90) : constants.vh(85)}}}
                             keyboardAvoidingViewEnabled={false}>
                        <OptionPanel>
                            <Buttons>
                                {postId.ID !== myEmail ? <Button>
                                    <ButtonText>수 정 하 기</ButtonText>
                                </Button> : <></>
                                }
                                {postId.ID !== myEmail ? <Button>
                                    <ButtonText>삭 제 하 기</ButtonText>
                                </Button> : <></>
                                }
                                <Button>
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

const ButtonText = styled.Text`
  ${(props) => props.theme.NanumSquareBFont}
  font-size: ${constants.vh(5)}px;
  line-height : ${constants.vh(5)}px;
  width : ${constants.vw(100)}px;
 ${(props) => (props.last ? "color : red" : "")};
  text-align : center;
`;

const CancelButton = styled.TouchableOpacity``;

const Button = styled.TouchableOpacity`
  margin-bottom: ${constants.vh(3)}px;
`;


const Buttons =styled.View`
  margin-top : ${constants.vh(4)}px;
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
