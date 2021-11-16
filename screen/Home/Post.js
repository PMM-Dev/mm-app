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
import {TMP} from "../../image"

const Dummy = [TMP,TMP,TMP,TMP];

const Post = ({route, navigation}) => {
    const {name: myName, picture: myPicture, email: myEmail} = useProfile();
    const postId = route.params.postId;
    const reviewWritingPanelRef = useRef();
    const [data, setData] = useState();
    const [isStartScroll, setIsStartScroll] = useState(false);
    const [reviewNum, setReviewNum] = useState();
    const [isPostStep, setIsPostStep] = useState(true);
    const [writingReviewGrade, setWritingReviewGrade] = useState(0);
    const [writingReviewContent, setWritingReviewContent] = useState("");

    return (
        <Screen>
            {!data ? (
                <>
                    <Header
                        route={route}
                        navigation={navigation}
                        title="자유게시판 상세"
                    />
                    <Scroll
                        alwaysBounceVertical={false}
                        scrollEventThrottle={16}
                    >
                        <Wrapper>
                            <PostCard>
                                <PostContent >
                                    <PostCardTitle>{postId.Title}</PostCardTitle>
                                    <PostCardExplanation>
                                        <PostCardExplanationText>{postId.ID} | 조회수 : {postId.visitNum} | 추천 : {postId.recommendNum}</PostCardExplanationText>
                                        <PostCardExplanationDate>{postId.date}</PostCardExplanationDate>
                                    </PostCardExplanation>
                                </PostContent>
                            </PostCard>
                            <ImageWrapper>
                                {Dummy.map((element, key) => (
                                    <PostImage source={element} key = {key}/>
                                ))}</ImageWrapper>
                        </Wrapper>
                    </Scroll>
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

const ImageWrapper = styled.View`
  background-color: ${(props) => props.theme.backgroundWhite};
  padding-top: ${constants.vh(2)}px;
`;


const PostImage = styled.Image`
  width: ${constants.vw(50)}px;
  height: ${constants.vw(50)}px;
  margin-left: 5%;
  margin-top:${constants.vh(1)}px ;
`;

const PostCardExplanationDate = styled.Text`
  ${(props) => props.theme.NanumGothicBoldFont};
  font-size: ${constants.vw(2.5)}px;
`;

const PostCardExplanationText = styled.Text`
  ${(props) => props.theme.NanumGothicBoldFont};
  font-size: ${constants.vw(2.5)}px;
  width : 90%;
`;

const PostCardExplanation = styled.View`
  flex-direction: row;
`;

const PostCardTitle = styled.Text`
  ${(props) => props.theme.NanumGothicBoldFont};
  font-size: ${constants.vw(4)}px;
  margin-bottom: ${constants.vh(2)}px;
`;

const PostContent = styled.View`
  margin-top: ${constants.vh(1)}px; 
  width : 90%;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundWhite};
`

const PostCard = styled.View`
  height : ${constants.vh(7)}px;
  width : 100%;
  margin-top: ${constants.vh(1)}px; 
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundWhite};
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
  background-color: ${(props) => props.theme.backgroundWhite};
  background-color: ${(props) => props.theme.backgroundGray};
`;


export default Post;
