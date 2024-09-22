import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import sizes from "../../constants/sizes";
import COLORS from "../../constants/color";
import CustomButton from "../../components/CustomButton";
import DotPageIndicator from "../../components/DotPageIndicator";
import { useNavigation } from "@react-navigation/native";

const Onboarding1: React.FC = () => {
  const navigation = useNavigation();
  const handleGetStartedPress = () => {
    navigation.navigate("Onboarding2");
  };

  return (
    <ImageBackground
      source={require("../../assets/onboarding/Onboarding1BG.png")}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.text}>Take a photo to</Text>
        <Text style={styles.boldText}> identify</Text>
      </View>
      <Text style={styles.text}>the plant!</Text>
      <Image
        source={require("../../assets/onboarding/Brush.png")}
        style={styles.brush}
        resizeMode="contain"
      />
      <Image
        source={require("../../assets/onboarding/Onboarding1Image.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.footer}>
        <CustomButton label="Continue" onPress={handleGetStartedPress} />
        <DotPageIndicator numberOfDots={3} currentIndex={0} />
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
  image: {
    width: sizes.screenWidth,
    height: sizes.screenHeight * 0.82,
  },
  footer: {
    position: "absolute",
    bottom: sizes.screenHeight * 0.05,
    width: sizes.screenWidth,
  },
  brush: {
    position: "absolute",
    top: sizes.screenHeight * 0.057,
    right:
      sizes.screenWidth < 429
        ? sizes.screenWidth * 0.22
        : sizes.screenWidth * 0.11,
    width: sizes.screenWidth * 0.35,
    height: sizes.screenWidth * 0.3,
  },
});

export default Onboarding1;
