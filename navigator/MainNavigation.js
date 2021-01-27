import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screen/Profile";

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <MainNavigation.Navigator>
      {/* <MainNavigation.Screen name="Map" component={Map} />
      <MainNavigation.Screen name="List" component={List} />
      <MainNavigation.Screen name="Lottery" component={Lottery} /> */}
      <MainNavigation.Screen name="Profile" component={Profile} />
    </MainNavigation.Navigator>
  );
};
