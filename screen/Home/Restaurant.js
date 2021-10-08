import React, {useState, useEffect, useRef} from "react";
import {useProfile} from "../../components/AuthContext";
import styled from "styled-components";
import {ActivityIndicator} from "react-native-paper";
import constants from "../../constants";
import Theme from "../../style/Theme";
import {
    deleteMyReviewByRestaurantId,
    getRestaurantsById,
    uploadReview,
} from "../../components/Api/AppRestaurantApi";
import RBSheet from "react-native-raw-bottom-sheet";
import RestaurantInfoView from "../../components/Home/Restaurant/RestaurantInfoView";
import RestaurantReviewView from "../../components/Home/Restaurant/RestaurantReviewView";
import Header from "../../components/Header/Header";
import TouchableStarMaker from "../../components/TouchableStarMaker";
import EmptyScreenCenterView from "../../components/EmptyScreenCenterView";
import * as ImagePicker from "expo-image-picker";

const Restaurant = ({route, navigation}) => {
    const restaurantId = route.params.restaurantId;
    const {name: myName, picture: myPicture} = useProfile();
    const reviewWritingPanelRef = useRef();

    const [data, setData] = useState();
    const [isStartScroll, setIsStartScroll] = useState(false);

    const [likeNum, setLikeNum] = useState();
    const [reviewNum, setReviewNum] = useState();
    const [myReview, setMyReview] = useState();
    const [isPostStep, setIsPostStep] = useState(true);
    const [writingReviewGrade, setWritingReviewGrade] = useState(0);
    const [writingReviewContent, setWritingReviewContent] = useState("");

    useEffect(() => {
        async function getRestaurantData() {
            const restaurantData = await getRestaurantsById(restaurantId);
            setData(restaurantData);
        }

        getRestaurantData();
    }, []);

    useEffect(() => {
        if (data) {
            setLikeNum(data.likeCount);
            setReviewNum(data.reviewCount);
        }
    }, [data]);

    const handleScrollState = (event) => {
        if (event.nativeEvent.contentOffset.y > 1) {
            setIsStartScroll(true);
        } else {
            setIsStartScroll(false);
        }
    };

    const openReviewWritingPanel = () => {
        reviewWritingPanelRef.current.open();
    };

    const closeReviewWritingPanel = () => {
        reviewWritingPanelRef.current.close();
    };

    const openPanelToPostReview = () => {
        openReviewWritingPanel();
        setIsPostStep(true);

        setWritingReviewGrade(0);
        setWritingReviewContent("");
    }

    const openPanelToModifyReview = () => {
        openReviewWritingPanel();
        setIsPostStep(false);

        setWritingReviewGrade(myReview.grade);
        setWritingReviewContent(myReview.description);
    }

    const postReview = async () => {
        let result;
        if (isPostStep)
            result = await requestPostingReview();
        else
            // result = await requestPostingReview();
        if (!result) {
            return;
        }

        data.averageGrade = (data.averageGrade * reviewNum + writingReviewGrade) / (reviewNum + 1);
        setReviewNum((prev) => prev + 1);
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const createdDate = `${year}-${month >= 10 ? month : '0' + month}-${day >= 10 ? day : '0' + day} ${hours >= 10 ? hours : '0' + hours}:${minutes >= 10 ? minutes : '0' + minutes}`;
        setMyReview({
            "authorName": myName,
            "authorPicture": myPicture,
            "createdDate": createdDate,
            "description": writingReviewContent,
            "grade": writingReviewGrade
        })
    }

    const requestPostingReview = async () => {
        const response = await uploadReview(
            writingReviewContent,
            writingReviewGrade,
            restaurantId
        );
        if (response === undefined) {
            alert("리뷰 작성에 실패했습니다.");
            return false;
        }

        closeReviewWritingPanel();
        return true;
    };

    const deleteMyReview = async () => {
        const result = await requestDeleteMyReview();
        if (!result) {
            return;
        }

        if (reviewNum === 1) {
            data.averageGrade = 0;
            setReviewNum(0);
        } else {
            data.averageGrade = (data.averageGrade * reviewNum - writingReviewGrade) / (reviewNum - 1);
            setReviewNum((prev) => prev - 1);
        }
        setMyReview();
    }

    const requestDeleteMyReview = async () => {
        const response = await deleteMyReviewByRestaurantId(restaurantId);
        if (!response) {
            alert("리뷰 삭제를 실패하였습니다.")
            return false;
        }

        return true;
    }

    // const [firstImage, setFirstImage] = useState(null);
    // const [secondImage, setSecondImage] = useState(null);
    // const pickImage = async () => {
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //         allowsEditing: true,
    //         aspect: [4, 3],
    //         quality: 1,
    //     });
    //
    //     if (!result.cancelled) {
    //         setSecondImage(firstImage);
    //         setFirstImage(result.uri);
    //     }
    // };

    return (
        <Screen>
            {data ? (
                <>
                    <Header
                        route={route}
                        navigation={navigation}
                        title={data.name}
                        isTitleShown={isStartScroll}
                        restaurantId={restaurantId}
                        isLikeButtonPressed={data.didLike}
                        setLikeNum={setLikeNum}
                    />
                    <Scroll
                        alwaysBounceVertical={false}
                        onScroll={handleScrollState}
                        scrollEventThrottle={16}
                    >
                        <Wrapper>
                            <RestaurantInfoView
                                data={data}
                                reviewNum={reviewNum}
                                likeNum={likeNum}
                            />
                            <RestaurantReviewView
                                restaurantId={restaurantId}
                                myName={myName}
                                reviewCount={reviewNum}
                                myReview={myReview}
                                setMyReview={setMyReview}
                                openPanelToWriteReview={openPanelToPostReview}
                                openPanelToModifyReview={openPanelToModifyReview}
                                deleteMyReview={deleteMyReview}
                            />
                        </Wrapper>
                    </Scroll>
                    <RBSheet
                        ref={reviewWritingPanelRef}
                        height={constants.vh(93)}
                        customStyles={{container: {borderRadius: constants.vw(3)}}}
                    >
                        <ReviewWritingPanel>
                            <TopMenusHolder>
                                <TopButton onPress={closeReviewWritingPanel}>
                                    <TopButtonText>취소</TopButtonText>
                                </TopButton>
                                <PanelTitle>리뷰 작성하기</PanelTitle>
                                <TopButton onPress={postReview} disabled={writingReviewGrade === 0 || writingReviewContent === ""}>
                                    <TopButtonText disabled={writingReviewGrade === 0 || writingReviewContent === ""}>보내기</TopButtonText>
                                </TopButton>
                            </TopMenusHolder>
                            <TouchableStarMakerHolder>
                                <TouchableStarMaker
                                    grade={writingReviewGrade}
                                    setGrade={setWritingReviewGrade}
                                    size={45}
                                    iconSizeRatio={80}
                                />
                            </TouchableStarMakerHolder>
                            <ReviewTextInput
                                value={writingReviewContent}
                                onChangeText={(text) => setWritingReviewContent(text)}
                                multiline={true}
                            />
                            {/*<TextInput*/}
                            {/*  value={writingReviewContent}*/}
                            {/*  selectionColor={Theme.fontBlue}*/}
                            {/*  outlineColor={Theme.fontBlue}*/}
                            {/*  multiline={true}*/}
                            {/*  onChangeText={(text) => setWritingReviewContent(text)}*/}
                            {/*  style={{*/}
                            {/*    width: "100%",*/}
                            {/*    height: constants.vh(50),*/}
                            {/*    backgroundColor: Theme.backgroundGray,*/}
                            {/*    alignItems: "flex-start",*/}
                            {/*  }}*/}
                            {/*  right={<TextInput.Affix tex={"/100"} />}*/}
                            {/*/>*/}
                            {/*<PicturesView>*/}
                            {/*    <UploadPictureButton onPress={pickImage}>*/}
                            {/*        <UploadPictureIcon*/}
                            {/*            source={RESTAURANT_ICON_IMAGE}*/}
                            {/*            style={{ tintColor: Theme.fontBlack }}*/}
                            {/*        />*/}
                            {/*    </UploadPictureButton>*/}
                            {/*    <UploadedPictureHolder>*/}
                            {/*        <UploadedPicture source={{ uri: firstImage }} />*/}
                            {/*    </UploadedPictureHolder>*/}
                            {/*    <UploadedPictureHolder>*/}
                            {/*        <UploadedPicture source={{ uri: secondImage }} />*/}
                            {/*    </UploadedPictureHolder>*/}
                            {/*</PicturesView>*/}
                        </ReviewWritingPanel>
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

const ReviewWritingPanel = styled.View`
  width: 100%;
  height: 100%;
  padding: 5% 5%;
  align-items: center;
`;

const TopMenusHolder = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 7%;
`;

const TopButton = styled.Pressable``;

const TopButtonText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  font-size: ${constants.vw(4)}px;
  color: ${(props) => props.disabled ? props.theme.fontBlackGray : props.theme.fontBlue};
`;

const ReviewTextInput = styled.TextInput`
  width: 100%;
  height: 100%;
  text-align-vertical: top;
  padding: 5% 5%;
`;

const PanelTitle = styled.Text`
  ${(props) => props.theme.NanumSquareBFont}
  font-size: ${constants.vw(4.5)}px;
`;

const TouchableStarMakerHolder = styled.View`
  width: 95%;
  align-items: center;
  padding-bottom: 3%;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.backgroundDarkerGray};
`;

// const PicturesView = styled.View`
//   flex-direction: row;
// `;
//
// const UploadPictureButton = styled.TouchableOpacity`
//   width: ${constants.vw(25)}px;
//   height: ${constants.vw(25)}px;
//   border-radius: ${constants.vw(2)}px;
//   border-width: 3px;
//   border-color: ${(props) => props.theme.fontBlack};
//
//   justify-content: center;
//   align-items: center;
// `;
//
// const UploadPictureIcon = styled.Image`
//   width: ${constants.vw(10)}px;
//   height: ${constants.vw(10)}px;
// `;
//
// const UploadedPictureHolder = styled.View`
//   width: ${constants.vw(25)}px;
//   height: ${constants.vw(25)}px;
//   border-radius: ${constants.vw(2)}px;
//   border-width: 3px;
//   border-color: ${(props) => props.theme.backgroundDarkerGray};
//
//   margin-left: ${constants.vw(3)}px;
// `;
//
// const UploadedPicture = styled.Image`
//   width: 100%;
//   height: 100%;
//   border-radius: ${constants.vw(2)}px;
// `;

export default Restaurant;
