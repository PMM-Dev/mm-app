import React from "react";
import BackButton from "./BackButton";

const FeedbackheaderMenu = ({ navigation }) => {
  return (
    <>
      <BackButton goBack={() => navigation.goBack()} />
    </>
  );
};

export default FeedbackheaderMenu;
