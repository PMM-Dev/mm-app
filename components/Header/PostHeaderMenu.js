import React from "react";
import BackButton from "./BackButton";
import SearchButton from "./SearchButton";
import LikeButton from "../Home/LikeButton";
import styled from "styled-components"

const PostHeaderMenu = ({ navigation, routeName }) => {
    return (
        <>
            <BackButton goBack={() => navigation.goBack()} />
            <View>
                <LikeButton
                    size={10}
                    iconSizeRatio={60}
                />
                <SearchButton navigation={navigation} routeName={routeName} />
            </View>
        </>
    );
};

const View = styled.View`
  flex-direction: row;
`;

export default PostHeaderMenu;
