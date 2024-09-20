import { Dimensions } from "react-native";
import Constants from "expo-constants";

const { width, height } = Dimensions.get("window");

const sizes = {
  screenWidth: width,
  screenHeight: height,
  statusBarHeight: Constants.statusBarHeight,
};

export default sizes;
