import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GetStarted from "../screens/Onboarding/GetStarted";
import Onboarding1 from "../screens/Onboarding/Onboarding1";
import Onboarding2 from "../screens/Onboarding/Onboarding2";
import PaywallScreen from "../screens/PaywallScreen/PaywallScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

interface OnboardingProps {
  onComplete: () => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboarding1"
          component={Onboarding1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboarding2"
          component={Onboarding2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PaywallScreen"
          component={(props: any) => (
            <PaywallScreen {...props} onComplete={onComplete} />
          )}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Onboarding;
