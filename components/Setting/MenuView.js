import React from 'react';
import styled from "styled-components";
import {useLogOut,} from "../../components/AuthContext";
import {SETTING_ALARM_ICON, SETTING_ASKING_ICON, SETTING_LOGOUT_ICON, SETTING_SERVICE_ICON} from "../../image";
import constants from "../../constants";

const MenuView = ({navigate}) => {
    const logout = useLogOut();


    return (
        <MenuViews>
            {/*<UtilButton>*/}
            {/*    <Icon source={SETTING_PROFILE_ICON} style={{tintColor: "#000000"}}/>*/}
            {/*    <Title>프로필</Title>*/}
            {/*</UtilButton>*/}
            <InfoMenuView>
                <InfoButton left onPress={() => navigate("LikeHistory")}>
                    <BigTitle>20</BigTitle>
                    <Title info>좋아요</Title>
                </InfoButton>
                <InfoButton info onPress={() => navigate("ReviewHistory")}>
                    <BigTitle info>10</BigTitle>
                    <Title info>리뷰</Title>
                </InfoButton>
            </InfoMenuView>
            <UtilMenuView>
                <UtilButton>
                    <Icon source={SETTING_ALARM_ICON} style={{tintColor: "#000000"}}/>
                    <Title>알림 설정</Title>
                </UtilButton>
                <UtilButton>
                    <Icon source={SETTING_ASKING_ICON} style={{tintColor: "#000000"}}/>
                    <Title>문의하기</Title>
                </UtilButton>
                <UtilButton last onPress={() => navigate("Credit")}>
                    <Icon source={SETTING_SERVICE_ICON} style={{tintColor: "#000000"}}/>
                    <Title>서비스 정보</Title>
                </UtilButton>
                <UtilButton onPress={logout}>
                    <Icon source={SETTING_LOGOUT_ICON} style={{tintColor: "#FF3D52"}}/>
                    <Title style={{color: "#FF3D52"}}>로그아웃</Title>
                </UtilButton>
            </UtilMenuView>
        </MenuViews>
    )
}

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
`

const InfoButton = styled.TouchableOpacity`
  width: 50%;
  height: 100%;
  ${(props) => props.left ? "border-right-width: 2.2px" : ""};
  border-right-color: ${(props) => props.theme.borderGray};
  justify-content: center;
  align-items: center;
`

const BigTitle = styled.Text`
  font-size: ${constants.vw(5)};
  font-weight: bold;
  color: ${(props) => props.theme.fontBigBlack};
`

const UtilMenuView = styled.View`
  flex: 5.5;
  width: 100%;
`

const UtilButton = styled.TouchableOpacity`
  width: 100%;
  height: 15%;
  padding-left: ${constants.vw(7)};
  ${(props) => (props.last ? "border-bottom-width: 1.5px;" : "")};
  border-bottom-color: ${(props) => props.theme.backgroundGray};
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled.Text`
  margin-left: ${(props) => props.info ? 0 : `${constants.vw(4)}`};
  font-size: ${constants.vw(4.2)};

  color: ${(props) => props.info ? props.theme.fontBlackGray : props.theme.fontBigBlack};
`;

const Icon = styled.Image`
  height: ${constants.vw(5.6)};
  width: ${constants.vw(5.6)};
`

export default MenuView;