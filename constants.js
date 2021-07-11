import { Dimensions } from "react-native";
import Constants from "expo-constants";

const { width, height } = Dimensions.get("screen");

const statusBarHeight = Constants.statusBarHeight;

export default { width, height, statusBarHeight };
