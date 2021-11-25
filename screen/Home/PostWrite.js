import React, {useState, useEffect, useRef} from "react";
import {useProfile} from "../../components/AuthContext";
import styled from "styled-components";
import constants from "../../constants";
import Header from "../../components/Header/Header";
import {TMP, SHARE_BT, LIKE_BT, SETTING_GUEST_PORTRAIT, IMG_ICON} from "../../image"
import {Keyboard} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Image } from "react-native";
import {TRASH} from "../../image";
import {getPostImageFileName, postPost, putPost} from "../../components/Api/AppPostApi";
import ResponseStatusEnum from "../../ResponseStatusEnum";
import { API_URL } from "@env";

const PostWrite = ({route, navigation}) => {
    const {name: myName, picture: myPicture, email: myEmail} = useProfile();
    const [writingReviewContent, setWritingReviewContent] = useState("");
    const [writingReviewContentTitle, setWritingReviewContentTitle] = useState("");
    const [ImageList, setImageList] = useState("");
    const [selectImage, setSelectImage] = useState(null);
    const [formData, setFormData] = useState([]);
    const [isModify, setIsModify] = useState(route.params.isModify);
    const [toModifyData, setToModifyData] = useState(route.params.data);

    useEffect(() => {
        if(isModify)
        {
            setWritingReviewContent(toModifyData.content);
            setWritingReviewContentTitle(toModifyData.title);
            let beforeImageList = [];
            [...Array(toModifyData.imagesCount)].map((num, key) =>
                {beforeImageList.push(`${API_URL}/image/post/${toModifyData.id}/${key}`)}
            );
            setImageList(beforeImageList);
        }
    }, []);

    const openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync({allowsEditing: true, quality : 1,});

        if (pickerResult.cancelled === true) {
            return;
        }

        setSelectImage(pickerResult.uri);
        const newImageList = [...ImageList, pickerResult.uri];
        setImageList(newImageList);
    };

    const deleteImage = (index) => {
        const num = ImageList.length - index - 1;
        const newImageList = ImageList.slice(0, num).concat(ImageList.slice(num+1, ImageList.length))
        setImageList(newImageList);
    };

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

    const writePost = async () => {
        const newformData = new FormData();
        newformData.append('title', writingReviewContentTitle);
        newformData.append('content',writingReviewContent );

        if (ImageList.length !== 0)
        {
            ImageList.map(async (element, key)=>{
                if(element.slice(0,4) === "http")
                {
                    const{data, status} = await getPostImageFileName(toModifyData.id, key);

                    const type = `image/${data.split('.').pop()}`;
                    console.log(data);
                    console.log(type);
                    console.log(element);

                    newformData.append('images', { uri: element, name: data, type });
                }
                else
                {
                    const localUri = element;
                    const filename = localUri.split('/').pop();

                    const match = /\.(\w+)$/.exec(filename);
                    const type = match ? `image/${match[1]}` : `image`;
                    const extension = getExtention(type);
                    const extendFileName = filename.replace(`${match[0]}`,`${extension}`);
                    newformData.append('images', { uri: localUri, name: extendFileName, type });
                }

            })
        }
        setFormData(newformData);

        if(isModify)
        {
            const {data,status} = putPost(toModifyData.id, newformData);
            if (status >= ResponseStatusEnum.BAD_REQUEST) {
                return;
            }
        }
        else
        {
            const {data,status} = postPost(newformData);
            if (status >= ResponseStatusEnum.BAD_REQUEST) {
                return;
            }
        }
    };

    return (
        <Screen>
            <Header
                route={route}
                navigation={navigation}
                title="게시물 작성"
            />
            <Scroll>
                <Content>
                    <SendButtonPos>
                        <SendTextButton onPress={() => {
                            writePost();
                            navigation.goBack();
                            navigation.goBack();
                        }}>
                            {isModify ? <SendText>수정하기</SendText> : <SendText>작성하기</SendText>}
                        </SendTextButton>
                    </SendButtonPos>
                    <ReviewTextTitleInput
                        value={writingReviewContentTitle}
                        onChangeText={(text) => setWritingReviewContentTitle(text)}
                        multiline={true}
                        placeholder="제목"
                    ></ReviewTextTitleInput>
                    <ReviewTextInput
                        value={writingReviewContent}
                        onChangeText={(text) => setWritingReviewContent(text)}
                        multiline={true}
                        placeholder="내용"
                    ></ReviewTextInput>
                    <AddPicture onPress={()=>{Keyboard.dismiss();
                        openImagePickerAsync();}}>
                        <AddPictureText>+</AddPictureText>
                    </AddPicture>
                    <ImageListView>
                        {ImageList.length !== 0 ? ImageList.slice(0).reverse().map((element,index)=>
                            <ImageView  key = {index}>
                                <AddedImage source={{uri: element }}/>
                                <DelButton onPress={()=>{deleteImage(index)}}>
                                    <DelButtonImage source={TRASH}></DelButtonImage>
                                </DelButton>
                            </ImageView>
                            
                        ) : <></>}
                    </ImageListView>
                </Content>
            </Scroll>
        </Screen>
    );
};

const SendButtonPos = styled.View`
  width : 90%;
  height :${constants.vw(3)}px;
`;

const SendTextButton = styled.TouchableOpacity`
    position: absolute;
    right : 0px;
`;

const SendText = styled.Text`
  ${(props) => props.theme.NanumGothicBoldFont};
  font-size: ${constants.vw(4)}px;
  margin-bottom: ${constants.vw(2)}px;
`;

const TestButton = styled.TouchableOpacity`
  width :${constants.vw(3)}px;
  height :${constants.vw(3)}px;
  background-color: red;
`

const ImageView = styled.View`
  flex-direction: row;
  align-items: center;
`

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
  width :${constants.vh(30)}px;
  height :${constants.vh(15)}px;
  resize-mode : contain;
  margin-top : ${constants.vh(1)}px;
`

const ImageListView = styled.View`
  margin-top : ${constants.vh(2)}px;
  width: 90%;
  align-items: center;
  padding-bottom :${constants.vh(2)}px;
`

const AddPictureText = styled.Text`
  ${(props) => props.theme.NanumGothicBoldFont};
  font-size: ${constants.vh(5)}px;
  line-height: ${constants.vh(10)}px;
  text-align: center;
`

const AddPicture = styled.TouchableOpacity`
  width :${constants.vw(30)}px;
  height :${constants.vh(10)}px;
  border : 1px;
  margin-top : ${constants.vh(2)}px;
`

const ReviewTextTitleInput = styled.TextInput`
  width: 90%;
  height: ${constants.vh(8)}px;
  text-align-vertical: top;
  font-size: ${constants.vh(1.75)}px;
  padding: 5% 5%;
  border : 1px;
  border-color : ${(props) => props.theme.borderGray};
  margin-top : ${constants.vh(2)}px;
`;

const ReviewTextInput = styled.TextInput`
  width: 90%;
  height: ${constants.vh(30)}px;
  text-align-vertical: top;
  font-size: ${constants.vh(1.75)}px;
  padding: 5% 5%;
  border : 1px;
  border-color : ${(props) => props.theme.borderGray};
`;

const Scroll = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

const Content = styled.View`
  width : 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Screen = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.backgroundWhite};
`;


export default PostWrite;
