import React, {useState, useEffect} from "react";
import {StyleSheet} from "react-native";
import styled from "styled-components";
import {LinearGradient} from "expo-linear-gradient";
import {ActivityIndicator, Button, Paragraph, Dialog, Portal, Provider, TextInput} from "react-native-paper";
import {
    useIsAdminMode,
    useSetIsAdminMode,
    useLogInByGoogle,
    useLoginInByApple,
    useSaveJwtToken,
    useSaveProfileData,
    useRegisterUser,
    USER_EXIST,
    USER_NOT_EXIST, USER_CANCEL
} from "../components/AuthContext";
import * as AppleAuthentication from 'expo-apple-authentication';
import constants from '../constants'

import {INTRO_GOOGLE_BTN, INTRO_BIG_LOGO_TEXT, INTRO_BIG_LOGO,} from "../image";
import {API_ADMIN_PASSWORD} from "@env";
import Theme from "../style/Theme";

const Intro = () => {
    const loginByGoogle = useLogInByGoogle();
    const loginByApple = useLoginInByApple();
    const registerUser = useRegisterUser();
    const saveJwtToken = useSaveJwtToken();
    const saveProfileData = useSaveProfileData();
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    // For admin mode
    const isAdminMode = useIsAdminMode();
    const setIsAdminMode = useSetIsAdminMode();
    const [countForAdminRegistrationMode, setCountForAdminRegistrationMode] = useState(0);
    const triggerAdminRegistrationMode = () => {
        setCountForAdminRegistrationMode((prev) => prev + 1);
    }
    const [adminModePasswordInput, setAdminPasswordInput] = useState("");
    const checkAdminDialog = () => {
        if (adminModePasswordInput === API_ADMIN_PASSWORD) {
            setIsAdminMode(true);
        }
        setAdminPasswordInput("");
        setCountForAdminRegistrationMode(0);
    }

    const requestLogin = async (login) => {
        setIsLoggingIn(true);

        const response = await login();
        const state = response.state;
        if (state === USER_EXIST) {
            const loadResult = await saveProfileData();
            if (!loadResult) {
                alert('회원 정보를 불러오는 과정에서 문제가 발생했습니다.');
            }

        } else if (state === USER_NOT_EXIST) {
            const registerResult = await registerUser(response.memberRequestDto);
            if (!registerResult) {
                alert('회원 가입하는 과정에서 문제가 발생했습니다.');
            }

            const saveJwtTokenResult = await saveJwtToken(response.memberRequestDto);
            if (!saveJwtTokenResult) {
                alert('유저 토큰을 저장하는 과정에서 문제가 발생했습니다.');
            }

            const saveProfileDataResult = await saveProfileData();
            if (!saveProfileDataResult) {
                alert('유저 정보를 저장하는 과정에서 문제가 발생했습니다.');
            }
        } else if (state !== USER_CANCEL) {
            alert('알 수 없는 문제가 발생했습니다.');
        }

        setIsAdminMode(false);
        setIsLoggingIn(false);
    };

    return (
        <Page>
            <Provider>
                <Portal>
                    <Dialog visible={countForAdminRegistrationMode > 5}>
                        <Dialog.Title>admin?</Dialog.Title>
                        <Dialog.Content>
                            <TextInput
                                value={adminModePasswordInput}
                                onChangeText={text => setAdminPasswordInput(text)}
                            />
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={() => checkAdminDialog()}>Done</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
                <LogoView>
                    <BigLogo onPress={() => triggerAdminRegistrationMode()} activeOpacity={1}>
                        {isAdminMode ? <LogoImage source={INTRO_BIG_LOGO} style={{tintColor: Theme.fontBlack}}/> :
                            <LogoImage source={INTRO_BIG_LOGO}/>}
                    </BigLogo>
                    <BigLogoText source={INTRO_BIG_LOGO_TEXT}/>
                </LogoView>
                <AuthView>
                    <LinearGradient
                        colors={[Theme.hlRed, Theme.hlOrange]}
                        style={styles.profileGradient}
                    >
                        <GoogleLoginButton onPress={() => requestLogin(loginByGoogle)}>
                            <GoogleLoginButtonImage source={INTRO_GOOGLE_BTN}/>
                        </GoogleLoginButton>
                        {constants.platform === "iOS" ?
                            <AppleAuthentication.AppleAuthenticationButton
                                buttonType={AppleAuthentication.AppleAuthenticationButtonType.CONTINUE}
                                buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
                                cornerRadius={3}
                                style={styles.appleLoginButton}
                                onPress={loginByApple}
                            /> : null
                        }
                    </LinearGradient>
                </AuthView>
                {isLoggingIn ? (
                    <LoadingMask>
                        <ActivityIndicator color={Theme.fontBlack} size={"large"}/>
                    </LoadingMask>
                ) : null}
            </Provider>
        </Page>
    );
};

const styles = StyleSheet.create({
    profileGradient: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    appleLoginButton: {
        width: "50%",
        aspectRatio: 4.1,
        marginTop: constants.vh(1)
    }
});

const Page = styled.View`
  position: relative;
  flex: 1;
`;

const LoadingMask = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const LogoView = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const BigLogo = styled.TouchableOpacity`
  height: 25%;
  aspect-ratio: 0.76;
  margin-bottom: 5%;
`;

const LogoImage = styled.Image`
  width: 100%;
  height: 100%;
`

const BigLogoText = styled.Image`
  height: 6.5%;
  aspect-ratio: 4.71;
`;

const AuthView = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 25%;
`;

const GoogleLoginButton = styled.TouchableOpacity`
  width: 50%;
  aspect-ratio: 4.1;
`;

const GoogleLoginButtonImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export default Intro;
