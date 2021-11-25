import React, {useState, useEffect, useRef} from "react";
import {useProfile} from "../../components/AuthContext";
import styled from "styled-components";
import {ActivityIndicator} from "react-native-paper";
import constants from "../../constants";
import Theme from "../../style/Theme";
import {
    deleteMyReviewByRestaurantId,
    getRestaurantsById,
    uploadMyReviewByRestaurantId,
    updateMyReviewByRestaurantId, getRestaurantReviewImageFileName
} from "../../components/Api/AppRestaurantApi";
import RBSheet from "react-native-raw-bottom-sheet";
import RestaurantInfoView from "../../components/Home/Restaurant/RestaurantInfoView";
import RestaurantReviewView from "../../components/Home/Restaurant/RestaurantReviewView";
import Header from "../../components/Header/Header";
import TouchableStarMaker from "../../components/TouchableStarMaker";
import EmptyScreenCenterView from "../../components/EmptyScreenCenterView";
import ResponseStatusEnum from "../../ResponseStatusEnum";
import * as ImagePicker from "expo-image-picker";
import {Keyboard} from "react-native";
import {TRASH} from "../../image";
import { API_URL } from "@env";

const Restaurant = ({route, navigation}) => {
    const restaurantId = route.params.restaurantId;
    const {name: myName, picture: myPicture, email: myEmail} = useProfile();
    const reviewWritingPanelRef = useRef();

    const [data, setData] = useState();
    const [isStartScroll, setIsStartScroll] = useState(false);

    const [likeNum, setLikeNum] = useState();
    const [reviewNum, setReviewNum] = useState();
    const [myReview, setMyReview] = useState();
    const [isPostStep, setIsPostStep] = useState(true);
    const [writingReviewGrade, setWritingReviewGrade] = useState(0);
    const [writingReviewContent, setWritingReviewContent] = useState("");
    const [selectImage, setSelectImage] = useState(null);
    const [notPostStepImageModify, setNotPostStepImageModify] = useState(false);

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

    const getExtention = (mime) => {
        switch (mime) {
            case 'application/pdf':
                return '.pdf';
            case 'image/jpeg':
                return '.jpg';
            case 'image/jpg':
                return '.jpg';
            case 'image/png':
                return '.png';
            default:
                return '.jpg';
        }
    };

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
        setSelectImage(null);
        setWritingReviewGrade(0);
        setWritingReviewContent("");
    }

    const openPanelToModifyReview = () => {
        openReviewWritingPanel();
        setIsPostStep(false);
        setSelectImage(`${API_URL}/image/restaurant/review/${myReview.id}`);
        setWritingReviewGrade(myReview.grade);
        setWritingReviewContent(myReview.description);
    }

    const postReview = async () => {
        let result;
        if (isPostStep)
            result = await requestPostingReview();
        else
            result = await requestUpdateReview();
        if (!result) {
            return;
        }

        triggerLocalFeedbackOfPostingReview();
    }


    const triggerLocalFeedbackOfPostingReview = () => {
        data.averageGrade = (data.averageGrade * reviewNum + writingReviewGrade) / (reviewNum + 1);
        setReviewNum((prev) => prev + 1);
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const createdDate = `${year}-${month >= 10 ? month : '0' + month}-${day >= 10 ? day : '0' + day} ${hours >= 10 ? hours : '0' + hours}:${minutes >= 10 ? minutes : '0' + minutes}`;
        const existImage = selectImage !== null
        setMyReview({
            "authorName": myName,
            "authorEmail": myEmail,
            "authorPicture": myPicture,
            "createdDate": createdDate,
            "description": writingReviewContent,
            "grade": writingReviewGrade,
            "existImage" : existImage,
            "local" : true,
        })
    }
    const requestPostingReview = async () => {

        const newformData = new FormData();
        newformData.append('description', writingReviewContent);
        newformData.append('grade', writingReviewGrade);

        if (selectImage !== null) {
            const localUri = selectImage;
            const filename = localUri.split('/').pop();

            const match = /\.(\w+)$/.exec(filename);
            const type = match ? `image/${match[1]}` : `image`;
            const extension = getExtention(type);
            const extendFileName = filename.replace(`${match[0]}`, `${extension}`);

            newformData.append('image', {uri: localUri, name: extendFileName, type});
        }

        const {data, status} = await uploadMyReviewByRestaurantId(
            newformData, restaurantId
        );

        if (status === ResponseStatusEnum.NO_DATA) {
            alert("리뷰 작성에 실패했습니다.");
            return false;
        }

        closeReviewWritingPanel();
        return true;
    };


    const requestUpdateReview = async () => {
        const newformData = new FormData();
        newformData.append('description', writingReviewContent);
        newformData.append('grade', writingReviewGrade);

        if(selectImage !== null && notPostStepImageModify === true)
        {
            const localUri = selectImage;
            const filename = localUri.split('/').pop();

            const match = /\.(\w+)$/.exec(filename);
            const type = match ? `image/${match[1]}` : `image`;
            const extension = getExtention(type);
            const extendFileName = filename.replace(`${match[0]}`, `${extension}`);

            newformData.append('image', {uri: localUri, name: extendFileName, type});
        }
        else if(selectImage !== null && notPostStepImageModify === false)
        {
            const {data, status} = await getRestaurantReviewImageFileName(myReview.id);

            const type = `image/${data.split('.').pop()}`;

            newformData.append('image', { uri: selectImage, name: data, type });
        }

        const {data, status} = await updateMyReviewByRestaurantId(
            newformData, restaurantId
        );

        if (status === ResponseStatusEnum.NO_DATA) {
            alert("리뷰 작성에 실패했습니다.");
            return false;
        }

        closeReviewWritingPanel();
        return true;
    }


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
        const {data, status} = await deleteMyReviewByRestaurantId(restaurantId);
        if (status >= ResponseStatusEnum.BAD_REQUEST) {
            alert("리뷰 삭제를 실패하였습니다.")
            return false;
        }

        return true;
    }

    const deleteImage = () => {
        setSelectImage(null);
    };

    const openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync({allowsEditing: true, quality: 1,});

        if (pickerResult.cancelled === true) {
            return;
        }

        setSelectImage(pickerResult.uri);
    };

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
                                myEmail={myEmail}
                                reviewCount={reviewNum}
                                myReview={myReview}
                                setMyReview={setMyReview}
                                openPanelToWriteReview={openPanelToPostReview}
                                openPanelToModifyReview={openPanelToModifyReview}
                                deleteMyReview={deleteMyReview}
                                selectImage={selectImage}
                            />
                        </Wrapper>
                    </Scroll>


                    {/* Review Writing Panel */}
                    <RBSheet
                        ref={reviewWritingPanelRef}
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
                                <TopButton onPress={closeReviewWritingPanel}>
                                    <TopButtonText>취소</TopButtonText>
                                </TopButton>
                                <PanelTitle>리뷰 작성하기</PanelTitle>
                                <TopButton onPress={postReview}
                                           disabled={writingReviewGrade === 0 || writingReviewContent === ""}>
                                    <TopButtonText
                                        disabled={writingReviewGrade === 0 || writingReviewContent === ""}>보내기</TopButtonText>
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
                            <AddPicture onPress={()=>{Keyboard.dismiss();
                                openImagePickerAsync();
                                if(isPostStep === false)
                                    setNotPostStepImageModify(true);
                            }}>
                                <AddPictureText>+</AddPictureText>
                            </AddPicture>
                            {
                                selectImage !== null ?
                                    <ImageView onPress={()=>{Keyboard.dismiss();
                                        openImagePickerAsync();
                                    }}>
                                        <AddedImage source={{uri: selectImage }}/>
                                        <DelButton onPress={()=>{deleteImage()}}>
                                            <DelButtonImage source={TRASH}></DelButtonImage>
                                        </DelButton>
                                    </ImageView> : <></>
                            }
                            <ReviewTextInput
                                value={writingReviewContent}
                                onChangeText={(text) => setWritingReviewContent(text)}
                                multiline={true}
                                placeholder="리뷰 내용"
                            />
                        </ReviewWritingPanel>
                    </RBSheet>
                    {/* Review Writing Panel */}

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

const DelButton = styled.TouchableOpacity`
  width :${constants.vh(3)}px;
  height :${constants.vh(3)}px;
`

const DelButtonImage = styled.Image`
  resize-mode:contain;
  width :${constants.vh(3)}px;
  height :${constants.vh(3)}px;
  position : absolute;
  right : 0px;
`

const AddedImage = styled.Image`
  width: ${constants.vh(30)}px;
  height: ${constants.vh(15)}px;
  resize-mode: contain;
  margin-top: ${constants.vh(1)}px;
`

const ImageView = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`

const AddPictureText = styled.Text`
  ${(props) => props.theme.NanumSquareEBFont};
  font-size: ${constants.vh(5)}px;
  line-height: ${constants.vh(10)}px;
  text-align: center;
`

const AddPicture = styled.TouchableOpacity`
  width: ${constants.vw(30)}px;
  height: ${constants.vh(10)}px;
  border: 1px;
  margin-top: ${constants.vh(2)}px;
`


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
  font-size: ${constants.vh(1.75)}px;
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
