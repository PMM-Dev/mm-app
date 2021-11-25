import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLogOut, ROLE_ADMIN } from "../../components/AuthContext";
import {
  SETTING_ALARM_ICON,
  SETTING_ASKING_ICON,
  SETTING_LOGOUT_ICON,
  SETTING_SERVICE_ICON,
} from "../../image";
import constants from "../../constants";
import {
  Button,
  Dialog,
  Portal,
  Provider,
  TextInput,
} from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getMyMemberInfo } from "../Api/AppMemberApi";
import * as Linking from 'expo-linking';

const MenuView = ({ navigate, role }) => {
  const logout = useLogOut();
  const [isTokenDialogVisible, setIsTokenDialogVisible] = useState(false);
  const [tokenDialogText, setTokenDialogText] = useState("");
  const [userData, setUserData] = useState();

  useEffect(() => {
    async function bringUserData() {
      const broughtUserData = await getMyMemberInfo();
      setUserData(broughtUserData);
    }
    bringUserData();
  }, [userData]);
  return userData === undefined ? (
    <></>
  ) : (
    <MenuViews>
      {/*<UtilButton>*/}
      {/*    <Icon source={SETTING_PROFILE_ICON} style={{tintColor: "#000000"}}/>*/}
      {/*    <Title>프로필</Title>*/}
      {/*</UtilButton>*/}
      <InfoMenuView>
        <InfoButton left onPress={() => navigate("LikeHistory")}>
          <BigTitle>{userData.likeCount === undefined ? "0" : userData.likeCount}</BigTitle>
          <Title info>좋아요</Title>
        </InfoButton>
        <InfoButton info onPress={() => navigate("ReviewHistory")}>
          <BigTitle info>{userData.reviewCount === undefined ? "0" : userData.reviewCount}</BigTitle>
          <Title info>리뷰</Title>
        </InfoButton>
      </InfoMenuView>
      <UtilMenuView>
        <UtilButton>
          <Icon source={SETTING_ALARM_ICON} style={{ tintColor: "#000000" }} />
          <Title>알림 설정</Title>
        </UtilButton>
        <UtilButton onPress={() => Linking.openURL("mailto:sckwon770@gmail.com")}>
          <Icon source={SETTING_ASKING_ICON} style={{ tintColor: "#000000" }} />
          <Title>문의하기</Title>
        </UtilButton>
        <UtilButton last onPress={() => navigate("Credit")}>
          <Icon
            source={SETTING_SERVICE_ICON}
            style={{ tintColor: "#000000" }}
          />
          <Title>서비스 정보</Title>
        </UtilButton>
        <UtilButton onPress={logout}>
          <Icon source={SETTING_LOGOUT_ICON} style={{ tintColor: "#FF3D52" }} />
          <Title style={{ color: "#FF3D52" }}>로그아웃</Title>
        </UtilButton>
        {role === ROLE_ADMIN && (
          <UtilButton
            onPress={async () => {
              setTokenDialogText(await AsyncStorage.getItem("@jwtAccessToken"));
              setIsTokenDialogVisible(true);
            }}
          >
            <Icon
              source={SETTING_LOGOUT_ICON}
              style={{ tintColor: "#FF3D52" }}
            />
            <Title style={{ color: "#FF3D52" }}>접근 토큰 발급</Title>
          </UtilButton>
        )}
        <Provider>
          <Portal>
            <Dialog visible={isTokenDialogVisible}>
              <Dialog.Title>admin?</Dialog.Title>
              <Dialog.Content>
                <TextInput value={tokenDialogText} />
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={() => setIsTokenDialogVisible(false)}>
                  Done
                </Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </Provider>
      </UtilMenuView>
    </MenuViews>
  );
};

const MenuViews = styled.View`
  flex: 4;
  align-items: center;
`;

const InfoMenuView = styled.View`
  flex: 1;
  border-top-width: 2.2px;
  border-top-color: ${(props) => props.theme.borderGray};
  border-bottom-width: 2.2px;
  border-bottom-color: ${(props) => props.theme.borderGray};
  flex-direction: row;
`;

const InfoButton = styled.TouchableOpacity`
  width: 50%;
  height: 100%;
  ${(props) => (props.left ? "border-right-width: 2.2px" : "")};
  border-right-color: ${(props) => props.theme.borderGray};
  justify-content: center;
  align-items: center;
`;

const BigTitle = styled.Text`
  ${(props) => props.theme.NanumGothicBoldFont};
  font-size: ${constants.vw(5)}px;
  font-weight: bold;
  color: ${(props) => props.theme.fontDeepBlack};
`;

const UtilMenuView = styled.View`
  flex: 5.5;
  width: 100%;
`;

const UtilButton = styled.TouchableOpacity`
  width: 100%;
  height: 15%;
  padding-left: ${constants.vw(7)}px;
  ${(props) => (props.last ? "border-bottom-width: 1.5px;" : "")};
  border-bottom-color: ${(props) => props.theme.backgroundGray};
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  margin-left: ${(props) => (props.info ? 0 : `${constants.vw(4)}`)}px;
  font-size: ${constants.vw(4.2)}px;

  color: ${(props) =>
    props.info ? props.theme.fontBlackGray : props.theme.fontDeepBlack};
`;

const Icon = styled.Image`
  height: ${constants.vw(5.6)}px;
  width: ${constants.vw(5.6)}px;
`;

export default MenuView;
