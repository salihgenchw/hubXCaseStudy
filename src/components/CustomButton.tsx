import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import COLORS from "../constants/color";
import sizes from "../constants/sizes";

interface CustomButtonProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onPress,
  disabled = false,
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed,
        disabled && styles.buttonDisabled,
      ]}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: sizes.screenWidth * 0.035,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: sizes.screenWidth * 0.05,
    paddingVertical: sizes.screenWidth * 0.05,
  },
  buttonPressed: {
    backgroundColor: COLORS.secondary,
  },
  buttonDisabled: {
    backgroundColor: "#d6d6d6",
  },
  buttonText: {
    color: "#fff",
    fontSize: sizes.screenWidth * 0.04,
    fontFamily: "Rubik_500Medium",
  },
});

export default CustomButton;
