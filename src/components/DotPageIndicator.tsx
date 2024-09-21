import React from "react";
import { View, StyleSheet } from "react-native";
import sizes from "../constants/sizes";

interface DotPageIndicatorProps {
  numberOfDots: number;
  currentIndex: number;
  dotSize?: number;
  activeDotColor?: string;
  inactiveDotColor?: string;
}

const DotPageIndicator: React.FC<DotPageIndicatorProps> = ({
  numberOfDots,
  currentIndex,
  dotSize = 10,
  activeDotColor = "black",
  inactiveDotColor = "#D3D3D3",
}) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: numberOfDots }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            {
              width: index === currentIndex ? dotSize * 1.5 : dotSize,
              height: index === currentIndex ? dotSize * 1.5 : dotSize,
              backgroundColor:
                index === currentIndex ? activeDotColor : inactiveDotColor,
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: sizes.screenHeight * 0.015,
  },
  dot: {
    borderRadius: sizes.screenWidth * 0.1,
    margin: sizes.screenWidth * 0.01,
  },
});

export default DotPageIndicator;
