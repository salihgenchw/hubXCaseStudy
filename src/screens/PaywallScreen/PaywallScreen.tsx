import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import sizes from "../../constants/sizes";
import CustomButton from "../../components/CustomButton";
import ListItem from "./components/ListItem";
import SelectPayMethod from "./components/SelectPayMethod";

const PaywallData = [
  {
    title: "Unlimited",
    subTitle: "Plant Identify",
    icon: require("../../assets/icons/scanner.png"),
  },
  {
    title: "Faster",
    subTitle: "Process",
    icon: require("../../assets/icons/speedometer.png"),
  },
  {
    title: "Detailed",
    subTitle: "Plant care",
    icon: require("../../assets/icons/scanner.png"),
  },
];

interface PaywallScreenProps {
  onComplete: () => void;
}

const PaywallScreen: React.FC<PaywallScreenProps> = ({ onComplete }) => {
  const handleGetStartedPress = () => {
    onComplete();
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/PayWallImage.png")}
        style={styles.mainImage}
      />
      <View style={styles.subContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={styles.text}>PlantApp</Text>
          <Text style={styles.boldText}> Premium</Text>
        </View>
        <Text style={styles.featureText}>Access All Features</Text>
        <FlatList
          data={PaywallData}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <ListItem item={item} />}
        />
        <SelectPayMethod />
      </View>

      <View style={styles.footer}>
        <CustomButton
          label="Try free for 3 Days"
          onPress={handleGetStartedPress}
        />
        <Text style={styles.privacyText}>
          After the 3-day free trial period you’ll be charged ₺274.99 per year
          unless you cancel before the trial expires. Yearly Subscription is
          Auto-Renewable
        </Text>
        <Text style={styles.privacyText}>Terms • Privacy • Restore</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101E17",
  },
  mainImage: {
    width: sizes.screenWidth,
    height: sizes.screenHeight * 0.7,
    resizeMode: "stretch",
  },
  subContainer: {
    position: "absolute",
    top: sizes.screenHeight * 0.35,
    width: sizes.screenWidth,
  },
  text: {
    fontSize: sizes.screenWidth * 0.08,
    fontFamily: "Rubik_700Bold",
    color: "#fff",
    paddingLeft: sizes.screenWidth * 0.05,
  },
  boldText: {
    fontSize: sizes.screenWidth * 0.08,
    fontFamily: "Rubik_400Regular",
    color: "#fff",
  },
  featureText: {
    fontSize: sizes.screenWidth * 0.05,
    fontFamily: "Roboto_300Light",
    color: "#b5b5b5",
    paddingLeft: sizes.screenWidth * 0.05,
    marginTop: sizes.screenHeight * 0.01,
  },
  image: {
    width: sizes.screenWidth,
    height: sizes.screenHeight * 0.82,
  },
  footer: {
    position: "absolute",
    bottom: sizes.screenHeight * 0.025,
    width: sizes.screenWidth,
  },
  privacyText: {
    textAlign: "center",
    marginTop: sizes.screenHeight * 0.02,
    fontSize: sizes.screenWidth * 0.025,
    fontFamily: "Rubik_400Regular",
    color: "#597165B2",
    width: sizes.screenWidth * 0.8,
    alignSelf: "center",
  },
});

export default PaywallScreen;
