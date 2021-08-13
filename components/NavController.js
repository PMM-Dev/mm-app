import React from "react";
import { useIsLoggedIn } from "./AuthContext";
import MainNavigation from "../navigator/MainNavigation";
import AuthNavigator from "../navigator/AuthNavigator";

const NavController = () => {
  const isLoggedIn = useIsLoggedIn();
  return <>{isLoggedIn ? <MainNavigation /> : <AuthNavigator />}</>;
};

export default NavController;
