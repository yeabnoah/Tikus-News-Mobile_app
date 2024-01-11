import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Admin from "../screens/Admin";
import More from "../screens/More";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Admin" component={Admin} />
        <Stack.Screen name="More" component={More} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
