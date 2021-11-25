import React from "react";
import BackButton from "./BackButton";
import SearchButton from "./SearchButton";
import {WRITE_ICON} from "../../image";
import styled from "styled-components"
import constants from "../../constants"
import Theme from "../../style/Theme";

const PostListHeaderMenu = ({navigation, routeName}) => {
    return (
        <>
            <BackButton goBack={() => navigation.goBack()}/>
            <View>
                <WriteButton onPress={() => navigation.navigate("PostWrite", {isModify: false})}>
                    <WriteButtonImage source={WRITE_ICON} style={{tintColor: Theme.fontBlack}}/>
                </WriteButton>
                <SearchButton navigation={navigation} routeName={routeName}/>
            </View>
        </>
    );
};

const WriteButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: ${constants.vw(8.5)}px;
  height: ${constants.vw(8.5)}px;
  border-radius: 1000px;
  background-color: ${(props) => props.theme.backgroundDarkerGray};
  margin-right: ${constants.vh(1.3)}px;
  margin-bottom: ${constants.vh(0.5)}px;
`;

const WriteButtonImage = styled.Image`
  height: 65%;
  width: 65%;
`;

const View = styled.View`
  flex-direction: row;
  align-items: center;
`;

export default PostListHeaderMenu;
