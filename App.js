import React, { useState } from "react";
import { AuthProvider } from "./components/AuthContext";
import NavController from "./components/NavController";
import "react-native-gesture-handler";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // const googleLogin = async () => {
  //   const GOOLGE_ID =
  //     "255552505547-cqontmt71i4itsctd7l6aa39qajbmnq5.apps.googleusercontent.com";

  //   try {
  //     const result = await Google.logInAsync({
  //       androidClientId: GOOLGE_ID,
  //       scopes: ["profile", "email"],
  //     });
  //     if (result.type === "success") {
  //       const user = await fetch("https://www.googleapis.com/userinfo/v2/me", {
  //         headers: { Authorization: `Bearer ${result.accessToken}` },
  //       });
  //       const { email, family_name, given_name } = await user.json();
  //       console.log(email);
  //       console.log(given_name);
  //       console.log(family_name);
  //     } else {
  //       return { cancelled: true };
  //     }
  //   } catch (e) {
  //     return { error: true };
  //   }
  // };

  return (
    // <View>
    //   <Button title="123" onPress={googleLogin} />
    // </View>
    <AuthProvider isLoggedIn={isLoggedIn}>
      <NavController />
    </AuthProvider>
  );
}
