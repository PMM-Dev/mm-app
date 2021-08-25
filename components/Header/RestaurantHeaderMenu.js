import React from "react";
import styled from "styled-components";
import constants from "../../constants";
import BackButton from "./BackButton";
import SearchButton from "./SearchButton";

const RestaurantHeaderMenu = ({ navigation }) => {
  return (
    <>
      <BackButton goBack={() => navigation.goBack()} />
    </>
  );
};

export default RestaurantHeaderMenu;
