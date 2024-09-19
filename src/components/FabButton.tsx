import React from "react";
import { TouchableOpacity, StyleSheet, Image, Dimensions } from "react-native";
import colors from "../constants/color";

const { width } = Dimensions.get("window");

const FabButton: React.FC = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Image
        source={require("../assets/icons/FabIcon.png")}
        style={{ width: width * 0.07, height: width * 0.07 }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: 35,
    borderWidth: 5,
    borderColor: colors.secondary,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});

export default FabButton;
