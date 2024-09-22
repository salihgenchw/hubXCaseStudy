import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import sizes from "../../../constants/sizes";
import COLORS from "../../../constants/color";

const SelectPayMethod: React.FC = () => {
  const [selected, setSelected] = useState(0);

  const renderOption = (
    index: number,
    title: string,
    subtitle: string,
    hasDiscount?: boolean
  ) => {
    return (
      <TouchableOpacity
        style={[
          styles.container,
          {
            borderColor: selected === index ? COLORS.secondary : "#8c8c8c",
            borderWidth: selected === index ? 1 : 0.5,
          },
        ]}
        onPress={() => setSelected(index)}
      >
        {hasDiscount && (
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>Save 50%</Text>
          </View>
        )}
        <View
          style={[
            styles.circle,
            {
              backgroundColor: selected === index ? COLORS.primary : "#24312A",
            },
          ]}
        >
          {selected === index && <View style={styles.innerCircle} />}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.subtitleText}>{subtitle}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      {renderOption(0, "1 Month", "$2.99/month, auto renewable")}
      {renderOption(1, "1 Year", "First 3 days free, then $529,99/year", true)}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: sizes.screenWidth * 0.05,
    borderRadius: sizes.screenWidth * 0.04,
    marginTop: sizes.screenHeight * 0.017,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: sizes.screenWidth * 0.05,
  },
  circle: {
    width: sizes.screenWidth * 0.07,
    height: sizes.screenWidth * 0.07,
    borderRadius: sizes.screenWidth * 0.05,
    justifyContent: "center",
    alignItems: "center",
  },
  innerCircle: {
    backgroundColor: "#fff",
    borderRadius: sizes.screenWidth * 0.02,
    width: sizes.screenWidth * 0.025,
    height: sizes.screenWidth * 0.025,
  },
  textContainer: {
    marginLeft: sizes.screenWidth * 0.05,
    paddingVertical: sizes.screenHeight * 0.015,
  },
  titleText: {
    color: "#fff",
    fontSize: sizes.screenWidth * 0.05,
    fontFamily: "Rubik_500Medium",
  },
  subtitleText: {
    color: "#b5b5b5",
    fontSize: sizes.screenWidth * 0.03,
    fontFamily: "Rubik_400Regular",
  },
  discountBadge: {
    position: "absolute",
    top: 0,
    right: 0,
    borderTopRightRadius: sizes.screenWidth * 0.04,
    borderBottomLeftRadius: sizes.screenWidth * 0.04,
    paddingHorizontal: sizes.screenWidth * 0.03,
    paddingVertical: sizes.screenHeight * 0.01,
    backgroundColor: COLORS.primary,
  },
  discountText: {
    color: "#fff",
    fontFamily: "Rubik_400Regular",
  },
});

export default SelectPayMethod;
