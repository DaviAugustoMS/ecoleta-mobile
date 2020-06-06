import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/Home";
import Points from "./pages/Points";
import Detail from "./pages/Detail";

const AppSStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppSStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: "#f0f0f5",
          },
        }}
      >
        <AppSStack.Screen name="Home" component={Home} />
        <AppSStack.Screen name="Points" component={Points} />
        <AppSStack.Screen name="Detail" component={Detail} />
      </AppSStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
