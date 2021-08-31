import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {TextInput} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import Header from "../../components/Header/Header";
import Theme from "../../style/Theme";
import constants from "../../constants";
import {RESTAURANT_ICON_IMAGE} from "../../image";
import StarMaker from "../../components/Map/StarMaker";
import * as ImagePicker from 'expo-image-picker';
import {postReview} from "../../components/Api/AppRestaurantApi";

const WriteReview = ({route, navigation}) => {
    const email = route.params.email;
    const restaurantId = route.params.restaurantId;
    const restaurantName = route.params.restaurantName;


    const [grade, setGrade] = useState(0);
    const [content, setContent] = useState("");
    const [firstImage, setFirstImage] = useState(null);
    const [secondImage, setSecondImage] = useState(null);

    useEffect(() => {
        async function askMediaLibraryPermission() {
            const {accessPrivileges} = await ImagePicker.getMediaLibraryPermissionsAsync();
            if (accessPrivileges !== "none") {
                return;
            }

            const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('갤러리 권한이 없으면 사진을 올릴 수 없습니다!');
            }
        }

        askMediaLibraryPermission();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setSecondImage(firstImage);
            setFirstImage(result.uri);
        }
    };

    const post = async () => {
        console.log(content);
        console.log(grade);
        const response = await postReview(email, content, grade, restaurantId);
        if (response === undefined) {
            alert("리뷰 작성에 실패했습니다.")
        }
    }

    return (
        <Screen>
            <Header route={route} navigation={navigation} title={"리뷰 작성"} onPressRightButton={post}/>
            <Page>
                <RestaurantTitleText>{restaurantName}</RestaurantTitleText>
                <TextInput
                    mode="outlined"
                    value={content}
                    selectionColor={Theme.fontBlue}
                    outlineColor={Theme.fontBlue}
                    multiline={true}
                    onChangeText={text => setContent(text)}
                    style={{
                        width: constants.vw(80),
                        height: constants.vh(30),
                        backgroundColor: Theme.backgroundWhite,
                        marginBottom: constants.vh(2)
                    }}
                    right={<TextInput.Affix tex={"/100"}/>}
                />
                {
                    constants.platform === "iOS" ? (
                        <>
                            <StarMaker grade={grade}/>
                            <IosPicker>
                                <Picker
                                    selectedValue={grade}
                                    onValueChange={(value) =>
                                        setGrade(value)
                                    }
                                    style={{width: constants.vw(100)}}
                                >
                                    <Picker.Item label="⭐ 0.0" value={0.0}/>
                                    <Picker.Item label="⭐ 0.5" value={0.5}/>
                                    <Picker.Item label="⭐ 1.0" value={1.0}/>
                                    <Picker.Item label="⭐ 1.5" value={1.5}/>
                                    <Picker.Item label="⭐ 2.0" value={2.0}/>
                                    <Picker.Item label="⭐ 2.5" value={2.5}/>
                                    <Picker.Item label="⭐ 3.0" value={3.0}/>
                                    <Picker.Item label="⭐ 3.5" value={3.5}/>
                                    <Picker.Item label="⭐ 4.0" value={4.0}/>
                                    <Picker.Item label="⭐ 4.5" value={4.5}/>
                                    <Picker.Item label="⭐ 5.0" value={5.0}/>
                                </Picker>
                            </IosPicker>
                        </>
                    ) : (
                        <AndroidPicker>
                            <StarMaker grade={grade}/>
                            <Picker
                                selectedValue={grade}
                                onValueChange={(value) =>
                                    setGrade(value)
                                }
                                style={{
                                    position: "absolute",
                                    width: constants.vw(40),
                                    height: constants.vw(8),
                                    opacity: 0
                                }}
                            >
                                <Picker.Item label="⭐ 0.0" value="0.0"/>
                                <Picker.Item label="⭐ 0.5" value="0.5"/>
                                <Picker.Item label="⭐ 1.0" value="1.0"/>
                                <Picker.Item label="⭐ 1.5" value="1.5"/>
                                <Picker.Item label="⭐ 2.0" value="2.0"/>
                                <Picker.Item label="⭐ 2.5" value="2.5"/>
                                <Picker.Item label="⭐ 3.0" value="3.0"/>
                                <Picker.Item label="⭐ 3.5" value="3.5"/>
                                <Picker.Item label="⭐ 4.0" value="4.0"/>
                                <Picker.Item label="⭐ 4.5" value="4.5"/>
                                <Picker.Item label="⭐ 5.0" value="5.0"/>
                            </Picker>
                        </AndroidPicker>
                    )
                }
                <PicturesView>
                    <UploadPictureButton onPress={pickImage}>
                        <UploadPictureIcon source={RESTAURANT_ICON_IMAGE} style={{tintColor: Theme.fontBlack}}/>
                    </UploadPictureButton>
                    <UploadedPictureHolder>
                        <UploadedPicture source={{uri: firstImage}}/>
                    </UploadedPictureHolder>
                    <UploadedPictureHolder>
                        <UploadedPicture source={{uri: secondImage}} />
                    </UploadedPictureHolder>
                </PicturesView>
            </Page>
        </Screen>
    );
};

const Screen = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.backgroundWhite};
`;

const Page = styled.View`
  width: 100%;
  height: ${constants.pureheight}px;
  align-items: center;
  padding: ${constants.vh(1.3)}px 0px;
`

const RestaurantTitleText = styled.Text`
  ${(props) => props.theme.NanumSquareEBFont};
  color: ${(props) => props.theme.fontBlack};
  font-size: ${constants.vh(3)}px;
  margin-bottom: ${constants.vh(1)}px;
`

const IosPicker = styled.View`
  width: ${constants.vw(100)}px;
  height: ${constants.vw(35)}px;
  margin-bottom: ${constants.vw(15)}px;
`

const AndroidPicker = styled.View`
  width: ${constants.vw(40)}px;
  height: ${constants.vw(8)}px;
  align-items: center;
  margin-bottom: ${constants.vw(5)}px;
`

const PicturesView = styled.View`
  flex-direction: row;
`

const UploadPictureButton = styled.TouchableOpacity`
  width: ${constants.vw(25)}px;
  height: ${constants.vw(25)}px;
  border-radius: ${constants.vw(2)}px;
  border-width: 3px;
  border-color: ${(props) => props.theme.fontBlack};

  justify-content: center;
  align-items: center;
`

const UploadPictureIcon = styled.Image`
  width: ${constants.vw(10)}px;
  height: ${constants.vw(10)}px;

`

const UploadedPictureHolder = styled.View`
  width: ${constants.vw(25)}px;
  height: ${constants.vw(25)}px;
  border-radius: ${constants.vw(2)}px;
  border-width: 3px;
  border-color: ${(props) => props.theme.backgroundDarkerGray};

  margin-left: ${constants.vw(3)}px;
`

const UploadedPicture = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: ${constants.vw(2)}px;
`
export default WriteReview;