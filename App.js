import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import AuthProvider from "./components/AuthProvider";
import NavController from "./components/NavController";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  return (
    <AuthProvider isLoggedIn={isLoggedIn}>
      <NavController />
    </AuthProvider>
  );
}
