import React from "react";
import { Text, StyleSheet, ImageBackground } from "react-native";
import sizes from "../../../constants/sizes";
import SearchBar from "../../../components/SearchBar";

const Header: React.FC = () => {
  return (
    <ImageBackground
      source={require("../../../assets/HeaderBackground.png")}
      style={styles.container}
    >
      <Text style={styles.text}>Hi, plant lover!</Text>
      <Text style={styles.textBold}>Good Afternoon! ⛅</Text>
      <SearchBar />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: sizes.statusBarHeight || 24,
    width: sizes.screenWidth,
    height: sizes.screenHeight * 0.24,
    paddingHorizontal: sizes.screenWidth * 0.05,
  },
  text: {
    marginTop: sizes.screenHeight * 0.01,
    fontSize: sizes.screenWidth * 0.05,
    fontFamily: "Rubik_400Regular",
  },
  textBold: {
    fontSize: sizes.screenWidth * 0.07,
    fontFamily: "Rubik_500Medium",
  },
});

export default Header;
