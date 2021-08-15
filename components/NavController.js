import React, {useEffect} from "react";
import {useIsLoggedIn, useLoadProfileData} from "./AuthContext";
import MainNavigator from "../navigator/MainNavigator";
import AuthNavigator from "../navigator/AuthNavigator";

const NavController = () => {
  const isLoggedIn = useIsLoggedIn();
  const loadProfileData = useLoadProfileData();
  useEffect( () => {
    loadProfileData();
  }, [])
  return <>{isLoggedIn ? <MainNavigator /> : <AuthNavigator />}</>;
};

export default NavController;
