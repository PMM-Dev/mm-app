import React from "react";
import BackButton from "./BackButton";

const SettingMyCommentHeaderMenu = ({ navigation }) => {
  return (
    <>
      <BackButton goBack={() => navigation.goBack()} />
    </>
  );
};

export default SettingMyCommentHeaderMenu;
