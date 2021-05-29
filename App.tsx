import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AllStars from "./screens/AllPlanets";
import PlanetView from "./screens/PlanetView";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="All Stars">
                <Stack.Screen name="All Stars" component={AllStars} />
                <Stack.Screen name="Star View" component={PlanetView} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
