import React from "react";
import styled from "styled-components";
import constants from "../../../constants";
import { MAGNIFY_ICON } from "../../../image";

const SearchCard = ({ data, storedData, storeData }) => {
  const deleteData = () => {
    for (var i = 0; i < storedData.length; i++) {
      if (storedData[i] === data) {
        console.log("deleted!");
        storedData.splice(i, 1);
        storeData(null);
        break;
      }
    }
  };
  return (
    <View>
      <TapButton onPress={() => {}}>
        <SearchIconPosView>
          <SearchIconView>
            <SearchImage
              source={MAGNIFY_ICON}
              style={{ tintColor: "#000000" }}
            />
          </SearchIconView>
        </SearchIconPosView>
        <RecentWordView>
          <RecentWordText numberOfLines={1}>{data}</RecentWordText>
        </RecentWordView>
      </TapButton>

      <XIconView>
        <XIcon onPress={() => deleteData()}>
          <X>X</X>
        </XIcon>
      </XIconView>
    </View>
  );
};

const View = styled.View`
  width: 100%;
  height: ${constants.vh(8)}px;
  border-bottom-width: 1px;
  border-bottom-color: black;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const RecentWordText = styled.Text`
  ${(props) => props.theme.NanumGothicFont};
  font-size: ${constants.vw(5)}px;
  margin-left: 5px;
`;

const SearchImage = styled.Image`
  width: 60%;
  height: 60%;
  resize-mode: contain;
`;

const SearchIconView = styled.View`
  width: ${constants.vw(10)}px;
  height: ${constants.vw(10)}px;
  border-radius: 1000px;
  border: 1px solid black;
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
  width: 83%;
  height: 100%;
  justify-content: center;
`;

const X = styled.Text`
  ${(props) => props.theme.NanumGothicFont};
  font-size: ${constants.vw(5)}px;
`;

const XIcon = styled.TouchableOpacity`
  width: 100%;
  height: 50%;
  justify-content: center;
  align-items: center;
`;

const XIconView = styled.View`
  width: 10%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export default SearchCard;
