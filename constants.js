import { Dimensions } from "react-native";
import Constants from "expo-constants";

const { width, height } = Dimensions.get("screen");

const statusBarHeight = Constants.statusBarHeight;

const pureheight = Math.floor(height) - 130;

export default { width, height, statusBarHeight, pureheight };
