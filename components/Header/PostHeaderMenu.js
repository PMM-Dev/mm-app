import React from "react";
import BackButton from "./BackButton";
import SearchButton from "./SearchButton";
import styled from "styled-components"

const PostListHeaderMenu = ({ navigation, routeName }) => {
    return (
        <>
            <BackButton goBack={() => navigation.goBack()} />
            <SearchButton navigation={navigation} routeName={routeName} />
        </>
    );
};

const View = styled.View`
  flex-direction: row;
`;

export default PostListHeaderMenu;
