import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Alert,
} from "react-native";
import sizes from "../../constants/sizes";
import COLORS from "../../constants/color";
import CustomButton from "../../components/CustomButton";
import DotPageIndicator from "../../components/DotPageIndicator";

const Onboarding2: React.FC = () => {
  const handleGetStartedPress = () => {
    Alert.alert("Get Started", "Navigating to the next screen...");
  };

  return (
    <ImageBackground
      source={require("../../assets/onboarding/Onboarding2BG.png")}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.text}>Get plant</Text>
        <Text style={styles.boldText}> care guides</Text>
      </View>
      <Image
        source={require("../../assets/onboarding/Brush.png")}
        style={styles.brush}
        resizeMode="contain"
      />
      <Image
        source={require("../../assets/onboarding/FlatIPhone.png")}
        style={styles.iphone}
        resizeMode="contain"
      />
      <Image
        source={require("../../assets/onboarding/Artwork.png")}
        style={styles.artwork}
        resizeMode="contain"
      />
      <Image
        source={require("../../assets/onboarding/Object.png")}
        style={styles.object}
        resizeMode="contain"
      />
      <View style={styles.overlay} />
      <View style={styles.footer}>
        <CustomButton label="Continue" onPress={handleGetStartedPress} />
        <DotPageIndicator numberOfDots={3} currentIndex={1} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: sizes.statusBarHeight,
  },
  header: {
    flexDirection: "row",
    marginTop: sizes.screenHeight * 0.02,
  },
  text: {
    fontSize: sizes.screenWidth * 0.07,
    fontFamily: "Rubik_500Medium",
    color: COLORS.textBlack,
    paddingLeft: sizes.screenWidth * 0.05,
  },
  boldText: {
    fontSize: sizes.screenWidth * 0.07,
    fontFamily: "Rubik_700Bold",
    color: COLORS.textBlack,
  },
  iphone: {
    marginTop: sizes.screenHeight * 0.08,
    width: sizes.screenWidth,
    height: sizes.screenHeight * 0.7,
    zIndex: 1,
  },
  artwork: {
    position: "absolute",
    top: sizes.screenHeight * 0.13,
    width: sizes.screenWidth,
    height: sizes.screenHeight * 0.35,
    zIndex: 2,
  },
  object: {
    position: "absolute",
    top: 0,
    width: sizes.screenWidth,
    height: sizes.screenHeight * 0.8,
    zIndex: -3,
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    width: sizes.screenWidth,
    height: sizes.screenHeight / 4,
    backgroundColor: "#fff",
    zIndex: 2,
    opacity: 0.3,
  },
  footer: {
    position: "absolute",
    bottom: sizes.screenHeight * 0.05,
    width: sizes.screenWidth,
    zIndex: 3,
  },
  brush: {
    position: "absolute",
    top: sizes.screenHeight * 0.055,
    right:
      sizes.screenWidth < 429
        ? sizes.screenWidth * 0.35
        : sizes.screenWidth * 0.25,
    width: sizes.screenWidth * 0.35,
    height: sizes.screenWidth * 0.3,
  },
});

export default Onboarding2;
