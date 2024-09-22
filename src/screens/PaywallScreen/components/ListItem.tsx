import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import sizes from "../../../constants/sizes";

interface ListItemProps {
  item: {
    title: string;
    subTitle: string;
    icon: any;
  };
}

const ListItem: React.FC<ListItemProps> = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={item.icon} style={styles.icon} />
      </View>
      <Text style={styles.listTitleText}>{item.title}</Text>
      <Text style={styles.listSubTitleText}>{item.subTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#24312A",
    width: sizes.screenWidth * 0.4,
    height: sizes.screenHeight * 0.16,
    marginLeft: sizes.screenWidth * 0.05,
    borderRadius: sizes.screenWidth * 0.05,
    marginTop: sizes.screenHeight * 0.02,
    padding: sizes.screenWidth * 0.047,
  },
  iconContainer: {
    backgroundColor: "#101E17",
    padding: sizes.screenWidth * 0.03,
    borderRadius: sizes.screenWidth * 0.02,
    width: sizes.screenWidth * 0.11,
    height: sizes.screenWidth * 0.11,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: sizes.screenWidth * 0.05,
    height: sizes.screenWidth * 0.05,
  },
  listTitleText: {
    color: "#fff",
    fontSize: sizes.screenWidth * 0.055,
    fontFamily: "Rubik_400Regular",
    marginTop: sizes.screenHeight * 0.015,
  },
  listSubTitleText: {
    color: "#b5b5b5",
    fontSize: sizes.screenWidth * 0.03,
    fontFamily: "Rubik_400Regular",
    marginTop: sizes.screenHeight * 0.006,
  },
});

export default ListItem;
