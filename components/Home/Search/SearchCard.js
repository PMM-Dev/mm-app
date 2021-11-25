import React, {useContext} from "react";
import styled from "styled-components";
import constants from "../../../constants";
import {MAGNIFY_ICON} from "../../../image";

const SearchCard = ({data, deleteHistory, setIsSearchTextInputPressed, onSearchTextInput}) => {

    return (
        <View>
            <TapButton
                onPress={() => {
                    setIsSearchTextInputPressed(true);
                    onSearchTextInput(data);
                }}
            >
                <SearchIconPosView>
                    <SearchIconView>
                        <SearchImage
                            source={MAGNIFY_ICON}
                            style={{tintColor: "#000000"}}
                        />
                    </SearchIconView>
                </SearchIconPosView>
                <RecentWordView>
                    <RecentWordText numberOfLines={1}>{data}</RecentWordText>
                </RecentWordView>
            </TapButton>

                <XIcon onPress={() => deleteHistory(data)}>
                    <X>x</X>
                </XIcon>
        </View>
    );
};

const View = styled.View`
  width: 100%;
  height: ${constants.vh(8)}px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.backgroundGray};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const RecentWordText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  font-size: ${constants.vw(4.7)}px;
  margin-left: 5px;
`;

const SearchImage = styled.Image`
  width: 50%;
  height: 50%;
  resize-mode: contain;
`;

const SearchIconView = styled.View`
  width: ${constants.vw(10)}px;
  height: ${constants.vw(10)}px;
  justify-content: center;
  align-items: center;
`;

const TapButton = styled.TouchableOpacity`
  width: 90%;
  height: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SearchIconPosView = styled.View`
  width: 17%;
  height: 60%;
  justify-content: center;
  align-items: center;
`;

const RecentWordView = styled.View`
  width: 80%;
  height: 100%;
  justify-content: center;
`;

const X = styled.Text`
  ${(props) => props.theme.NanumGothicFont};
  font-size: ${constants.vw(5)}px;
`;

const XIcon = styled.TouchableOpacity`
  width: 13%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding-right: 2%;
`;

export default SearchCard;
