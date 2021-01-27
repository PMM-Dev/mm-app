import { View } from "react-native";
import { useIsLoggedIn } from "../components/AuthProvider";

export default () => {
  const isLoggedIn = useIsLoggedIn();
  return (
    <View styled={{ flex: 1 }}>
      {isLoggedIn ? <MainNavigation /> : <AuthNavigation />}
    </View>
  );
};
