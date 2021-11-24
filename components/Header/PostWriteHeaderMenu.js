import React from "react";
import BackButton from "./BackButton";
import SearchButton from "./SearchButton";
import styled from "styled-components"
import {DOT_BT} from "../../image";
import constants from "../../constants";

const PostWriteHeaderMenu = ({ navigation, routeName}) => {
    return (
        <>
            <BackButton goBack={() => navigation.goBack()} />
        </>
    );
};


export default PostWriteHeaderMenu;
