import React from "react";
import BackButton from "./BackButton";
import SearchButton from "./SearchButton";
import {WRITE_ICON} from "../../image";
import styled from "styled-components"
import constants from "../../constants"

const PostListHeaderMenu = ({ navigation, routeName }) => {
    return (
        <>
            <BackButton goBack={() => navigation.goBack()} />
            <View>
                <WriteButton onPress={() => navigation.navigate("PostWrite")}>
                    <WriteImage source={WRITE_ICON}/>
                </WriteButton>
                <SearchButton navigation={navigation} routeName={routeName} />
            </View>
        </>
    );
};

const WriteButton = styled.TouchableOpacity``;

const WriteImage = styled.Image`
  height : ${constants.vh(3)}px;
  width : ${constants.vh(3)}px;
  margin-right: ${constants.vw(3)}px;;
`;

const View = styled.View`
  flex-direction: row;
  align-items: center;
`;

export default PostListHeaderMenu;
