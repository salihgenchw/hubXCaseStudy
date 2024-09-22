import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import DummyScreen from "../screens/DummyScreen";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../constants/color";
import { View } from "react-native";
import FabButton from "../components/FabButton";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import Onboarding from "./Onboarding";
import { completeOnboarding } from "../redux/onboardingSlice";

const Tab = createBottomTabNavigator();

const AppNavigator: React.FC = () => {
  const hasSeenOnboarding = useSelector(
    (state: RootState) => state.onboarding.isOnboarded
  );
  const dispatch = useDispatch();

  const handleOnboardingComplete = () => {
    dispatch(completeOnboarding());
  };

  if (!hasSeenOnboarding) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Diagnose") {
              iconName = "search";
            } else if (route.name === "My Garden") {
              iconName = "leaf";
            } else if (route.name === "Profile") {
              iconName = "person";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Diagnose" component={DummyScreen} />
        <Tab.Screen
          name="QR Scanner"
          component={() => <View />}
          options={{
            tabBarIcon: () => <FabButton />,
            tabBarLabel: "",
          }}
        />
        <Tab.Screen name="My Garden" component={DummyScreen} />
        <Tab.Screen name="Profile" component={DummyScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
