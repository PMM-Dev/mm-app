import React from "react";
import {useIsLoggedIn} from "./AuthContext";
import MainNavigator from "../navigator/MainNavigator";
import AuthNavigator from "../navigator/AuthNavigator";

const NavController = () => {
  const isLoggedIn = useIsLoggedIn();

  return <>{isLoggedIn ? <MainNavigator /> : <AuthNavigator />}</>;
};

export default NavController;
