import { Dimensions } from "react-native";
import Constants from "expo-constants";
import * as Device from 'expo-device'

const { width, height } = Dimensions.get("screen");

const vw = (percent) => {
  return Math.round(width * (percent / 100));
};

const vh = (percent) => {
  return Math.round(height * (percent / 100));
};

const statusBarHeight = Constants.statusBarHeight;

const pureheight = vh(92);

const platform = Device.osName;

export default { width, height, vw, vh, statusBarHeight, pureheight, platform };
