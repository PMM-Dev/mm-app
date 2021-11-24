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
import {postPost} from "../../components/Api/AppPostApi";

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
            //Image Select
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

    //console.log(formData);
    const writePost = () => {
        const newformData = new FormData();
        newformData.append('title', writingReviewContentTitle);
        newformData.append('content',writingReviewContent );


        if (ImageList.length !== 0)
        {
            ImageList.map((element)=>{
                const localUri = element;
                const filename = localUri.split('/').pop();

                const match = /\.(\w+)$/.exec(filename);
                const type = match ? `image/${match[1]}` : `image`;
                newformData.append('images', { uri: localUri, name: filename, type });
            })
        }
        console.log(newformData);

        setFormData(newformData)

        const {data,status} = postPost(newformData);
        console.log(status);
    }

    return (
        <Screen>
            <Header
                route={route}
                navigation={navigation}
                title="게시물 작성"
                isModify={isModify}
            />
            <Scroll>
                <Content>
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
                    <TestButton onPress={()=>{writePost();}}></TestButton>
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
