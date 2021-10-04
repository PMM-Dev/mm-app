import React from "react";
import BackButton from "./BackButton";

const SettingLikeRestaurantHeaderMenu = ({ navigation }) => {
  return (
    <>
      <BackButton goBack={() => navigation.goBack()} />
    </>
  );
};

export default SettingLikeRestaurantHeaderMenu;
