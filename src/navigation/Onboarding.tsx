import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GetStarted from "../screens/Onboarding/GetStarted";
import Onboarding1 from "../screens/Onboarding/Onboarding1";
import Onboarding2 from "../screens/Onboarding/Onboarding2";

const Stack = createStackNavigator();

const Onboarding: React.FC = () => {
  return (
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
    </Stack.Navigator>
  );
};

export default Onboarding;
