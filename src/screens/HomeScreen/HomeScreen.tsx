import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "./components/Header";

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
});

export default HomeScreen;
