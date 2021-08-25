import React from "react";
import styled from "styled-components";
import constants from "../../constants";
import BackButton from "./BackButton";
import SearchButton from "./SearchButton";

const RestaurantListHeaderMenu = ({ navigation, routeName }) => {
  return (
    <>
      <BackButton goBack={() => navigation.goBack()} />
      <SearchButton navigation={navigation} routeName={routeName} />
    </>
  );
};

export default RestaurantListHeaderMenu;
