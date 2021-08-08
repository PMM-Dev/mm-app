import React, { useEffect } from "react";
import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";
import {
  useloadProfile,
  useLogOut,
  useProfile,
} from "../../components/AuthContext";
import { StyleSheet } from "react-native";
import {
  SETTING_ALARM_ICON,
  SETTING_GUEST_PORTRAIT,
  SETTING_LOGOUT_ICON,
  SETTING_PROFILE_ICON,
  SETTING_REVIEW_ICON,
} from "../../image";
import constants from "../../constants";
import MenuViews from "../../components/Setting/MenuView";

const Setting = ({ navigation: { navigate } }) => {
  const logout = useLogOut();
  const loadProfile = useloadProfile();
  const { email, name, picture } = useProfile();

  useEffect(() => {
    loadProfile();
    console.log(picture);
  }, []);

  return (
    <Page>
      <ScrollView>
        <SrollViewWrapper>
          <StatusBarSpace />
          <ProfileView>
            <Profile>
              <LinearGradient
                colors={["#FF3D52", "#FF603A"]}
                style={styles.profileGradient}
              >
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
              </LinearGradient>
              <InformationView>
                <NameTitle>{name + " 님"}</NameTitle>
                <EmailTitle>{email}</EmailTitle>
              </InformationView>
            </Profile>
            {/*<IconView>*/}
            {/*    <IconButton onPress={() => navigate("Bookmark")}>*/}
            {/*        <IconImage source={SETTING_BOOKMARK_ICON}/>*/}
            {/*    </IconButton>*/}
            {/*    <IconButton>*/}
            {/*        <IconImage source={SETTING_ASKING_ICON}/>*/}
            {/*    </IconButton>*/}
            {/*    <IconButton onPress={() => navigate("Credit")}>*/}
            {/*        <IconImage source={SETTING_SERVICE_ICON}/>*/}
            {/*    </IconButton>*/}
            {/*</IconView>*/}
          </ProfileView>
          <MenuView>
            <MenuButton>
              <MenuIcon
                source={SETTING_PROFILE_ICON}
                style={{ tintColor: "#000000" }}
              />
              <MenuTitle>프로필</MenuTitle>
            </MenuButton>
            <MenuButton>
              <MenuIcon
                source={SETTING_REVIEW_ICON}
                style={{ tintColor: "#000000" }}
              />
              <MenuTitle>내가 쓴 리뷰</MenuTitle>
            </MenuButton>
            <MenuButton>
              <MenuIcon
                source={SETTING_ALARM_ICON}
                style={{ tintColor: "#000000" }}
              />
              <MenuTitle>알림 설정</MenuTitle>
            </MenuButton>
            <MenuButton last onPress={logout}>
              <MenuIcon
                source={SETTING_LOGOUT_ICON}
                style={{ tintColor: "#FF3D52" }}
              />
              <MenuTitle>로그아웃</MenuTitle>
            </MenuButton>
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
  width: ${constants.width}px;
  height: ${constants.height - constants.statusBarHeight}px;
  background-color: ${(props) => props.theme.backgroundWhite};
`;

const ScrollView = styled.ScrollView`
  width: 100%;
`;
const SrollViewWrapper = styled.View`
  height: ${constants.height - 2 * constants.statusBarHeight}px;
`;

const StatusBarSpace = styled.View`
  width: 100%;
  height: ${constants.statusBarHeight}px;
`;

const ProfileView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: ${constants.vw(10)}px;
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

const NameTitle = styled.Text`
  max-width: 260px;
  ${(props) => props.theme.NanumGothicBoldFont}
  font-size: ${constants.vw(6)}px;
`;

const EmailTitle = styled.Text`
  color: ${(props) => props.theme.fontGray};
  font-size: ${constants.vw(3.7)}px;
`;

const MenuView = styled.View`
  flex: 2;
  padding: 11%;
  align-items: center;
`;

const MenuButton = styled.TouchableOpacity`
  width: 100%;
  height: 15%;
  ${(props) => (props.last ? "" : "border-bottom-width: 1.5px;")};
  border-bottom-color: ${(props) => props.theme.backgroundGray};
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const MenuTitle = styled.Text`
  font-size: ${constants.vw(4.5)};
`;

const MenuIcon = styled.Image`
  height: ${constants.vw(6)};
  width: ${constants.vw(6)};
  margin-right: 10px;
`;

export default Setting;
