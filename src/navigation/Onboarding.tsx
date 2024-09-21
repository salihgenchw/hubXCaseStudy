import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GetStarted from "../screens/Onboarding/GetStarted";

const Stack = createStackNavigator();

const Onboarding: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Onboarding;
