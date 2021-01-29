import React from "react";
import { useIsLoggedIn } from "./AuthContext";
import MainNavigation from "../navigator/MainNavigation";
import AuthNavigation from "../navigator/AuthNavigation";

const NavController = () => {
  const isLoggedIn = useIsLoggedIn();
  return <>{isLoggedIn ? <MainNavigation /> : <AuthNavigation />}</>;
};

export default NavController;
