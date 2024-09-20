import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import sizes from "../../../constants/sizes";
import Entypo from "@expo/vector-icons/Entypo";

const PremiumBox: React.FC = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.icon}
        source={require("../../../assets/icons/goldMail.png")}
      />
      <View style={styles.textContainer}>
        <View style={styles.row}>
          <Text style={styles.input700}>FREE</Text>
          <Text style={styles.input600}> Premium Available</Text>
        </View>
        <Text
          style={[
            styles.input600,
            {
              marginTop: sizes.screenHeight * 0.002,
              fontSize: sizes.screenWidth * 0.037,
            },
          ]}
        >
          Tap to upgrade your account!
        </Text>
      </View>
      <Entypo
        name="chevron-right"
        size={sizes.screenWidth * 0.08}
        color="#E4B046"
        style={styles.chevron}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#24201A",
    borderRadius: 15,
    height: sizes.screenWidth * 0.18,
    width: sizes.screenWidth * 0.9,
    paddingHorizontal: sizes.screenWidth * 0.04,
    marginVertical: sizes.screenHeight * 0.02,
    borderWidth: 0.5,
    borderColor: "#3C3C4340",
    opacity: 0.9,
  },
  icon: {
    width: sizes.screenWidth * 0.12,
    height: sizes.screenWidth * 0.1,
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    marginLeft: sizes.screenWidth * 0.025,
  },
  row: {
    flexDirection: "row",
  },
  input700: {
    fontSize: sizes.screenWidth * 0.045,
    color: "#E4B046",
    fontFamily: "Roboto_700Bold",
  },
  input600: {
    fontSize: sizes.screenWidth * 0.045,
    color: "#E4B046",
    fontFamily: "Roboto_500Medium",
  },
  chevron: {
    marginLeft: "auto",
  },
});

export default PremiumBox;
