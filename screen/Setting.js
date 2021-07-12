import React, { useEffect } from "react";
import styled from "styled-components";
import {
  useloadProfile,
  useLogOut,
  useProfile,
} from "../components/AuthContext";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import {
  SETTING_ARROW,
  SETTING_BOOKMARK_ICON,
  SETTING_ASKING_ICON,
  SETTING_SERVICE_ICON,
} from "../images/index";
import constants from "../constants";

const Setting = () => {
  const logout = useLogOut();
  const loadProfile = useloadProfile();
  const { email, name, picture } = useProfile();

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <Page>
      <ScrollView>
        <SrollViewWrapper>
          <StatusBarSpace />
          <ProfileView>
            <Profile>
              <LinearGradient
                colors={["#EC575F", "#EE774D", "#EEA68C"]}
                style={styles.profileGradient}
              >
                <ProfileImageIcon>
                  <ProfileImage
                    source={{
                      uri: picture,
                    }}
                    resizeMode={"cover"}
                  />
                </ProfileImageIcon>
              </LinearGradient>
              <InformationView>
                <NameTitle>{name + " 님"}</NameTitle>
                <EmailTitle>{email}</EmailTitle>
              </InformationView>
            </Profile>
            <IconView>
              <Icon source={SETTING_BOOKMARK_ICON} />
              <Icon source={SETTING_ASKING_ICON} />
              <Icon source={SETTING_SERVICE_ICON} />
            </IconView>
          </ProfileView>
          <MenuView>
            <Menu>
              <MenuTitle>프로필</MenuTitle>
              <MenuArrow source={SETTING_ARROW} />
            </Menu>
            <Menu>
              <MenuTitle>내가 쓴 글</MenuTitle>
              <MenuArrow source={SETTING_ARROW} />
            </Menu>
            <Menu>
              <MenuTitle>알림 설정</MenuTitle>
              <MenuArrow source={SETTING_ARROW} />
            </Menu>
            <Menu last>
              <MenuTitle>로그아웃</MenuTitle>
              <MenuArrow source={SETTING_ARROW} />
            </Menu>
          </MenuView>
        </SrollViewWrapper>
      </ScrollView>
    </Page>
  );
};

const styles = StyleSheet.create({
  profileGradient: {
    width: "22%",
    aspectRatio: 1,
    borderRadius: 1000,
    justifyContent: "center",
    alignItems: "center",
  },
});

const Page = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.backgroundWhite};
`;

const ScrollView = styled.ScrollView`
  width: 100%;
`;
const SrollViewWrapper = styled.View`
  height: ${constants.height};
`;

const StatusBarSpace = styled.View`
  width: 100%;
  height: ${constants.statusBarHeight};
`;

const ProfileView = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.backgroundGray};
  justify-content: center;
  align-items: center;
`;

const Profile = styled.View`
  width: 75%;
  height: 38%;
  flex-direction: row;
  justify-content: flex-start;
`;

const ProfileImageIcon = styled.View`
  width: 93%;
  aspect-ratio: 1;
  background-color: ${(props) => props.theme.backgroundGray};
  border-radius: 1000px;
`;

const ProfileImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 1000px;
`;

const InformationView = styled.View`
  justify-content: center;
  margin-left: 6%;
`;

const NameTitle = styled.Text`
  max-width: 260px;
  ${(props) => props.theme.NanumGothicBoldFont}
  font-size: 30px;
`;

const EmailTitle = styled.Text`
  color: ${(props) => props.theme.fontGray};
`;

const IconView = styled.View`
  position: absolute;
  bottom: 0px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Icon = styled.Image`
  width: 20%;
  aspect-ratio: 1;
`;

const MenuView = styled.View`
  flex: 2;
  padding: 11%;
  align-items: center;
`;

const Menu = styled.View`
  width: 100%;
  height: 15%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${(props) => (props.last ? "" : "border-bottom-width: 1.5px;")};
  border-bottom-color: ${(props) => props.theme.backgroundGray};
`;

const MenuTitle = styled.Text`
  font-size: 17px;
`;

const MenuArrow = styled.Image`
  height: 20px;
  width: 9.8px;
  /* aspect-ratio: 0.2; */
`;

export default Setting;
