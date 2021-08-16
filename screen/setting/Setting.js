import React from "react";
import styled from "styled-components";
import {useProfile} from "../../components/AuthContext";
import {SETTING_GUEST_PORTRAIT, SETTING_PENCIL_ICON} from "../../image";
import constants from "../../constants";
import MenuViews from '../../components/Setting/MenuView'


const Setting = ({navigation: {navigate}}) => {
        const {email, name, picture} = useProfile();

        return (
            <Page>
                <ScrollView alwaysBounceVertical={false}>
                    <SrollViewWrapper>
                        <StatusBarSpace/>
                        <HeaderView>
                            <Icon source={SETTING_PENCIL_ICON} style={{tintColor: "#000000"}}/>
                        </HeaderView>
                        <ProfileView>
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
                            <Information>
                                <NameTitle>{name}</NameTitle>
                                <EmailTitle>{email}</EmailTitle>
                            </Information>
                        </ProfileView>
                        <MenuViews navigate={navigate}/>
                    </SrollViewWrapper>
                </ScrollView>
            </Page>
        );
    }
;

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

const HeaderView = styled.View`
  flex: 0.3;
  justify-content: flex-end;
  align-items: flex-end;
  padding-right: ${constants.vw(4)}px;
`

const Icon = styled.Image`
  height: ${constants.vw(5.6)}px;
  width: ${constants.vw(5.6)}px;
`

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

const Information = styled.View`
  justify-content: center;
  margin-left: 6.5%;
`;

const NameTitle = styled.Text`
  ${(props) => props.theme.NanumGothicBoldFont}
  max-width: 260px;
  font-size: ${constants.vw(6)}px;
`;

const EmailTitle = styled.Text`
  ${(props) => props.theme.NanumSquareFont}
  color: ${(props) => props.theme.fontGray};
  font-size: ${constants.vw(3.7)}px;
`;

export default Setting;
