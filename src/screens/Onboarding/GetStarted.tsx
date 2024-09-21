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

const GetStarted: React.FC = () => {
  const handleGetStartedPress = () => {
    Alert.alert("Get Started", "Navigating to the next screen...");
  };

  return (
    <ImageBackground
      source={require("../../assets/onboarding/GetStartedBG.png")}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.text}>Welcome to</Text>
        <Text style={styles.boldText}> PlantApp</Text>
      </View>
      <Text style={styles.subText}>
        Identify more than 3000+ plants with 88% accuracy.
      </Text>
      <Image
        source={require("../../assets/onboarding/GetStartedImage.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.footer}>
        <CustomButton label="Get Started" onPress={handleGetStartedPress} />
        <Text style={styles.privacyText}>
          By tapping next, you are agreeing to PlantID Terms of Use & Privacy
          Policy.
        </Text>
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
    paddingHorizontal: sizes.screenWidth * 0.05,
  },
  text: {
    fontSize: sizes.screenWidth * 0.07,
    fontFamily: "Rubik_400Regular",
    color: COLORS.textBlack,
  },
  boldText: {
    fontSize: sizes.screenWidth * 0.07,
    fontFamily: "Rubik_700Bold",
    color: COLORS.textBlack,
  },
  subText: {
    marginTop: sizes.screenHeight * 0.012,
    fontSize: sizes.screenWidth * 0.045,
    fontFamily: "Rubik_400Regular",
    color: COLORS.textGrey,
    width: sizes.screenWidth * 0.8,
    paddingHorizontal: sizes.screenWidth * 0.05,
  },
  image: {
    width: sizes.screenWidth,
    height: sizes.screenHeight * 0.72,
  },
  footer: {
    position: "absolute",
    bottom: sizes.screenHeight * 0.05,
    width: sizes.screenWidth,
  },
  privacyText: {
    textAlign: "center",
    marginTop: sizes.screenHeight * 0.02,
    fontSize: sizes.screenWidth * 0.035,
    fontFamily: "Rubik_400Regular",
    color: "#597165B2",
    width: sizes.screenWidth * 0.8,
    alignSelf: "center",
  },
});

export default GetStarted;
