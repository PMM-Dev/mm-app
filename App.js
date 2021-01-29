import React, { useState } from "react";
import { AuthProvider } from "./components/AuthContext";
import NavController from "./components/NavController";
import "react-native-gesture-handler";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthProvider isLoggedIn={isLoggedIn}>
      <NavController />
    </AuthProvider>
  );
}
