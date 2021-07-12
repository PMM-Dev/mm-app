import React, { useState } from "react";
import styled from "styled-components";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ActivityIndicator } from "react-native-paper";
import { useGoogleLogIn } from "../components/AuthContext";
import {
  INTRO_LOGO,
  INTRO_LOGO_TEXT,
  INTRO_GOOGLE_BTN,
  INTRO_TRIANGLE,
} from "../images/index";
import Theme from "../style/Theme";

const Intro = () => {
  const googleLogin = useGoogleLogIn();
  const [isWaiting, setIsWaiting] = useState(false);

  const check = async () => {
    setIsWaiting(true);
    await googleLogin();
    setIsWaiting(false);
  };

  return (
    <Page>
      <LogoView>
        <LogoImage source={INTRO_LOGO} />
        <LogoTextImage source={INTRO_LOGO_TEXT} />
      </LogoView>
      <AuthView>
        <LinearGradient
          colors={[Theme.hlRed, Theme.hlOrange]}
          style={styles.profileGradient}
        >
          <GoogleLoginButton onPress={check}>
            <GoogleLoginButtonImage source={INTRO_GOOGLE_BTN} />
          </GoogleLoginButton>
          <GuestModeView>
            <GuestModeButton>
              <GuestModeButtonText>Guest mode</GuestModeButtonText>
              <GuestModeTriangle source={INTRO_TRIANGLE} />
            </GuestModeButton>
          </GuestModeView>

          {/* <Button
            icon="google"
            mode="contained"
            loading={isWaiting}
            onPress={check}
            style={styles.googleLoginButton}
          >
            <Bold>Sign in with Google</Bold>
          </Button> */}
        </LinearGradient>
      </AuthView>
      <LoadingMask>
        <ActivityIndicator color={Theme.fontBlack} size={"large"} />
      </LoadingMask>
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

const LogoImage = styled.Image`
  height: 25%;
  aspect-ratio: 0.76;
  margin-bottom: 5%;
`;

const LogoTextImage = styled.Image`
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

const GuestModeView = styled.View`
  width: 50%;
  height: 13px;
  align-items: flex-end;
  margin-top: 10px;
`;

const GuestModeButton = styled.TouchableOpacity`
  width: 50%;
  height: 100%;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const GuestModeButtonText = styled.Text`
  font-size: 13px;
  color: ${(props) => props.theme.backgroundWhite};
  padding-right: 5px;
`;

const GuestModeTriangle = styled.Image`
  width: 13px;
  aspect-ratio: 1;
`;

const Bold = styled.Text`
  color: white;
  ${(props) => props.theme.DoHyeonFont}
`;

export default Intro;
