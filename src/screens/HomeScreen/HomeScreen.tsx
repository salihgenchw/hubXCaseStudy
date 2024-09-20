import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "./components/Header";
import PremiumBox from "./components/PremiumBox";
import COLORS from "../../constants/color";

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <PremiumBox />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.backgroundColor,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
});

export default HomeScreen;
