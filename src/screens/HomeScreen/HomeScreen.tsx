import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Header from "./components/Header";
import PremiumBox from "./components/PremiumBox";
import COLORS from "../../constants/color";
import Questions from "./components/Questions/Questions";
import Categories from "./components/Categories/Categories";

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <PremiumBox />
        <Questions />
        <Categories />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
  },
});

export default HomeScreen;
