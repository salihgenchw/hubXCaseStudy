import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import sizes from "../constants/sizes";

const SearchBar: React.FC = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (text: string) => {
    setSearchText(text);
  };

  return (
    <View style={styles.container}>
      <Feather
        name="search"
        size={sizes.screenWidth * 0.05}
        color="gray"
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        placeholder="Search for plants"
        placeholderTextColor="gray"
        value={searchText}
        onChangeText={handleSearchChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    height: sizes.screenWidth * 0.12,
    width: sizes.screenWidth * 0.9,
    paddingHorizontal: sizes.screenWidth * 0.04,
    marginVertical: sizes.screenHeight * 0.02,
    borderWidth: 0.5,
    borderColor: "#3C3C4340",
    opacity: 0.9,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: sizes.screenWidth * 0.035,
    color: "#343434",
    fontFamily: "Rubik_400Regular",
  },
});

export default SearchBar;
