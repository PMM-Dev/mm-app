import React, {useEffect, useState} from "react";
import styled from "styled-components";
import constants from "../../constants";
import {ActivityIndicator} from "react-native-paper";
import Theme from "../../style/Theme";
import {useProfile} from "../../components/AuthContext";
import { SETTING_GUEST_PORTRAIT, SETTING_PENCIL_ICON } from "../../image";
import {getLatestNotice} from "../../components/Api/AppNotice";
import ResponseStatusEnum from "../../ResponseStatusEnum";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {postName} from "../../components/Api/AppMemberApi";

const Edit = ({route, navigation}) => {
    const { email, name, picture, role } = useProfile();
    const [info, setInfo] = useState(null);
    const [nameText, onChangenameText] = useState(name);

    const editComplete = () => {
        async function requestModifyName (name, picture) {
            const {data, status} = await postName(name, picture);

            if (status >= ResponseStatusEnum.BAD_REQUEST) {
                return;
            }
            if (status === ResponseStatusEnum.NO_DATA) {
                return;
            }
        }
        requestModifyName(nameText, picture);
    }

    return (
        <Page>
            <Header>
                <TitleHolder>
                    <Title>프로필 편집</Title>
                </TitleHolder>
                <CancelButton onPress={()=>{navigation.goBack()}}>
                    <CancelButtonText>취소</CancelButtonText>
                </CancelButton>
                <FinishButton onPress={()=>{editComplete();
                    navigation.goBack();}}>
                    <FinishButtonText>완료</FinishButtonText>
                </FinishButton>
            </Header>
            <Scroll>
                <Portrait>
                    <PortraitImage
                        source={
                            picture === undefined
                                ? SETTING_GUEST_PORTRAIT
                                : {
                                    uri: picture,
                                }
                        }
                        resizeMode={"cover"}
                    />
                </Portrait>
                <Info>
                    <InfoView>
                        <InfoViewText>이름</InfoViewText>
                        <InfoViewContentTextInput
                            onChangeText={onChangenameText}
                            value={nameText}
                            placeholder="입력해주세요"
                        />
                    </InfoView>
                    <InfoView>
                        <InfoViewText>이메일</InfoViewText>
                        <InfoViewContentText>{email}</InfoViewContentText>
                    </InfoView>
                </Info>
            </Scroll>
        </Page>
    );
};
const InfoViewContentTextInput = styled.TextInput``;

const InfoViewContentText = styled.Text``;

const InfoViewText = styled.Text`
  ${(props) => props.theme.NanumSquareEBFont}
  font-size: ${constants.vh(2)}px;
  color: ${(props) => props.theme.fontBlack};
  width : 20%;
`;

const InfoView = styled.View`
  flex-direction: row;
  margin-top: ${constants.vh(2)}px;
  padding-left: ${constants.vw(2)}px;
`;

const Info = styled.View`
  height: ${constants.vh(10)};
  width : 100%;
  border : 0.5px;
  margin-top: ${constants.vh(2)}px;
`;

const Portrait = styled.View`
  width: 22%;
  aspect-ratio: 1;
  border-radius: 1000px;
`;

const PortraitImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 1000px;
`;

const FinishButton = styled.TouchableOpacity``;

const CancelButton = styled.TouchableOpacity``;

const FinishButtonText = styled.Text`
  ${(props) => props.theme.NanumSquareEBFont}
  font-size: ${constants.vh(2)}px;
  color: ${(props) => props.theme.fontBlack};
`

const CancelButtonText = styled.Text`
  ${(props) => props.theme.NanumSquareEBFont}
  font-size: ${constants.vh(2)}px;
  color: ${(props) => props.theme.fontBlack};
`

const Title = styled.Text`
  ${(props) => props.theme.NanumSquareEBFont}
  font-size: ${constants.vh(2)}px;
  color: ${(props) => props.theme.fontBlack};
`;

const TitleHolder = styled.View`
  width: ${constants.vw(100)}px;
  height: ${constants.vh(5.5) + constants.statusBarHeight}px;
  padding-bottom: ${constants.vh(1.5)}px;
  position: absolute;
  top: 0px;
  left: 0px;
  justify-content: flex-end;
  align-items: center;
`;

const Header = styled.View`
  width: 100%;
  height: ${constants.vh(6.3) + constants.statusBarHeight}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  background-color: ${(props) => props.theme.backgroundWhite};
  padding: 0px ${constants.vw(2)}px;
  padding-bottom: ${constants.vh(0.5)}px;
`;

const Page = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.backgroundWhite};
`;

const Scroll = styled.View`
  width: 100%;
  align-items: center;
  padding-top: ${constants.vh(2)}px;
`;

export default Edit;
