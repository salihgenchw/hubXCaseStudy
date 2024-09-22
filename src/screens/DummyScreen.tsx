import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useDispatch } from "react-redux";
import { resetOnboarding } from "../redux/onboardingSlice";
import { useNavigation } from "@react-navigation/native";

const DummyScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleResetOnboarding = () => {
    dispatch(resetOnboarding());
    navigation.reset({
      index: 0,
      routes: [{ name: "Onboarding" }],
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi! HubX</Text>
      <Button
        title="Onboarding'i Yeniden Başlat"
        onPress={handleResetOnboarding}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
});

export default DummyScreen;
