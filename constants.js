import {Dimensions} from "react-native";
import Constants from "expo-constants";

const {width, height} = Dimensions.get("screen");

const vw = (percent) => {
    return Math.round(width * (percent / 100))
}

const vh = (percent) => {
    return Math.round(height * (percent / 100))
}

const statusBarHeight = Constants.statusBarHeight;

<<<<<<< HEAD
const pureheight = Math.floor(height) - 130;

export default { width, height, statusBarHeight, pureheight };
=======
export default {width, height, vw, vh, statusBarHeight};
>>>>>>> 83c5acaa79ead358b9fe42c8ad4ac5286b131ab6
